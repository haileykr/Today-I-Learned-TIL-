from sys import stdin
inputs = stdin.readlines()

count = 0
for x in inputs[1]:
    if x == inputs[0]:
        count += 1
        
print(count)