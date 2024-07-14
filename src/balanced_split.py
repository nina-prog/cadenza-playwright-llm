import numpy as np
import os, os.path
import time

from src.utils.logger import setup_logger
logger = setup_logger(__name__, level='INFO')


def triple_split(perc_test=0.2, perc_val=0.2, seed=17, dir = '../data/raw/test_script'):
    """ Split the original data in test, train and validation
    :param perc_test: Percentage of the test data of all data
    :param perc_val: Percentage of the validation data of the training subset
    :param seed: Random seed
    :param dir: Directory to the script files
    """
    if not os.path.isdir(dir):
        logger.info("Directory is missing. Presumably given wrong path")

    test_steps = (
        len([name for name in os.listdir(dir) if os.path.isfile(os.path.join(dir, name)) and name != '.gitkeep']))
    # Lists for all test cases and all test steps
    ts_list = os.listdir(dir)
    ts_list.remove('.gitkeep')
    tc_list = [i for i in range(1, 31)]

    np.random.seed(seed)
    idx = np.random.permutation(tc_list)

    test_ids_ctr = round(len(idx) * perc_test)
    val_ids_ctr = round((len(idx) - test_ids_ctr) * perc_val)
    train_ids_ctr = len(idx) - val_ids_ctr - test_ids_ctr
    logger.debug(train_ids_ctr, val_ids_ctr, test_ids_ctr)

    ids_train = idx[0:train_ids_ctr]
    ids_val = idx[train_ids_ctr:train_ids_ctr + val_ids_ctr]
    ids_test = idx[train_ids_ctr + val_ids_ctr:]
    logger.debug(ids_train, "Length: ", len(ids_train))
    logger.debug(ids_val, "Length: ", len(ids_val))
    logger.debug(ids_test, "Length: ", len(ids_test))

    return ids_train, ids_val, ids_test, ts_list, test_steps


def balance_tests(ids_train, ids_test, ids_val, perc_test, perc_val, ts_list, test_steps):
    """
    :param ids_train: List of testcases used for training
    :param ids_test: List of testcases used for testing
    :param ids_val: List of testcases used for validation
    :param perc_test: Percentage of the test data of all data
    :param perc_val: Percentage of the validation data of the training subset
    :param ts_list: List of all test steps
    :param test_steps: Number of test steps
    """
    trigger_flag = False

    count_tr = 0
    for element in ts_list:
        el = element[0:2].strip("_")
        if int(el) in ids_train:
            count_tr += 1
    est_ctr_tr = round(test_steps * (1 - perc_test) * (1 - perc_val))

    count_v = 0
    for element in ts_list:
        el = element[0:2].strip("_")
        if int(el) in ids_val:
            count_v += 1
    est_ctr_v = round(test_steps * (1 - perc_test) * perc_val)

    count_te = 0
    for element in ts_list:
        el = element[0:2].strip("_")
        if int(el) in ids_test:
            count_te += 1
    est_ctr_te = round(test_steps * perc_test)

    logger.debug(count_tr, "VERSUS", est_ctr_tr)
    logger.debug(count_v, "VERSUS", est_ctr_v)
    logger.debug(count_te, "VERSUS", est_ctr_te)

    if count_te <= est_ctr_te - 3:
        if count_tr >= est_ctr_tr + 3:
            ids_test = np.concatenate((ids_train[-1:], ids_test[:]))
            ids_train = ids_train[:-1]
            trigger_flag = True
        elif count_v >= est_ctr_v + 3:
            ids_test = np.concatenate((ids_val[-1:], ids_test[:]))
            ids_val = ids_val[:-1]
            trigger_flag = True

    if count_v <= est_ctr_v - 3:
        if count_te >= est_ctr_te + 3:
            ids_val = np.concatenate((ids_test[-1:], ids_val[:]))
            ids_test = ids_test[:-1]
            trigger_flag = True
        if count_tr >= est_ctr_tr + 3:
            ids_val = np.concatenate((ids_train[-1:], ids_val[:]))
            ids_train = ids_train[:-1]
            trigger_flag = True

    if count_tr <= est_ctr_tr - 3:
        if count_te >= est_ctr_te + 3:
            ids_train = np.concatenate((ids_test[-1:], ids_train[:]))
            ids_test = ids_test[:-1]
            trigger_flag = True
        elif count_v >= est_ctr_v + 3:
            ids_train = np.concatenate((ids_val[-1:], ids_train[:]))
            ids_val = ids_val[:-1]
            trigger_flag = True

    logger.debug(trigger_flag)
    return ids_train, ids_test, ids_val, trigger_flag


import numpy as np
import os, os.path
import time

from src.utils.logger import setup_logger

logger = setup_logger(__name__, level='INFO')


def balanced_train_val_test_split(perc_test=0.2, perc_val=0.2, balanced=True):
    """ Splitting the testcases into train, validation and test; Optional balancing based on test steps
    :param perc_val: Percentage of the test data of all data
    :param perc_test: Percentage of the test data of all data
    :param balanced: Boolean to balance the test case split based on the amount of underlying test steps
    """

    ids_train, ids_val, ids_test, ts_list, steps = triple_split(perc_val, perc_test, seed=17, dir = '../data/raw/test_script')

    trigger_flag = True
    dl_timer = time.process_time()  # Sollte eig. nicht vorkommen können, dient der Absicherung

    while balanced and trigger_flag and (time.process_time() - dl_timer) < 5:
        ids_train, ids_test, ids_val, trigger_flag = balance_tests(ids_train, ids_test, ids_val, perc_test, perc_val,
                                                                   ts_list, steps)
    if (time.process_time() - dl_timer) >= 5:
        logger.error("Broke Deadlock constraint in train_val_test_split")
    return ids_train, ids_val, ids_test
