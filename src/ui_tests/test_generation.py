""" This script generates the UI tests using LLMs. """
from transformers import GPT2Tokenizer, GPT2LMHeadModel
from src.llm.access_2_cluster import Access2Cluster

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


async def generate_code_with_model_on_cluster(input_model, file_name: str, model: Access2Cluster) -> str:
    """ Generate the test case using the specified LLM model.

    :param input_model: The input for the LLM.
    :param file_name: The name of the file to save the generated test case.
    :param model: The llm model to use.
    :return: The generated test case.
    """
    generated_text = await model.run_inference(input_model)

    # Save the generated code to a new file
    with open(f"pred_test_script/{file_name}.py", "w") as file:
        file.write(generated_text)
        logger.debug(f"Generated code saved to './pred_test_script/{file_name}.py'")

    return generated_text
