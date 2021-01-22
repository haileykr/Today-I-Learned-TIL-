# run length



arrayStack = []

answer = ''

inputStr = input('문자열을 입력해요: ')

for ch in inputStr:
    if len(arrayStack) != 0:
        if ch.lower()    != arrayStack[-1]:

            count = 0
            while len(arrayStack)!= 0:
                t = arrayStack.pop()
                count += 1
                
            answer += str(count) + t
        arrayStack.append(ch.lower())

    else:
        arrayStack.append(ch.lower())


count = 0
while len(arrayStack)!= 0:
    t = arrayStack.pop()
    count += 1
    
answer += str(count) + t
                
                
print (answer)
