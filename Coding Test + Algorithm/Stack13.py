

inputStr = input("문자열을 입력하시오: ")

arrayStack = []

answer = ''

for ch in inputStr:
    if len(arrayStack) == 0:
        answer += ch
    elif ch  != arrayStack[-1]:
        answer += ch


    arrayStack.append(ch)

print(answer)

    
