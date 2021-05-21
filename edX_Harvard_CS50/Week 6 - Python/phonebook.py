import csv
from cs50 import get_string
#file=open("phonebook.csv","a")

name=get_string("name: ")
number=get_string("number: ")

# writer=csv.writer(file)

# writer.writerow((name,number))
# file.close()

with open("phonebook.csv","a") as file:
    writer=csv.writer(file)
    writer.writerow((name,number))