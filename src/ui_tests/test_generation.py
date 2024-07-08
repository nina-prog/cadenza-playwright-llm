""" This script generates the UI tests using LLMs. """
import os
from transformers import GPT2Tokenizer, GPT2LMHeadModel

from src.llm.access_2_cluster import Access2Cluster
from src.utils.helpers import strip_code_fence

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change the level to 'DEBUG' to see more information


def generate_code(combined_input: str, file_name: str, model_name="gpt2") -> str:
    """ Generate the test case using the specified LLM model.

    :param combined_input: The combined input for the LLM.
    :param file_name: The name of the file to save the generated test case.
    :param model_name: The name of the LLM model to use.
    :return: The generated test case.
    """
    generated_text = ""
    match model_name:
        case "gpt2":
            # Load the model
            tokenizer = GPT2Tokenizer.from_pretrained(model_name)
            tokenizer.add_special_tokens({'pad_token': '[PAD]'})
            model = GPT2LMHeadModel.from_pretrained(model_name)
            # Maximum length for GPT-2 model is 1024 tokens
            max_input_length = 800  # Leaving space for generated tokens
            max_new_tokens = 200
            min_length = 32

            # Truncate the input if it exceeds the max input length
            inputs = tokenizer(combined_input, return_tensors="pt", truncation=True, padding='longest', max_length=max_input_length)
            input_ids = inputs['input_ids']
            attention_mask = inputs['attention_mask']

            outputs = model.generate(
                input_ids,
                attention_mask=attention_mask,
                min_length=min_length,
                max_new_tokens=max_new_tokens,
                temperature=0.7,
                num_beams=5,
                no_repeat_ngram_size=2,
                length_penalty=1.0,
                pad_token_id=tokenizer.eos_token_id
            )
            generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
        case "llava":
            pass
        case _:
            logger.error("Model not supported. Please use one of the following: ['gpt2']")

    # Encode to handle special characters
    generated_text = generated_text.encode('utf-8').decode('utf-8')

    # Extract the code block from the generated text
    generated_text = strip_code_fence(generated_text, 'javascript')

    # Save the generated code to a new file
    save_code_to_file(generated_text, file_name, '.py')

    return generated_text


async def generate_code_on_cluster(input_model, file_name: str, model: Access2Cluster) -> [str, str]:
    """ Generate the test case using the specified LLM model and saving the generated test case.

    :param input_model: The input for the LLM.
    :param file_name: The name of the file to save the generated test case.
    :param model: The llm model to use.
    :return: The generated code and the programming language of the code.
    """
    generated_text = await model.run_inference(input_model)

    # Extract the code block from the generated text
    generated_text = strip_code_fence(generated_text, 'javascript')

    # Save the generated code to a new file
    save_code_to_file(generated_text, file_name, '.ts')

    return generated_text


def save_code_to_file(generated_text: str, file_name: str, file_ending: str) -> None:
    """Save the generated code to a file with the specified file extension.

    :param generated_text: The generated code.
    :param file_name: The name of the file.
    :param file_ending: The file extension.
    """
    try:
        file_path = f"pred_test_script/{file_name}{file_ending}"
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(generated_text)
        logger.debug(f"Generated code saved to '{file_path}'")
    except Exception as e:
        logger.error(f"Error saving generated code: {e}")
        raise
