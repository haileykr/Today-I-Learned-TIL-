import cs50
import csv
from sys import argv, exit


def partition_name(full_name):
    names = full_name.split()
    return names if len(names) >= 3 else [names[0], None, names[1]]


# Create an empty file for SQL
open("students.db", "w").close()
db = cs50.SQL("sqlite:///students.db")

db.execute("CREATE TABLE students(firstName TEXT, middleName TEXT, lastName TEXT, house TEXT, birth NUMERIC)")

if len(argv) != 2:
    print("Usage: python imports.py csv_filename")
    exit(1)

with open(argv[1]) as characters:
    # Create DictReader
    reader = csv.DictReader(characters)
    for row in reader:
        names = partition_name(row["name"])
        db.execute("INSERT INTO students VALUES(?,?,?,?,?)",
                   names[0], names[1], names[2], row["house"], row["birth"]
                   )
