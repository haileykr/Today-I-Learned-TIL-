'''
Given the list L, return the index of the given integer x
in that list and if not found, return -1
'''

def solution(L, x):
        
    lower = 0
    upper = len(L) -1
        
    while lower <= upper:
        middle = (lower + upper) // 2
        if L[middle] == x:
            return middle
        elif L[middle] < x:
            lower = middle+1
        else:
            upper = middle-1
    
    return -1