'''
Long Jump

Heejin can only jump 1 or 2-long.
Return the number of ways to jump n-long track!
programmers.co.kr/learn/courses/30/lessons/12914

03/19/21
'''

def solution(n):
    steps = [0, 1, 2]
    for i in range(3, n+1):
        steps.append((steps[i-1] + steps[i-2])%1234567)

    return steps[n]