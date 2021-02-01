expr = input('수식: ')

count = 0
arrayStack = []
answer = ''

# assume that inputs aren't problematic
for ch in expr:

    if ch == '(':
        count += 1
        answer += str(count) + ' '
        arrayStack.append(count)
    else:
        answer +=str(arrayStack.pop()) + ' '




print(answer)
