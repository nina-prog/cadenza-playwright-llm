# %%

from src.main import main
from src.utils.helpers import truncate_text, clean_string
from src.utils.logger import setup_logger
from src.llm.access_2_cluster import Access2Cluster
from src.data.html_processor import extract_html_info

logger = setup_logger(__name__, level='DEBUG') # Change to 'INFO' for less verbosity

# %%

import os
import shutil
import sqlite3
import random

# Pfad zur SQLite-Datenbank
db_path = '../data/playwright_script.db'

# Pfade zu den Verzeichnissen
base_dir = 'dataset'
train_dir = os.path.join(base_dir, 'train')
test_dir = os.path.join(base_dir, 'test')

html_dir = 'html'
screenshot_dir = 'screenshots'

# Verzeichnisstruktur erstellen
def create_dir_structure(base, html_subdir, screenshot_subdir):
    if not os.path.exists(base):
        os.makedirs(base)
    if not os.path.exists(os.path.join(base, html_subdir)):
        os.makedirs(os.path.join(base, html_subdir))
    if not os.path.exists(os.path.join(base, screenshot_subdir)):
        os.makedirs(os.path.join(base, screenshot_subdir))

create_dir_structure(train_dir, html_dir, screenshot_dir)
create_dir_structure(test_dir, html_dir, screenshot_dir)

# Verbindung zur SQLite-Datenbank herstellen
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Daten aus der Datenbank abrufen
cursor.execute("SELECT id, text, html_file, screenshot_file FROM tests")
rows = cursor.fetchall()

# Schließen der Verbindung zur Datenbank
conn.close()

# Zufällige Durchmischung der Liste
random.shuffle(rows)

# Split bei 50/20 (da insgesamt 70 Tests)
train_tests = rows[:50]
test_tests = rows[50:]

# Hilfsfunktion zum Kopieren von Dateien
def copy_files(tests, target_dir):
    for test in tests:
        test_id, text, html_file, screenshot_file = test
        # HTML-Datei kopieren
        if html_file and os.path.exists(html_file):
            shutil.copy(html_file, os.path.join(target_dir, html_dir, os.path.basename(html_file)))
        # Screenshot-Datei kopieren
        if screenshot_file and os.path.exists(screenshot_file):
            shutil.copy(screenshot_file, os.path.join(target_dir, screenshot_dir, os.path.basename(screenshot_file)))

# Dateien in die entsprechenden Verzeichnisse kopieren
copy_files(train_tests, train_dir)
copy_files(test_tests, test_dir)

print(f"Anzahl der Trainingstests: {len(train_tests)}")
print(f"Anzahl der Testtests: {len(test_tests)}")
