'''
Using Stacks
Change the infix expression to postfix expression
and calculate it
'''

class ArrayStack:

    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return self.size() == 0

    def push(self, item):
        self.data.append(item)

    def pop(self):
        return self.data.pop()

    def peek(self):
        return self.data[-1]

def splitTokens(exprStr):
    tokens = []
    val = 0
    valProcessing = False
    for c in exprStr:
        if c == ' ':
            continue
        if c in '0123456789':
            val = val * 10 + int(c)
            valProcessing = True
        else:
            if valProcessing:
                tokens.append(val)
                val = 0
            valProcessing = False
            tokens.append(c)
    if valProcessing:
        tokens.append(val)

    return tokens

def infixToPostfix(tokenList):
    prec = {
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1,
    }

    opStack = ArrayStack()
    postfixList = []
    
    for i in tokenList:
        if i == '(':
            opStack.push(i)
        elif i in prec:
            while not opStack.isEmpty():
                t = opStack.peek()
                if prec[i] <= prec[t]:
                    poppedElement = opStack.pop()
                    postfixList.append(poppedElement)
                else:
                    break
            opStack.push(i)
            
        elif i == ')':
            t = opStack.pop()

            while t != '(':
                postfixList.append(t)
                t = opStack.pop()

        else:
            postfixList.append(i)
            
    while not opStack.isEmpty():
        t = opStack.pop()
        
        if t != '(':
            postfixList.append(t)
            
    return postfixList

def postfixEval(tokenList):
    opStack = ArrayStack()
     
    for i in tokenList:
        if type(i) == int:
            opStack.push(i)
        else:
            
            pop2 = opStack.pop()
            pop1 = opStack.pop()
            
            if i == '*':
                opStack.push(pop1 * pop2)
            
            elif i == '+':
                opStack.push(pop1 + pop2)
            elif i == '-':
                opStack.push(pop1 - pop2)
            else:
                opStack.push(pop1 / pop2)
                           
    return opStack.pop()
            
def solution(expr):
    tokens = splitTokens(expr)
    postfix = infixToPostfix(tokens)
    val = postfixEval(postfix)
    return val