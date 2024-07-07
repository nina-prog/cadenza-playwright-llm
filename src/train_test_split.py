# %%

from src.main import main
from src.utils.helpers import truncate_text, clean_string
from src.utils.logger import setup_logger
from src.llm.access_2_cluster import Access2Cluster
from src.data.html_processor import extract_html_info

logger = setup_logger(__name__, level='DEBUG') # Change to 'INFO' for less verbosity

# %%
import sqlite3

# Pfad zur SQLite-Datenbank
db_path = '../data/playwright_script.db'

# Verbindung zur SQLite-Datenbank herstellen
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# SQL-Abfrage zum Zählen der Anzahl der Tests
cursor.execute("SELECT COUNT(*) FROM tests")
num_tests = cursor.fetchone()[0]

# Schließen der Verbindung zur Datenbank
conn.close()

# Ausgabe der Anzahl der Tests
print(f"Anzahl der Tests in der Datenbank: {num_tests}")


# %%
import sqlite3
import random
import json
import os

# Pfad zur SQLite-Datenbank und zu den Ausgabedateien
db_path = '../data/playwright_script.db'
train_output_path = '../data/train_tests.json'
test_output_path = '../data/test_tests.json'

# Verbindung zur SQLite-Datenbank herstellen
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Daten aus der Datenbank abrufen
cursor.execute("SELECT * FROM tests")
rows = cursor.fetchall()

# Schließen der Verbindung zur Datenbank
conn.close()

# Zufällige Durchmischung der Liste
random.shuffle(rows)

# Split bei 60/10
train_tests = rows[:60]
test_tests = rows[60:]

# Umwandlung in eine verständlichere Struktur
train_tests_json = [{"id": row[0], "text": row[1], "image": row[2]} for row in train_tests]
test_tests_json = [{"id": row[0], "text": row[1], "image": row[2]} for row in test_tests]

# Speichern der geteilten Tests in separaten JSON-Dateien
with open(train_output_path, 'w') as f:
    json.dump(train_tests_json, f, indent=4)

with open(test_output_path, 'w') as f:
    json.dump(test_tests_json, f, indent=4)

print(f"Anzahl der Trainingstests: {len(train_tests)}")
print(f"Anzahl der Testtests: {len(test_tests)}")



