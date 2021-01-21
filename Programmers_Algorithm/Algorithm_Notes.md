**\*\*PYTHON BASED\*\***!!

## 1. 자료구조 & 알고리즘
- ex. ts = time.time()
  ex. maximum = max(haystack)
  ex. elapsed = time.time() - ts


## 2. 선형 배열 (Linear Array)
- Arrays // Lists (a bit better than arrays) in Python

## 3. 정렬 (Sort) & 탐색 (Search)
- sorted()
: built-in function
: 정렬된 새로운 리스트를 얻어냄

- sort()
: 리스트의 메서드 (method)
: 해당 리스트를 정렬함

- reverse = True
: 정렬의 순서를 반대

- 정렬: 문자열로 이루어진 경우
~> 정렬 순서는 사전 순서!

~> 문자열 길이 순서로 정렬하려면?
=> 정렬에 이용하는 키 지정
ex. L = ['abcd','xyz','spam']
ex. sorted(L) // ['abcd', 'spam', 'xyz']
ex. sorted(L, key = lambda x: len(x)) //  ['xyz','abcd','spam']

- 정렬 키 지정하는 다른 예들
ex. L = [{'name': 'John',   'score': 83},
         {'name': 'Paul',   'score': 92}]
    
=> 레코드들을 이름 순서대로 정렬
L.sort(key = lambda x: x['name'])


1. 선형 탐색 (Linear Search)
: 리스트의 길이에 비례 (O(n))

ex. def linear_search(L, X):
        i=0
        while i <  len(L) and L[i] != x:
            i+= 1
        if i < len(L):
            return i
        else:
            return -1

2. 이진 탐색 (Binary Search)
: lower = 0
: upper = len(List)-1
: middle = upper // 2
: 반복

: 한 번 비교가 일어날 때마다 리스트를 반씩 줄임 (divide & conquer) => O(log n)

: ex. lower = 0
  ex. upper = len(L) -1
  ex. index = -1
  ex. while lower <= upper:
  ex.           middle = (lower + upper) //2
  ex.           if L[middle] == target:
  ex.               ...
  ex.           elif L[middle] < target:
  ex.               lower = ...
  ex.           else:
  ex.               upper= ...

=> 하지만 정렬된 리스트에만 적용 가능하기에 항상 더 좋다고는 하기 어렵다

## 5. 재귀 알고리즘 (Recursive) Basics!



- 예: 이진 트리 (binary tree)
~> left subtree 의 원소들은 모두 작거나 같을 것
~> right subtree 의 원소들은 모두 클 것

=> 이 원칙을 모든 노드에 적용!

- 보다 간단한 예: find the sum of 1 to n
ex. def sumAll(n):
        if n <=1:
            return n
        else:
            return n + sumAll(n-1)

- 재귀 호출의 종결 조건 : 아주 중요한 것이다!!

- 재귀 알고리즘의 효율
1. 위의 것
2. def sum(n):
        s = 0
        while n>=0:
            s += n
            n -= 1
        return s

=> 재귀 버전은  O(n), 반복 순환 버전은 O(n)
=> 하지만 재귀 버전은 함수 호출에 드는 부가적인 시간들이 많이 들기에 효율성은 더 별로

- ex. def sum(n):
            return n*(n+1)//2
=> O(1)!

## 5. 재귀 알고리즘 (Recursive) Application!

- cf. Combination: n개의 서로 다른 원소에서 m개를 선택하는 경우의 수
=> (n  m) = n!/[m!(n-m)!]

ex. from math import factorial as f
ex. def combi(n, m):
ex.     return  f(n)/(f(m)*f(n-m) )

=> 재귀적인 방법으로...
=> (n  m) = (n-1   m) + (n-1   m-1)
: from the perspective of m, adding the cases including m and those not

ex. def combi(n,m):
        if n == m:
            return 1
        elif m ==0:
            return 1
        return combi(n-1,m) + (n-1, m-1)
=> 효율성이 떨어짐!

- 재귀 알고리즘 좋은 예
: 하노이의 탑

- 연습문제 : 재귀적 이진 탐색

ex. def binsearch(x, L, lower, upper):
        if lower > upper:
            return -1
        middle = (lower+upper) //2
        if x == L[middle]:
            return middle
        elif x < L[middle]:
            return binsearch(x, L, lower, middle-1)
        else:
            return binsearch (x, L, middle+1, upper)

## 6. 알고리즘의 복잡도
1. 시간 복잡도 (Time Complexity)
: 문제의 크기와 이를 해결하는 데 걸리는 시간 사이의 관계

2. 공간 복잡도 (Space Complexity)
: 문제의 크기와 이를 해결하는 데 필요한 메모리 공간 사이의 관계

- 평균 시간 복잡도 (Average Time Complexity)
: 임의의 입력 패턴을 가정했을 때 소요되는 시간의 평균

- 최악 시간 복잡도 (Worst-case Time Complexity)
: 가장 긴 시간을 소요하게 만드는 입력에 따라 소요되는 시간

- Big-O Notation
: 점근 표기법
: Asymptotic Notation
: 어떤 함수의 증가 양상을 다른 함수와의 비교로 표현 (알고리즘의 복잡도를 표현할 때 흔히 쓰임)
: O(log n), O(n), O(n^2), O(2^n)등으로 표기


- 선형 시간 알고리즘 (O(n))
ex. n개의 무작위로 나열된 수에서 최댓값을 찾기 위해 선형 탐색 알고리즘을 적용


- 로그 시간 알고리즘 (O(log n))

ex. n개의 크기 순으로 정렬된 수에서 특정 값을 찾기 위해 이진탐색알고리즘 적용 


- 이차 시간 알고리즘 (O(n^2))
ex. 삽입 정렬 (insertion sort)
~> Best Case O(n)
~> Worst Case O(n^2)

- 보다 나은 (낮은) 복잡도를 가지는 정렬 알고리즘
ex. 병합 정렬 (merge sort) - O(n logn)

cf. 입력 패턴에 따라 정렬 속도에 차이가 있지만 정렬 문제에 대해 O(n logn)보다 낮은 복잡도를 갖는 알고리즘은 존재할 수 없음이 증명되어 있음

- 꽤나 복잡한 문제
ex. 배낭 문제 (Knapsack Problem)


## 7. 연결 리스트 (Linked Lists)
- 추상적 자료구조 (ADT)
1. Data ex. 정수, 문자열, 레코드, ...
2. A set of operations ex.삽입, 삭제, 순회, 정렬, 탐색, ...

- 기본적 연결 리스트
: Node ~> Data, Link (next)
: 노드 내의 데이터는 다른 구조로 이어질 수 있음
: (예) 문자열, 레코드,또 다른 연결 리스트 등

: useful infos => head, the number of nodes, tail

ex. def Node:
        def \__init__(self, item):
            self.data = item
            self.next = None

ex. def LinkedList:
        def \__init__(self):
            self.nodeCount= 0
            self.head = None
            self.tail = None


    => 비어있는 연결 리스트


- 연산 정의
1. 특정 원소 참조 (k번째)
=> it's useful to set the first index to be 1, not 0 (for later use)
ex. def getAt(self, pos):
        if pos <=0 or pos > self.nodeCount:
            return None
        i = 1
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1
        return curr

2. 리스트순회
ex. def trasverse(self):
        list = []
        while curr !=None:
            list.append(curr.data)
            curr = curr.next
        return list

3. 길이 얻어내기

4. 원소 삽입

ex. def insertAt(self, pos, newNode):
        //pos가 가리키는 위치에 (1 <= pos <= nodeCount + 1)
        //newNode를 삽입하고 
        //성공/실패에 따라 True /False를 리턴

        if pos < 1 or pos > self.nodeCount + 1:
            return False
        
        if pos == 1:
            newNode.next = self.head
            self.head = newNode
        else:
            //또 두 가지 경우로 나눌 수 있음
            if pos == self.nodeCount +1:
                prev.self.tail
            else:
                prev = self.getAt(pos-1)
            newNode.next = prev.next
            prev.next = newNode
        
        if pos == self.nodeCount + 1:
            self.tail = newNode

        self.nodeCount += 1
        return True

=> 코드 구현 주의사항
(1) 삽입하려는 위치가 리스트 맨 앞일 때
~> prev 없음
~> head 조정 필요

(2) 삽입하려는 위치가 리스트 맨 끝일 때
~> tail 조정 필요

(3) 빈 리스트일 때
~> 이 두 조건에 의해 처리됨
5. 원소 삭제
ex. def popAt(self,pos):
        // pos가 가리키는 위치의 (1 <= pos <= nodeCount)
        // node를 삭제하고
        // 그 node의 데이터를 return

    

=> 코드 구현 주의사항
(1) 삭제할 node가 맨 앞에 있는 경우
: prev 없음
: head 조정 필요

(2) 삭제할 node가 맨 뒤에 있는 경우
: tail 조정 필요

(3) 유일한 노드를 삭제할 때
: 이 두 조건에 의해 처리되는가?
6. 두 리스트 합치기

- 배열과 비교한 연결 리스트
:             |    배열        |    연결 리스트
  저장공간     | 연속한 위치    |    임의의 위치
  특정원소지칭 | 매우 간단 O(1) | 선형 탐색과 유사 O(n)

- 샘플 코드
ex. class LinkedList:
        def \__init__(self):
            self.nodeCount = 0
            self.head = None
            self.tail = None
        
        // 출력하는 함수
        def \__repr__(self):
            if self.nodeCount == 0:
                return 'LinkedList: empty'
        
            s = ''
            curr = self.head
            while curr is not None:
                s += repr(curr.data)
                if curr.next is not None:
                    s += ' -> '
                curr = curr.next
            return s

        def getAt(self.pos):
            if pos <=0 or pos > self.nodeCount:
                return None
            
            i = 1
            curr = self.head
            while i < pos:
                curr = curr.next
                i += 1
            return curr

        def insetAt(self, pos, newNode):
            if pos < 1 or pos > self.nodeCount + 1:
                return False
            if pos == 1:
                newNode.next = self.head
                self.head = newNode
            else:
                if pos == self.nodeCount + 1:
                    prev = self.tail
                else:
                    prev. self.getAt(pos-1)
                
                newNode.next = prev.next
                prev.next = newNode
            
            if pos == self.nodeCount + 1:
                self.tail = newNode

            
            self.nodeCount += 1

            return True

        def popAt(self, pos):
            if pos < 1 or pos > self.nodeCount:
                raise IndexError
                
            prev = self.getAt(pos-1)

            if pos == 1:
                curr = self.head.data
                self.head = self.head.next
                
                if self.nodeCount == 1:
                    self.tail = None
                
            else:
                prev = self.getAt(pos-1)
                curr = prev.next.data
                prev.next = prev.next.next
                
                if pos == self.nodeCount:
                    self.tail = prev

            self.nodeCount-= 1
            return curr


ex. from linkedlist import *
    a = Node(67)
    b = Node(34)
    L = LinkedList()
    L.insertAt(1,a)
    L.insertAt(2,b)
    L // 67 -> 34
    

- 이 연결 리스트 원소 삽입의 복잡도
1. 맨 앞에 삽입하는 경우: O(1)
2. 중간에 삽입하는 경우: O(n)
3. 맨 끝에 삽입하는 경우: O(1) - tail을 가지고 있기 때문에

- 이 연결 리스트 원소 삭제의 복잡도
1. " : O(1)
2. " : O(n)
3. " : O(n) - tail로 prev를 바로 설정할 수가 없고 앞에서부터 찾아야하기 때문

- 연결 리스트 연산 - 두 리스트 연결
ex. def concat(self, L):
        self.tail.next = L.head
        // L이 빈 리스트일 때,ㅡ tail이 null값이 되는 걸 방지하기 위해
        
        if L.tail:
            self.tail = L.tail
            self.nodeCount += L.nodeCount


- 연결 리스트의 최대 장점: 삽입과 삭제가 유연함

: 삽입과 삭제를 더 용이하게 하기 위해서 새 methods 를 만들어 보자
~> insertAfter (prev, newNode)
~> popAfter (prev)

=> 조금 변형된 연결 리스트

: 맨 앞에 dummy node를 추가

ex. class LinkedList:
        def \__init__(self):
            self.nodeCount = 0
            self.head = Node(None)
            self.tail = None
            self.head.next = self.tail


: 이 변형된 연결 리스트에 대한 연산들
1. 리스트 순회
ex. def traverse(self):
        result = []
        curr = self.head
        while current.next:
            curr = curr.next
            result.append(curr.data)
        return result

2. k번째 원소 얻어내기
ex. def getAt(self, pos):
        if pos < 0 or pos > self.nodeCount:
            return None
        i = 0 // different point
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1
        
        return curr

3. 원소의 삽입
ex. def insertAfter(self, prev, newNode):
        //prev가 가리키는 node의 다음에
        // newNode를 삽입하고
        // True/False를 리턴
        newNode.next = prev.next

        //tail 뒤에 삽입시
        if prev.next is None:
            self.tail = newNode
        prev.next = newNode
        self.nodeCount += 1
        return True

~> 원래 연결 리스트보다 간결히 구현 가능

ex. insertAt()의 구현
    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False
        if pos != 1 and pos == self.nodeCount + 1:
            prev = self.tail
        else:
            prev = self.getAt(pos -1 )
        return self.insertAfter(prev, newNode)


- 원소의 삭제: popAfter()

: 코드 구현 주의사항
(1) prev가 마지막 node일 때 (prev.next == None)
~> 삭제할 node없음
~> return None

(2) 리스트 맨 끝의 node를 삭제할 때 (curr.Next == None)
~> tail 조정 필요




ex. def popAfter(self, prev):
        //prev의 다음 node를 삭제하고
        //그 node의 data를 리턴

        if prev.next == None:
            return None
        else:
            curr = prev.next
            prev.next = curr.next
            
            if curr.next == None:
                prev.next = None
                self.tail = prev
            
            
            self.nodeCount -= 1
        
        return curr.data

    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            raise IndexError
        
        if pos != 1 and pos == self.nodeCount + 1:
            prev = self.tail
        else:
            prev = self.getAt(pos-1)
        
        
        return self.popAfter(prev)






- 연결리스트 연산 - 두 리스트연결
: L1.concat(L2)
~> self.tail.next = L2.head.next (b/c there's a dummy node at the beginning)
~> self.tail=L2.tail

ex. def concat(self, L):
        self.tail.next = L.head.next
        if L.tail:
            self.tail = L.tail
        self.nodeCount += L.nodeCount




## 10. 양방향 연결 리스트 (Doubly-Linked List)
: 한 쪽으로만 링크를 연결하지 말고, 양쪽으로!
~> 앞으로도 (다음 node)뒤로도 (이전 node) 진행 가능

: 노드의 구조 확장
ex. class Node:

        def \__init__(self, item):
            self.data = item
            self.prev = None
            self.next = None







: 리스트 처음과 끝에 dummy node를 두자!
~> 데이터를 담고 있는 node들은 모두 같은 모양









ex. class DoublyLinkedList:
        def \__init__(self, item):
            
            self.nodeCount = 0
            self.head = Node(None)
            self.tail = Node(None)
            self.head.prev = None
            self.head.next = self.tail
            self.tail.prev = self.head
            self.tail.next = None
        
2. 리스트 순회

ex. def traverse(self):
        result = []
        curr = self.head
        while curr.next.next:
            curr = curr.next
            result.append(curr.data)
        return result
        
2-2. 리스트 역순회


ex. def reverse(self):
        result = []
        curr = self.tail
        while curr.prev.prev:
            curr = curr.prev
            result.append(curr.data)
        return result

3. 원소 삽입
- L.insertAfter(prev, newNode)

ex. def insertAfter(self, prev, newNode):
        next = prev.next
        newNode.prev = prev
        newNode.next = next
        prev.next = newNode
        next.prev = newNode
        self.nodeCount += 1
        return True


~> 많아 보이지만 self.head와 self.tail 조정 안 해도 돼서 간편




4. 특정 원소 얻어내기
: 코드의 개선
: ex. def getAt(self, pos):
            if pos < 0 or pos > self.nodeCount:
                return Node

            if pos > self.nodeCount // 2:
                i = 0
                curr = self.tail
                while i < self.nodeCount - pos + 1:
                    curr = curr.prev
                    i += 1
            else:
                i = 0
                curr = self.head
                while i < pos:
                    curr = curr.next
                    i += 1

            return curr



5. 원소의 삽입
ex. def insertAt(self, pos, newNode):
        if pos < 1 or pos self.nodeCount + 1:
            return False
        
        prev = self.getAt(pos - 1)
        return self.insertAfter(prev, newNode)





6. 원소의 삭제
ex. def popAfter(self, prev):
        
        
        curr = prev.next
        
        next = curr.next
        
        
        next.prev = prev
        prev.next = next
        
        self.nodeCount -= 1
        
        return curr.data

ex. def popBefore(self, next):
        curr = next.prev
        
        prev = curr.prev
        
        prev.next = next
        next.prev = prev
        
        self.nodeCount -= 1
        
        return curr.data


ex. def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            raise IndexError

        if pos == 1:
            prev = self.head
        else:
            prev = self.getAt(pos-1)





        return self.popAfter(prev)





7. 리스트끼리의 연결

ex. def concat(self, L):
        lastSelf = self.tail.prev
        firstL = L.head.next

        lastSelf.next = firstL
        firstL.prev = lastSelf
        self.tail = L.tail

        self.nodeCount += L.nodeCount

        return True


## 11. 스택 (Stacks)
- 스택 (Stack): 자료 (data element)를 보관할 수 있는 (선형)구조. 단 넣을 때와 꺼낼 때 같은 한 쪽에서 해야 함
=> push and pop
=> LIFO
- 스택의 동작
: 초기 상태 - 비어 있는 스택 (empty stack)
: 데이터 원소 A를 스택에 추가
: 데이터 원소 B를 스택에 추가
: 데이터 원소 꺼내기


ex. S = Stack()
    S.push(A)
    S.push(B)
    r1 = S.pop() //B
    r2 = S.pop() //A 

- 비어 있는 스택에서 원소 꺼내려할 때 ~> 스택 언더플로우 (Stack Underflow)

- 꽉찬 스택에 원소 추가하려 할 때 ~> 스택 오버플로우 (Stack Overflow)

- 스택의 추상적 자료구조 구현
1. 배열 (Array) 이용하여 구현
: Python 리스트와 메서드들을 이용

2. 연결 리스트 (Linked List) 이용하여 구현
: 지난 강의에서 마련한 양방향 연결 리스트 이용

=> size() - 현재 스택에 들어 있는 데이터 원소의 수를 구함
=> isEmpty() - 현재 스택이 비어 있는 지를 판단
=> push(x) - 데이터 원소 x를 스택에 추가
=> pop() - 스택의 맨 위에 저장된 데이터 원소를 제거 (또한, 반환)
=> peek() - 스택의 맨 위에 저장된 데이터 원소를 반환 (제거하진 않음)

- 배열로 구현한 스택
ex. class ArrayStack:
        def \__init__(self):
            // 빈 스택을 초기화
            self.data = []




        def size(self):
            // 스택의 크기 리턴
            return len(self.data)

        def isEmpty(self):
            // 스택이 비어있는 지를 판단
            return self.size() === 0

        def push(self, item):
            // 데이터 원소를 추가
            self.data.append(item)

        def pop(self):
            // 데이터 원소를 리턴 / 삭제
            return self.data.pop()

        def peek(self):
            // 스택의 꼭대기 원소 반환
            return self.data[-1]


- 양방향 연결리스트 이용 스택
ex. from doublylinkedlist import Node
    from doublylinkedlist import DoublyLinkedList

    class LinkedListStack:
        def \__init__(self):
            self.data = DoublyLinkedList()

        def size(self):
            return self.data.getLength()

        def isEmpty(self):
            return self.size() == 0

        def push(self, item):
            node = Node(item)
            self.data.insertAt(self.size() + 1, node)

        def pop(self):
            return self.data.popAt(self.size())

        
        def peek(self):
            return self.data.getAt(self.size()).data

- 스택구현 라이브러리
ex. from pythonds.basic.stack import Stack
ex. S = Stack()
ex. dir(S)

- 연습문제: 수식의 괄호 유효성 검사
=> 알고리즘 설계 ~ 수식을 왼쪽부터 한 글자씩 읽어서:
: 여는 괄호 - ( 또는 { 또는 [ 를 만나면 스택에 푸시
: 닫는 괄호 - ) 또는 } 또는 ]를 만나면
: 스택이 비어 있으면 올바르지 않은 수식
: 스택에서 pop, 쌍을 이루는 여는 괄호인지 검사
: 맞지 않으면 올바르지 않은 수식

: 끝까지 검사한 후 스택이 비어 있어야 올바른 수식임!








ex. def solution(expr):
        match = { '(':')', '{':'}', '[':']'}

        S = ArrayStack()

        for c in expr:
            if c in '({[':
                S.push(c)
                
            elif c in match:
                if S.isEmpty():
                    return False
                else:
                    t = S.pop()
                    if t != match[c]:
                        return False
                    
        return S.isEmpty()

## 12. 수식의 후위표기법
- 중위 표기법 (infix notation)
: (A+B) * (C+D) // 연산자가 피연산자들 가운데에 위치
- 후위 표기법 (postfix notation)
: AB + CD +* //연산자가 피연산자들 뒤에 위치

- 따라서 후위 표기법은
: 순서대로 계산하며
: 괄호가 필요 없는 장점들이 있음

ex. A\*B+C => AB*C+


ex. A+B\*C => ABC*+

- 괄호의 처리
: 여는 괄호는 스택에 push
: 닫는 괄호를 만나면 여는 괄호가 나올 때까지 pop

: 연산자를 만났을 때, 여는 괄호 너머까지 pop하지않도록
: 여는 괄호의 우선순위를 가장 낮게 설정


ex. (A + (B - C)) * D
=> A B C - + D *

ex. A*(B - (C+D))
=> A B C D + - *




- 알고리즘의 설계 - 연산자의 우선순위 설정
ex. prec = {
        '*': 3, '/': 3,
        '+': 2, '-': 2,
        '(': 1
    }

- 중위 표현식을 왼쪽부터 한 글자씩 읽고
    : 피연산자이면 그냥 출력
    : '( '이면 스택에 push
    : ') '이면 '( '이 나올 때까지 스택을 pop & print
    : 연산자이면 스택에서 이보다 높거나 같은 우선순위 것들을 pop & print
        : 그리고 이 연산자는 스택에 푸쉬
    
- 스택에 남아 있는 연산자는 모두 pop & print


- 코드의 구현 - 힌트

1. 스택의 맨 위에 있는 연산자와의 우선순위 비교
: 스택의 peek() 연산이용

2. 스택에 남아 있는 연산자 모두 pop()하는 순환문


: while not opStack.isEmpty()

ex. class ArrayStack:

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
        
    
ex. prec = {
        '*': 3, '/':3,
        '+': 2, '-':2,
        '(': 1
    }

EX. def solution(S):
        answer = ''
        opStack = ArrayStack()

        for c in S:
            if c == '(':
                opStack.push(c)
            elif c in '*+-/':
                while not opStack.isEmpty():
                    t = opStack.peek()
                    if not prec[t] < prec[c]:
                        answer += opStack.pop()
                    else:
                        break
                        
                opStack.push(c)

            elif c == ')':
                t = opStack.pop()
                while not t == '(':
                    answer += t
                    t = opStack.pop()
            else:
                answer +=c

        while not opStack.isEmpty():
            t = opStack.pop()

            if t !='(':
                answer +=t


        return answer

## 13. 후위 표기 수식 계산

- 표기법 전환 시 연산자를 스택에 보관했다면, 계산은 피연산자를 스택에 보관한다


- 덧셈과 곱셈은 popped elements의 순서가 중요하지 않지만, 뺄셈과 나눗셈은 나중 popped element가 앞에 가야 한다











- 알고리즘의 설계
: 후위 표현식을 왼쪽부터 한 글자씩 읽어서
    : 피연산자이면 스택에 push
    : 연산자를 만나면 스택에서 pop -> (1), 또 pop -> (2)
            : (2) 연산  (1)을 계산, 이 결과를 스택에 push


: 수식의 끝에 도달하면 스택에서 pop -> 이것이 계산 결과

- 숫자와 연산자를 분류하는 작업
ex. def splitTokens(exprStr):
        tokens = []
        val = 0
        valProcessing = False
        for c in exprStr:
            if c == ' ':
                consitnue
            if c in '0123456789':
                //공백으로 나눠진 숫자 처리
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

- 변환 과정
ex. from stacks import ArrayStack as Stack
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


    //리스트를 받고 리스트를 리턴한다
    //지난 번과 같이 풀면 됨

ex. def solution(expr):
        tokens = splitTokens(expr)
        postfix = infixToPostfix(tokens)
        val = postfixEval(postfix)
        return val






ex. def postfixEval(tokenList):
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


## 14. 큐 (Queues)!  




- 큐 (Queue): 자료 (data element)를 보관하는 선형의 자료 구조

: 단, 넣을 때에는 한 쪽 끝에서 밀어 넣어야 하고 ~> 인큐 (enqueue)

: 꺼낼 때에는 반대 쪽에서 뽑아 꺼내야 하는 제약이 있음
~> 디큐 (dequeue)

: 선입선출 (FIFO - First-In First-Out)특징을 가지는 선형 자료구조

ex. Q = Queue()
    Q.enqueue(A)
    Q.enqueue(B)
    r1 = Q.dequeue() //A
    r2 = Q.dequeue() //B

- 큐의 추상적 자료구조 구현
1. 배열 이용
: Python 리스트와 메서드들을 이용

2. 연결 리스트 이용
: 이전 강의에서 마련한 양방향 연결 리스트 이용




- 배열로 구현한 큐의 연산복잡도


: size() - O(1)
: isEmpty() - O(1)
: enqueue() - O(1)
: dequeue() - O(n)
  //나머지원소 이동 필요하기 때문에
: peek() - O(1)

- 배열로 구현한 큐
ex. class ArrayQueue:
        def \__init__(self):
            self.data = []

        
        def size(self):
            return len(self.data)

        def isEmpty(self):
            return self.size() == 0

        def enqueue(self, item):
            self.data.append(item)

        def dequeue(self):
            return self.data.pop(0) //0번

        
        
        def peek(self):
            return self.data[0]



- 이중 연결 리스트로 큐를 수현
ex. class LinkedListQueue:

    def __init__(self):
        self.data = DoublyLinkedList()

    def size(self):
        return self.data.getLength()


    def isEmpty(self):
        return self.data.getLength() == 0


    def enqueue(self, item):
        node = Node(item)
        
        self.data.insertAt(self.size()+1,node)


    def dequeue(self):
        return self.data.popAt(1)


    def peek(self):
        return self.data.getAt(1).data

- 라이브러리 있음!
ex. from pythonds.basics.queue import Queue
    Q = Queue()
    dir(Q)


## 15. 환형 큐 (Circular Queue)
- 큐의 활용: 자료를 생성하는 작업과 그 자료를 이용한 작업이 비동기적 (asynchronously)일어나는 경우

: 자료를 생성하는 곳이 여러개일 때
: 자료를 이용하는 곳이 여러개일 때

: 자료를 생성하는 곳과 이용하는 곳이 모두 여러개일 때

: 자료를 처리하여 새로운 자료를 생성하고, 나중에 그 자료를 또 처리하는 작업


- 환형 큐 (Circular Queue): 정해진 개수의 저장 공간을 빙 돌려가며 사용


: front / rear
: dequeue시 나머지 원소들을 이동시켜야 하는 불편함 없음


: 다만, 큐가 가득 차면 더 이상 원소를 넣을 수 없음 (큐 길이를 기억하고 있어야)

- 환형 큐의 추상적 자료구조
: size()
: isEmpty()
: isFull() //new, 공간에 제한이 있으니
: enqueue(x)
: dequeue()
: peek()

- 예시
ex. defined length n => let. 6
    Q.enqueue(A) //rear
    Q.enqueue(B) //rear
    Q.enqueue(c) //rear
    Q.enqueue(d) //rear
    r1 = Q.dequeue() //front

- front와 rear를 적절히 계산하여 배열을 환형으로 재활용

- 배열로 구현한 환형 큐
ex. class CircularQueue:
        def \__init__(self, n):
            //빈 큐를 초기화
            //인자로 주어진 최대 큐 길이설정
            self.maxCount = n
            self.data = [None]*n
            self.count = 0
            self.front = -1
            self.rear = -1


        
        def size(self):
            //현재 큐 길이를 반환
            return self.count

        def isEmpty(self):
            //큐가 비어 있는가?
            return self.count == 0

        def isFull(self);
            //큐가 꽉 차있는가?
            return self.count == self.maxCount


        def enqueue(self, x):
            if self.isFull():
                #IndexError('Queue full')exception으로 처리
            self.rear = (self.rear + 1) % self.maxCount
            self.data[self.rear] = x
            self.count += 1


        def dequeue(self):
            if self.isEmpty():
                raise IndexError('Queue empty')
            self.front = (self.front + 1)  %self.maxCount
            
            x = self.data[self.front]
            self.count -= 1
            return x
            


        def peek(self):
            if self.isEmpty():
                raise IndexError('Queue empty')  
            
            return self.data[(self.front + 1) % self.maxCount]  


## 16. 우선순위 큐 (Priority Queue)
- 우선순위 큐 (Priority Queue): 큐가 FIFO (First-In First-Out)을 따르지 않고 원소들의 우선순위에 따라 큐에서 빠져나오는 방식
ex. 작은 수가 우선순위 높다

ex. 운영체제의 CPU 스케쥴러!

- 우선순위 큐의 구현
: 서로 다른 두 가지 방식 가능
1. enqueue할 때 우선순위 순서를 유지하도록
2. dequeue할 때 우선순위 높은걸 선택


~> 1번이 좀 더 유리!
~> 2번은 무조건 원소 전체를 살펴봐야 함
: 서로 다른 두 가지 재료 이용 가능
1. 선형 배열 이용
2. 연결 리스트 이용

~> 2번이 시간복잡도에서는 좀 더 유리!
~> 삽입이 쉬운 연결리스트가 시간복잡도가 낮음

~> 1번이 공간복잡도에서는 좀 더 유리!

~> 하지만 주로 시간 따라 선택하므로 2번으로 해보자




ex. from doublylinkedlist import Node, DoublyLinkedList
    class PriorityQueue:

        def \__init__(self, x):
            //양방향 연결 리스트를 이용하여 빈 큐를 초기화
            self.queue = DoublyLinkedList()

        def size(self):
            return self.queue.getLength()

        def isEmpty(self):
            return self.size() == 0

        def enqueue(self, x):
            newNode = Node(x)
            curr = self.queue.head

            while curr.next != self.queue.tail and x<curr.next.data:
                curr = curr.next
            self.queue.insertAfter(curr, newNode)

        def dequeue(self):
            return self.queue.popAt(self.queue.getLength())

        def peek(self):
            return self.queue.getAt(self.queue.getLength()).data  






## 17. 트리 (Trees)
- 트리 => 1차원 아니고 2차원 (일렬로 구성되지 않음)
: 정점 (node)과 간선 (edge)을 이용하여 데이터의 배치 형태를 추상화한 자료 구조
: 루트(Root) 노드 + 리프(leaf) 노드 + 내부(Internal) 노드


: 노드 D는 노드 G, H, J의 부모, 그리고 노드 G, H, J는 서로 형제간 (sibling)

: 부모의 부모 (의 부모...) - 조상 (ancestor) 노드
: 자식의 자식(의 자식..) - 후손 (descendant) 노드

: 노드의 수준 (Level) ~> 루트는 L0

: 트리의 높이 (Height) = 최대 수준 (level) + 1
<=> 깊이(depth)라고도 함


- 부분 트리(서브트리 - Subtree)


- 노드의 차수 (Degree) = 자식(서브트리)의 수

- 이진 트리 (binary tree) : 모든 노드의 차수가 2 이하인 트리

- 이진 트리: 재귀적으로 정의할 수 있음
~> 루트 노드 + 왼쪽 서브트리 + 오른쪽 서브트리
(단 이 때 왼쪽과 오른쪽 서브트리 또한 이진 트리)

~> or 빈 트리(empty)

- 포화 이진 트리 (full binary tree) : 모든 레벨에서 노드들이 모두 채워져 있는 트리

: (높이가 k이고 노드의 개수가 (2^k-1)인 이진 트리) 

- 완전 이진 트리 (complete binary tree): 높이 k인 완전 이진 트리





: 레벨 k-2까지는 모든 노드가 2개의 자식을 가진 포화 이진 트리

: 레벨 k-1에서는 왼쪽부터 노드가 순차적으로 채워 있는 이진트리


## 18. 이진트리 (binary tree)

- 이진트리의 추상적 자료구조



: size()
: depth()
: 순회 (traversal) 





- 이진트리의 구현 - 노드 (Node)

~> data, left child, right child
~> 이것들이 있으면 노드의 정의가 가능
































ex. class Node:
        def \__init__(self, itme):
            self.data = item
            self.left = None
            self.right = None
            

            





        def size(self):
            l= self.left.size() if self.left else 0
            r = self.right.size() if self.right else 0
            return l+r+1
            

        def depth(self):
            


            
            l = self.left.depth() if self.left else 0
            r = self.right.depth() if self.right else 0
            return max(l, r) + 1

- 이진 트리의 구현 - 트리 (tree)
ex. class BinaryTree:
        def \__init__(self, r):
            self.root = r



        def size(self):
            //재귀적인 방법으로 쉽게 구할 수 있음!
            //전체 이진트리 size() = left subtree의 size()
            //+ right subtree의 size() + 1(자기 자신)

            
            if self.root:
                return self.root.size()
            else:
                
                return 0




        def depth(self):
            
            //전체 이진 트리의 depth = 왼쪽 subtree의 depth와
            //오른쪽 subtree의 depth중 더 큰 것 + 1
            
            



            if self.root:
                return self.root.depth()
            else:
                return 0




- 이진 트리의 순회 (Traversal)
1. 깊이 우선 순회 (depth first)
~> 중위 순회(in-order)
~> 전위 순회(pre-order) 
~> 후위 순회(post-order)

2. 넓이 우선 순회 (breadth first)

- 중위순회 : left subtree -> 자기자신 -> right subtree


ex. class Node:

        def inorder(self):
            traversal = []
            if self.left:
                traversal += self.left.inorder()

            traversal.append(self.data)
            if self.right:
                traversal += self.right.inorder()


        
            return traversal

ex. class BinaryTree:


        def inorder(self):
            if self.root:
                return self.root.inorder()

            else:


                return []
            
- 전위 순회 (Pre-order Traversal)
: 자기자신 -> left subtree -> right subtree




- 후위 순회 (Post-order Traversal)
: left subtree -> right subtree -> 자기 자신

## 19. 이진트리 - 넓이 우선 순회
- 원칙: 수준 (level)이 낮은 노드를 우선으로 방문
: 같은 수준의 노드들 사이에는, 부모 노드의 방문 순서에 따라 방문하고 왼쪽 자식 노드를 오른쪽 자식 노드보다 먼저 방문

=> 재귀적 (recurvie)인 코드가 적절한가?
=> 아니다!

- 한 노드를 방문했을 때, 나중에 방문할 노드들을 순서대로 기억해 두어야 한다
=> 큐 (queue)를 이용!



ex. class BinaryTree:
        def bft(self):

            q = ArrayQueue()
            traversal =[]

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
            
- 알고리즘의 구현방법!
1. (초기화) traversal <- 빈 리스트, q <- 빈 큐



2. 빈 트리가 아니면, root node를 q에 추가 (enqueue)
3. q가 비어 있지 않은 동아
3.1 node <- q에서 원소를 추출 (enqueue)
3.2. node를 방문
3.3. 노드의 왼쪽, 오른쪽 자식 (있으면) 들을 q에 추가
4. q가 빈 큐가 되면 모든 노드 방문 완료








## 20. 이진 탐색 트리 (Binary Search Tree)












- 이진탐색트리
: 모든 노드에 대해서, 왼쪽 서브트리에 있는 데이터는 모두 현재 노드의 값보다 작고, 오른쪽 서브트리에 있는 데이터는 모두 현재 노드의 값보다 크다

: (중복되는 데이터 원소는 없는 것으로 가정!)

: 데이터 검색에 용이

- (이미 정렬된) 배열을 이용한 이진 탐색과 비교
: (장점) 데이터 원소의 추가/삭제가 용이
: (단점) 공간 소요가 큼
=> 항상 O(log n)의 복잡도는 아님! (다음 강의)

- 이진탐색트리의 추상적 자료구조
: 데이터 표현 - 각 노드는 (key, value)의 쌍으로
=> 키를 이용해서 검색 가능, 보다 복잡한 데이터 레코드로 확장 가능

- 연산의 정의
: insert(key, data) - 트리에 주어진 데이터 원소를 추가
: remove(key) - 특정 원소를 트리로부터 삭제
: lookup(key) - 특정 원소를 검색
: inorder(key) -키의 순서대로 데이터 원소를 나열
: min(), max()- 최소키, 최대키를 가지는 원소를 각각 탐색

- 코드 구현
ex. class Node:
        def \__init__(self, key, data):
            self.key = key
            self.data = data
            self.left = None
            self.right = None


        
        def inorder(self):
            traversal = []
            if self.left:
                traversal += self.left.inorder()
            traversal.append(self)
            if self.right:
                traversal += self.right.inorder()
            return traversal

        
        def min(self):
            if self.left:
                return self.left.min()
            else:
                return self


        def max(self):
            if self.right:
                
                

                return self.right.max()
            else:
                return self




        def lookup(self, key, parent =None):
            //입력 인자 - 찾으려는 키 값
            //리턴 - 찾은 노드와, 그것의 부모 노드
            if key <self.key:
                
                if self.left:
                    return self.left.lookup(key, self)
                    //'self' as the parent node!
                else:
                    return None, None
            elif key > self.key:
                if self.right:
                    return self.right.lookup(key, self)
                else:
                    return None, None
            else:
                return self, parent

                
        
        
        def insert (self, key, data)
            //입력 인자 -키, 데이터 원소
            //리턴 - 없음

            if key < self.key:
                if self.left:
                    self.left.insert(key,data)

                else:
                    self.left = Node(key,data)

            elif key > self.key:
                if self.right:

                    self.right.insert(key, data)

                else:
                    self.right = Node(key, data)

            else:
                //원소가 self와 같을 때
                //하지만 중복된 원소는 받지 않으므로
                
                



                raise KeyError('duplicate keys!')

            
                

            


ex. class BinSearchTree:
        def \__init__(self):
            self.root = None


        
        def inorder(self):
            if self.root:
                return self.root.inorder()
            else:
                return []

        
        def min(self):
            if self.root:
                return self.root.min()
            else:
                return None


        def max(self):
            if self.root:
                return self.root.max()
            else:
                return None

        def lookup(self, key):
            //입력 인자 - 찾으려는 대상 키
            //리턴 - 찾은 노드와, 그것의 부모 노드
            if self.root:
                return self.root.lookup(key)
            else:
                return None,None


        
        def insert(self, key, data):
            if self.root:
                self.root.insert(key, data)
            else:
            
                self.root = Node(key,data)





## 21. 이진탐색트리 (Binary Search Tree)(2)


- 이진탐색트리 원소 삭제
1. 키 (key)를 이용해서 노드를 찾는다
: 해당 키의 노드가 없으면, 삭제할 것도 없음
: 찾은 노드의 부모 노드도 알고 있어야 함 (2번 보라)
2. 찾은 노드를 제거한 후에도, 이진탐색트리구조를 만족하도록 정리해야 함


- 인터페이스의 설계
: 입력 - 키 (key)
: 출력 - 삭제한 경우 True, 해당 키의 노드가 없는 경우 False


ex. class BinSearchTree:
        def remove(self, key):
            node, parent = self.lookup(key)
            if node:
                nChildren  = node.countChildren()
                # The simplest case of no children
                if nChildren = 0:
                    # 만약 parent가 있으면
                    # node가 왼쪽 자식인 지 오른쪽 자식인 지 판단하여
                    # parent.left/right을 None으로 하여
                    # leaf node였던 자식을 트리에서 끊어냄
                    if parent:
                        if parent.left == node:
                            parent.left = None
                        else:
                            parent.right = None
                    # 만약 parent == None인 경우 (node는 root인 경우)
                    # self.root = None으로 빈 트리 만듦
                    else:
                        self.root = None

                
                # When the node has only one child
                elif nChildren = 1:
                    # 하나 있는 자식이 왼쪽인 지 오른쪽인 지 판단하여
                    # 그 자식을 어떤 변수가 가리키도록 한다
                    if node.left:
                        tmp = node.left
                    else:
                        
                        
                        tmp = node.right

                    # 만약 parent가 있으면 
                    # node가 왼쪽 자식인 지 오른쪽 자식인 지 판단하여
                    # 위에서 가리킨 자식을 대신 node의 자리에 넣는다

                    if parent:
                        if parent.left == node:
                            parent.left = tmp
                        else:
                            parent.right = tmp
                    
                    # 만약 node가 root인 경우
                    # self.root에 가리킨 자식을 대신 넣음
                    
                    else:
                        self.root = tmp

                # When the node has both children
                else:
                    parent = node
                    successor = node.right
                    # parent는 node를 가리키고 있고,
                    # successor는 node의 오른쪽 자식을 가리키고 있으므로,
                    # successor로부터 왼쪽 자식의 링크를 반복해 따라감으로
                    # 순환문이 종료될 때 successor는 바로 다음 키를 가진 노드로
                    # parent는 그 successor의 부모를 가리키도록 함
                    
                    while successor.left:
                        parent = successor
                        successor = successor.left

                    
                    
                    # 삭제하려는 node에 successor's key and data 대입
                    node.key = successor.key
                    node.data = successor.data

                    # 이제 successor가 parent의 왼쪽 자식인 지 오른쪽 자식인 지 판단하여
                    # 그에 따라 parent.left 또는 parent.right을
                    # successor가 가지고 있던 자식을 가리키도록 함. 없었으면 다르게
                    if parent.left == successor:
                            parent.left = successor.right
                        

                    else:
                            parent.right = successor.right

                        



                                       
                return True
            else:

                return False

- 이진탐색트리 구조의 유지!
: 삭제되는 노드가
1. 말단 (leaf) 노드인 경우
=> 그냥 그 노드를 없애면 됨
=> 부모 노드의 링크를 조정 (좌? 우?)
=> 삭제되는 노드가 root인 경우?//self.root = None
2. 자식을 하나 가지고 있는 경우
=> 삭제되는 노드 자리에 그 자식을 대신 배치
=> 자식이 왼쪽? 오른쪽?
=> 부모 노드의 링크를 조정하나? (좌? 우?)
=> 삭제되는 노드가 root인 경우?//대신 들어오는 자식이 root node가 됨
3. 자식을 둘 가지고 있는 경우
=> 삭제되는 노드보다 바로 다음 (큰 /작은 - 어떤 방식이든 됨) 키를 가진 노드를 찾아 그 노드를 삭제되는 노드 자리에 대신 배치하고 이 노드를 대신 삭제
- 우선 자식을 세어보자

ex. class Node:
        def countChildren(self):
            count = 0
            if self.left:
                count += 1
            if self.right:
                count += 1
            return count

    



- 이진탐색트리가 별로 효율적이지 못한 경우
=> 한 쪽에 치우친 트리가 되면, 탐색도 linear search가 되기 때문에 효율적이지 못함 (not binary search)



- 보다 나은 성능을 보이는 이진탐색트리들
: 높이의 균형을 유지함으로써 O(log n)의 탐색 복잡도 보장
: 삽입, 삭제 연산이 보다 복잡해 질 수 밖에 없음


: cf. AVL tree
: cf. Red-black Tree




## 22. 힙 (Heaps)

- 힙 (HEAP) 이란?
: 이진트리의 한 종류 (이진 힙 - binary heap)
1. 루트 (root) 노드가 언제나 최댓값 또는 최소값을 가짐
~> 최대 힙 (max heap), 최소 힙 (min heap)
2. 완전이진트리여야 함

=> 재귀적으로도 정의 됨!
: (어느 노드를 루트로 하는 서브트리도 모두 최대 혹은 최소 힙)


- 이진탐색트리와의 비교


1. 원소들은 완전히 크기 순으로 정렬되어 있는가? //nope
2. 특정 키 값을 가지는 원소를 빠르게 검색할 수 있는가? //nope
3. 부가의 제약 조건은 어떤 것인가? //yes, has to be 완전이진트리

- 최대 힙 (Max Heap)의 추상적 자료구조
: \__init__() - 빈 최대 힙을 생성
: insert (item) - 새로운 원소를 삽입
: remove() - 최대 원소 (root node)를 반환 (그리고 동시에 삭제함)

=> traverse() 혹은 lookup()은 제공하지 않음


- 배열을 이용한 이진트리의 표현
: 노드 번호 m을 기준으로, 루트를 1로 두고,
~> 왼쪽 자식의 번호: 2*m
~> 오른쪽 자식의 번호: 2*m + 1
~> 부모 노드의 번호: m // 2

: 완전이진트리 이므로
~> 노드의 추가/삭제는 마지막 노드에서만


- **완전이진트리 이기에 배열로 표현이 용이**

- 코드 구현
ex. class MaxHeap:
        def \__init__(self):
            self.data = [None]

        def insert(self, item):
            index = len(self.data)

            self.data.append(item)

            while index//2 > 0 and self.data[index//2] < item:
                self.data[index//2], self.data[index] = self.data[index], self.data[index//2]

                index = index//2
                


- 최대 힙에 원소삽입
1. 트리의 마지막 자리에 새로운 원소를 임시로 저장
   (완전 이진 트리의 성질을 만족시키기 위해서)

2. 부모 노드와 키 값을 비교해 위로 위로 이동


~> 복잡도?
: 원소의 개수가 n인 최대 힙에 새로운 원소 삽입
: 부모 노드와의 대소 비교 최대 회수는 => O(log n)
: 최악 복잡도 O(log n)의 삽입 연산


## 23. 힙 (HEAPS) (2)


- 최대 힙에서 원소 삭제
=> 최대 원소만 삭제할 수 있음

1. 루트 노드의 제거 - 이것이 원소들 중 최댓값
2. 트리 마지막 자리 노드를 임시로 루트 노드의 자리에 배치 (완전이진트리 구조를 유지하기 위해서)
3. 자식 노드들과의 값 비교와 아래로 아래로 이동
~> 자식은 둘 있을 수도 있는데 어디로 이동함?: 더 큰 값 쪽!




~> 복잡도?
: 원소의 개수가 n인 최대 힙에서 최대 원소 삭제
: 자식 노드들과의 대소 비교 최대 회수: 2 x logn
: (힙의 최대 높이는 암만 높아야 log n)
: 최악 복잡도 O(log n)의 삭제 연산

- 삭제 연산의 구현 - remove() 메서드
ex. class MaxHeap:
        def remove(self):
            if len(self.data) > 1:
                self.data[1], self.data[-1] = self.data[-1], self.data[1]
                data = self.data.pop(-1)
                self.maxHeapify(1)
            else:
                data = None
            return data

        def maxHeapify(self, i): 
            left = 2*i
            right = 2*i + 1
            smallest = i
            # 자신 (i), 왼쪽 자식 (left), 오른쪽 자식 (right) 중 최대를 찾음
            # 이것의 index를 smallest에 담음
            # 왼쪽 자식이 존재하는 지, 그리고 왼쪽 자식의 키 값이 smallest 값보다 더 큰 지
            if left < len(self.data) and self.data[left] > self.data[smallest]:
                # 조건이 만족하는 경우, smallest는 왼쪽 자식의 index를 가집니다
                smallest = left
            # 오른쪽 자식이 존재하는 지, 그리고 오른쪽 자식의 키 값이 smallest 값보다 더 큰 지
            if right < len (self.data) and self.data[right] > self.data[smallest]:
                # 조건이 만족하는 경우 smallest는 오른쪽 자식의 index를 가집니다
                smallest = right
            if smallest != i:
                # 현재 노드 i와 최댓값 노드 smallest 값들 바꾸기
                self.data[i], self.data[smallest] = self.data[smallest], self.data[i]
                # 재귀적으로 maxHeapify 호출
                self.maxHeapify(smallest)



- 최대/최소 힙의 응용
1. 우선 순위 큐 (priority queue)
: Enqueue할 때 "느슨한 정렬"을 이루고 있도록 함 ~> O(log n)
: Dequeue할 때 최댓값을 순서대로 추출 ~> O(log n)
: 제 16강에서의 양방향 연결 리스트 이용 구현과 효율 비교
: (힙 응용이 시간적 장점이 있음)

2. 힙 정렬 (heap sort)
: 정렬되지 않은 원소들을 아무 순서로 최대힙에 삽입 ~> O(log n)
: 삽입이 끝나면, 힙이 비게 될 때까지 하나씩 삭제 ~> O(log n)
: 원소들이 삭제된 순서가 원소들의 정렬 순서
: 정렬 알고리즘의 복잡도 ~> O(n*log n) 
: (n개에 대해 삽입 / 삭제 연산 하기 때문)


- 힙 정렬 (heap sort)의 코드 구현
ex. def heapsort(unsorted):
        H = MaxHeap()
        for item in unsorted:
            H.insert(item)
        sorted = []
        d = H.remove()
        while d:
            sorted.append(d)
            d = H.remove()
        return sorted











                


        
    







            
            








        












            

        











