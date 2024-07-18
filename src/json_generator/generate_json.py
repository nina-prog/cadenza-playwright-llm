import sqlite3
import os

from src.data.database import create_finetuning_data_from_db
from src.finetuning import save_finetuning_data_as_json
from src.json_generator.balanced_split import balanced_train_val_test_split
from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')  # Change to 'INFO' for less verbosity
# set working directory to the root of the project

def generate_json(db_file: str, config: dict, name:str)->None:
    conn = sqlite3.connect(db_file)
    c = conn.cursor()
    c.execute('SELECT id FROM tests')
    items = c.fetchall()
    conn.close()

    ids = [i[0] for i in items]

    tc_ids_train, tc_ids_val, tc_ids_test = balanced_train_val_test_split(perc_test=0.2, perc_val=0.2)

    logger.debug("Train: ", tc_ids_train, "\nVal: ", tc_ids_val, "\nTest: ", tc_ids_test)

    tc_ids_train = [str(tc) for tc in tc_ids_train]
    tc_ids_test = [str(tc) for tc in tc_ids_test]
    tc_ids_val = [str(tc) for tc in tc_ids_val]

    logger.debug(tc_ids_train, "\n", tc_ids_val, "\n", tc_ids_test)

    train_ids = []
    test_ids = []
    val_ids = []
    for el in ids:
        if (el.split('.')[0]) in tc_ids_train:
            train_ids.append(el)
        if (el.split('.')[0]) in tc_ids_test:
            test_ids.append(el)
        if (el.split('.')[0]) in tc_ids_val:
            val_ids.append(el)

    finetuning_data_test = create_finetuning_data_from_db(test_ids, db_file, config)
    finetuning_data_train = create_finetuning_data_from_db(train_ids, db_file, config)
    finetuning_data_val = create_finetuning_data_from_db(val_ids, db_file, config)

    save_finetuning_data_as_json(finetuning_data_test, name=f"test_{name}")
    save_finetuning_data_as_json(finetuning_data_train, name=f"train_{name}")
    save_finetuning_data_as_json(finetuning_data_val, name=f"val_{name}")