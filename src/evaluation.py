from nltk.translate.bleu_score import sentence_bleu
from Levenshtein import distance
import esprima


def calculate_scores(generated_code: str, validation_code: str, precondition_code: str) \
        -> dict:
    """ This method returns the scores of the given generated code.

    generated_code: The generated code from the LLM as Python or TypeScript playwright script.
    validation_code: Examples for validation as Python or TypeScript playwright script.
    precondition: The precondition of the step as Python or TypeScript playwright script

    return: The scores of the given generated code as dictionary.
    """
    return {'weighted bleu': calculate_weighted_bleu_score(generated_code, validation_code, precondition_code),
            'success rate': calculate_success_rate(generated_code),
            'levensthein distance': calculate_levenshtein_distance(generated_code, validation_code)}


def calculate_weighted_bleu_score(generated_code: str, validation_code: str, precondition_code: str, alpha: float = 0.5) -> float:
    """ This method returns the BLEU score of the given generated code.

    :param generated_code: The generated code from the LLM as Python or TypeScript playwright script.
    :param validation_code: Examples for validation as Python or TypeScript playwright script.
    :param precondition_code: The precondition of the step as Python or TypeScript playwright script
    :param alpha: The weight of the second part of the BLEU score.
    :return: The BLEU score of the given generated code.
    """
    generated_code_tokens = esprima.tokenize(generated_code)
    validation_code_tokens = esprima.tokenize(validation_code)
    precondition_code_tokens = esprima.tokenize(precondition_code)

    # Convert tokens to string
    generated_code_tokens = [str(elem) for elem in generated_code_tokens]
    validation_code_tokens = [str(elem) for elem in validation_code_tokens]
    precondition_code_tokens = [str(elem) for elem in precondition_code_tokens]

    precondition_code_length = len(precondition_code_tokens)
    precondition_code_length_without_end_lines = -1
    for i in range(precondition_code_length):
        if validation_code_tokens[i] != precondition_code_tokens[i]:
            precondition_code_length_without_end_lines = i
            break

    # The first part: Has the LLM correctly copied the precondition code?
    first_bleu_score = sentence_bleu(references=[validation_code_tokens[:precondition_code_length_without_end_lines]],
                                     hypothesis=generated_code_tokens[:precondition_code_length_without_end_lines])

    # The second part: Has the LLM correctly added the new lines to reach the given goal?
    second_bleu_score = sentence_bleu(references=[validation_code_tokens[precondition_code_length_without_end_lines:]],
                                      hypothesis=generated_code_tokens[precondition_code_length_without_end_lines:])

    return (1 - alpha) * first_bleu_score + alpha * second_bleu_score


#TODO: Implement calculate_success_rate
def calculate_success_rate(generated_code: str):
    pass
    # try to run genrated playwrigth code and if successfull then true 1 as success rate


#TODO: Implement calculate_levenshtein_distance
def calculate_levenshtein_distance(generated_code, validation_code):
    """ This method returns the Levenshtein distance of the given generated code.
    :param generated_code: The generated code from the LLM as TypeScript playwright script.
    :param validation_code: Examples for validation TypeScript playwright script.
    :return: The Levenshtein distance over the length of the max code length of the given generated code.
    """
    gen_script = ' '.join(strip_script_code(generated_code))
    vd_script = ' '.join(strip_script_code(validation_code))

    len_gen = len(generated_code)
    len_valid = len(validation_code)
    max_len = max(len_gen, len_valid)

    #

    score = distance(gen_script, vd_script) / max_len

    return score
    # return the levenshtein distance between the generated code and the validation code


# Strip Code
def strip_script_code(script):
    """
    Script: type String
    Script: TypeScript oder Python Playwrightskript
    """
    # Processing for Generated Scripts
    list_rmv_lines = []
    scriptByLines = script.splitlines()

    for i in range(0, len(scriptByLines)):
        if scriptByLines[i][:10].find("await") == -1:
            # Temporary Exception for typescript scripts using const; Not human reproduceable for python
            if scriptByLines[i][:10].find("const") == -1:
                list_rmv_lines.append(scriptByLines[i])

    for e in list_rmv_lines:
        scriptByLines.remove(e)

    length_script = len(scriptByLines)
    for i in range(0, len(scriptByLines)):
        # String Cleaning/Bearbeitung für TypeScript & PythonScripts
        scriptByLines[i] = scriptByLines[i].lower()
        scriptByLines[i] = scriptByLines[i].replace("_", "")
        while scriptByLines[i].find("  ") != -1:
            scriptByLines[i] = scriptByLines[i].replace("  ", " ")

    return scriptByLines