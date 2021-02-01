'''
List Insertion
When a list L (ascending order) and an integer x are given, 
insert x at the right position and return the new list

List Search
In the given list L, find the index(indices) of the given integer x
and return them as a list
'''

def insertion(L, x):
    listLength = len(L)
    index = -2
    
    for i in range(listLength):
        if L[i]>x:
            index = i
            break
            print(index)
    if index == -1:
        index = 0
    elif index == -2:
        L.append(x)
        return L
    
    L.insert(index,x)
    return L

def search(L, x):
    answer = []
    listLength = len(L)
    
    for i in range(listLength):
        if x == L[i]:
            answer.append(i)
    
    if len(answer) == 0:
        return [-1]
    
    return answer