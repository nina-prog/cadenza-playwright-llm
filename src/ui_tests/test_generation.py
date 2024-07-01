""" This script generates the UI tests using LLMs. """
from transformers import GPT2Tokenizer, GPT2LMHeadModel
from src.llm.access_2_cluster import Access2Cluster
from src.data.python_processor import parse_python

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='DEBUG')  # Change the level to 'DEBUG' to see more information


def generate_code(combined_input: str, file_name: str, model_name="gpt2") -> str:
    """ Generate the test case using the specified LLM model.

    :param combined_input: The combined input for the LLM.
    :param file_name: The name of the file to save the generated test case.
    :param model_name: The name of the LLM model to use.
    :return: The generated test case.
    """
    model_selection = ["gpt2"]

    generated_text = ""
    match model_name:
        case "gpt2":
            # Load the model
            tokenizer = GPT2Tokenizer.from_pretrained(model_name)
            model = GPT2LMHeadModel.from_pretrained(model_name)

            # Generate the code
            inputs = tokenizer.encode(combined_input, return_tensors="pt", truncation=True)
            outputs = model.generate(inputs, max_length=500, num_return_sequences=1, do_sample=True)
            generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
        case _:
            logger.error("Model not supported. Please use one of the following: {model_collection}")

    # Save the generated code to a new file
    with open(f"pred_test_script/{file_name}.py", "w") as file:
        file.write(generated_text)
        logger.debug(f"Generated code saved to './pred_test_script/{file_name}.py'")

    return generated_text


async def generate_code_with_model_on_cluster(input_model, file_name: str, model: Access2Cluster) -> [str, str]:
    """ Generate the test case using the specified LLM model and saving the generated test case.

    :param input_model: The input for the LLM.
    :param file_name: The name of the file to save the generated test case.
    :param model: The llm model to use.
    :return: The generated code and the programming language of the code.
    """
    generated_text = await model.run_inference(input_model)

    code, programming_language = extract_code_for_generated_text(generated_text)
    file_ending = ''
    if programming_language == 'python':
        file_ending = '.py'
    elif programming_language == 'javascript':
        file_ending = '.ts'

    # Save the generated code to a new file
    file_path = f"pred_test_script/{file_name}" + file_ending
    with open(file_path, "w") as file:
        file.write(code)
        logger.debug(f"Generated code saved to './pred_test_script/{file_name}.py'")

    # TODO: Look for a better implementation!
    # Load code from created file to get utf-8 encoding and ensure correct display of umlauts.
    code = parse_python(file_path)
    return code, programming_language


def extract_code_for_generated_text(generated_text: str) -> [str, str]:
    """ Extract the code from the generated text.

    :param generated_text: The input for the LLM.
    :return: The code and the programming language of the code.
    """
    code_separator = "```"
    newline_symbol = "\n"

    code = generated_text
    # Remove first "```"
    start_index = code.find(code_separator) + len(code_separator)
    code = code[start_index:]
    # Save and remove programming language from code
    start_index = code.find(newline_symbol)
    programming_language = code[:start_index]
    start_index += len(newline_symbol)
    code = code[start_index:]
    # Remove last "```"
    end_index = code.find(code_separator)
    code = code[:end_index]
    return code, programming_language
