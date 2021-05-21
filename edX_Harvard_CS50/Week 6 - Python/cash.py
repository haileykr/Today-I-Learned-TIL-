from cs50 import get_float

while True:
    amount = get_float("Change owed: ")
    if amount > 0:
        break
number = [0, 0, 0, 0]

while amount >= 0.25:
    number[0] += 1
    amount -= 0.25

print(amount)

while amount >= 0.10:
    number[1] += 1
    amount -= 0.10

print(amount)

while amount >= 0.05:
    number[2] += 1
    amount -= 0.05

print(amount)

while amount > 0.00:
    number[3] += 1
    amount -= 0.01

print(amount)
print(number)
print(sum(number))

# Calculates the minimum number of coins required to give a user change.
# $ python cash.py
# Change owed: 0.41
# 4
