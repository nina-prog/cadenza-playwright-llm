""" This module contains functions to interact with the SQLite database. """
import sqlite3

from src.finetuning import create_finetuning_data_sample
from src.utils.helpers import get_previous_id
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')  # Change to 'INFO' for less verbosity


def fetch_relevant_items(cursor, current_id: str) -> list:
    """Fetch the relevant items from the database.

    :param cursor: The database cursor object.
    :param current_id: The ID of the current step.
    :return: The relevant items from the database, or an empty list if invalid.
    """
    previous_id = get_previous_id(current_id)
    if not previous_id:
        return []

    query_prev = f"SELECT * FROM tests WHERE id = {previous_id}"
    query_curr = f"SELECT * FROM tests WHERE id = {current_id}"
    cursor.execute(query_prev)
    prev = cursor.fetchall()
    cursor.execute(query_curr)
    curr = cursor.fetchall()

    comp = prev + curr

    return comp


def map_items_to_args(items: list, config: dict, prefix: str = ".\\data\\raw\\") -> dict:
    """Map the items from the database to the arguments for the input prompt.

    :param items: The items from the database.
    :param config: The configuration dictionary.
    :param prefix: The file path prefix.
    :return: The arguments for the input prompt.
    """
    steps = items[1][1].split(']')
    return {
        "html_path": prefix + items[0][3],
        "image_path": prefix + items[0][4],
        "precondition_path": prefix + items[0][5],
        "description": steps[-1].strip(),
        "validation_path": prefix + items[1][5],
        "config": config
    }


def create_finetuning_data_from_db(ids: list, db_file: str, config: dict) -> list:
    """Create finetuning data samples from the given IDs.

    :param ids: List of test step IDs.
    :param db_file: The path to the SQLite database file.
    :param config: Configuration dictionary for data samples.
    :return: List of finetuning data samples.
    """
    finetuning_data = []
    conn = sqlite3.connect(db_file)
    cursor = conn.cursor()

    for current_id in ids:
        items = fetch_relevant_items(cursor, current_id)
        if len(items) < 2:
            logger.warning(f"Insufficient data for ID {current_id}. Expected 2 rows but got {len(items)}.")
            continue

        args = map_items_to_args(items, config)
        args['image_path'] = args['image_path'].replace('\\', '/')

        data_sample = create_finetuning_data_sample(**args)
        finetuning_data.append(data_sample)

    conn.close()
    return finetuning_data
