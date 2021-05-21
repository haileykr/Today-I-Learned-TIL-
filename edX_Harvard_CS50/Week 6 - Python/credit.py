from cs50 import get_string
from sys import exit
import re

while True:
    number = get_string("Number: ")
    bool = False

    for c in number:
        if c.isalpha():
            bool = True
    if (bool != True) and int(number) > 0:
        break

number_length = len(number)
checksum = 0

for i in range(1, number_length, 2):
    checksum += (int(number[number_length-1-i])*2) % 10 + \
        (int(number[number_length-1-i])*2//10) % 100

for j in range(0, number_length, 2):
    checksum += int(number[number_length-1-j])

if checksum % 10 != 0:
    print("INVALID")
    exit(1)

if number_length == 15 and re.search("^34?|^37?", number):
    print("AMEX")

elif number_length == 16 and re.search("^51|^52|^53|^54|^55", number):
    print("MASTERCARD")

elif number_length in (13, 16) and re.search("^4", number):
    print("VISA")

else:
    print("INVALID")
