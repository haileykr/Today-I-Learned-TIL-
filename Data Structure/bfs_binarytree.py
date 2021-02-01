'''
Binary Tree - BFS
Using node and array queue(queue ADT with python list),
achieve breadth-first search algorithm!
'''


class ArrayQueue:

    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return self.size() == 0

    def enqueue(self, item):
        self.data.append(item)

    def dequeue(self):
        return self.data.pop(0)

    def peek(self):
        return self.data[0]


class Node:

    def __init__(self, item):
        self.data = item
        self.left = None
        self.right = None


class BinaryTree:

    def __init__(self, r):
        self.root = r


    def bft(self):
        q = ArrayQueue()
        
        traversal = []
        
        if self.root:
            q.enqueue(self.root)
        
        while q.size() != 0:
            nextElement = q.dequeue()
            traversal.append(nextElement.data)
            if nextElement.left:
                q.enqueue(nextElement.left)
            if nextElement.right:
                q.enqueue(nextElement.right)
                
        return traversal


def solution(x):
    return 0