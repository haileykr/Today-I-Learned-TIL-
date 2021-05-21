 import cs50
  from sys import argv, exit

   if len(argv) != 2:
        print("Usage: python Roster.py house_name")
        exit(1)

    house_name = argv[1]

    db = cs50.SQL("sqlite:///students.db")

    rows = db.execute(
        "SELECT firstName, middleName, lastName, birth FROM students WHERE house=? ORDER BY lastName, firstName", house_name)
    for row in rows:
        firstName, middleName, lastName, birth = row["firstName"], row[
            "middleName"], row["lastName"], row["birth"]
        print(
            f"{firstName} {middleName+' ' if middleName else ''}{lastName}, born {birth}")
