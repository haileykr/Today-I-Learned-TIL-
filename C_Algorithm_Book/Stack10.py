stack = []

arrSize = int(input("정수 배열의 크기: "))

print("정수를 입력하시오: ")
while len(stack) != arrSize:
    eachElement = input().strip()
    stack.append(eachElement)

print("반전 배열:")

while len(stack) != 0:
    print(stack.pop())


        