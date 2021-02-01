## 1. Hash : 완주하지 못한 선수
- 자료구조 (와 알고리즘) 의 선택
: 만약 이름 대신 번호가 주어졌다면?
~> 선형 배열 (linear array)
~> 번호 말고 다른 것 (예: 문자열) 로 접근할 수 있는 좋은 자료구존 없나요?

- 해시 (Hash)

- 파이썬에서는 사전(dictionary)을 이용해 원소에 O(1)접근 가능

ex. def solution(participant, completion):
        d = {}
        for x in participant:
            d[x] = d.get(x,0) + 1
            //d[x]가 존재하면 그에 해당하는 값을, 아니면 0을 리턴
        for x in completion:
            d[x] -= 1
        dnf = [k for k, v in d.items() if v!= 0]
        //did not finish
        
        answer = dnf[0]
        return answer


=> O(n)

- 정렬을 이용한다면?
ex. def solution(participant, completion):
        participant.sort()
        completion.sort()
        for i in range(len(completion)):
            if participant [i] != completion[i]:
                return participant[i]
        return participant[len(participant)-1]

=> O(N logN)





<br>



## 2. 탐욕법 (Greedy) 대표 문제 풀이 - 체육복

- 문제의 해결 - 예제
~> ex. n = 5
   ex. reserve = [1, 3, 5]
   ex. 빌려줄 학생들 : 1, 3, 5
   ex. lost = [2,4]
   ex. 빌릴 학생들: 2, 4

- 탐욕법 (Greedy Algorithm)
~> 알고리즘의 각 단계에서 그 순간에 최적이라고 생각되는 것을 선택
~> 일반적으로는, 매우 어려워서 최적의 답을 찾지 못할 때에도 쓰임
~> (탐욕법으로 최적해를 찾을 수 있는 문제)현재의 선택이 마지막 해답의 최적성을 해치지 않을 때

- 탐욕법 적용 가능성 확인
~> 이런 경우는?
ex.  2   4   6
ex. 1  3  5
~> 빌려줄 학생들을 "정해진 순서 (큰 -> 작은 / 반대?)"로 살펴야 하고, 이 "정해진 순서"에 따라 우선하여 빌려줄 방향을 정해야 함

- 문제의 해결 - 방법 (1)

: (착안점) 학생의 수는 기껏해야 30!
: 학생 수 만큼 배열을 확보하고 여기에 각자가 가지고 있는 체육복의 수를 기록
=> 번호 순서대로 "스캔"하면서 빌려줄 관계를 정한다

ex. n = 10, lost = [1,5,8,3,7] reserve = [7,5,2,9,6]

~> 헛깨비로 맨 앞과 맨 뒤에 1을 넣어 줌

~> 1 0 2 0 1 1 2 1 0 2 1 1

~> 앞의 자리에 빌려주는 걸로 생각

- 알고리즘 복잡도
~> 여벌을 가져온 학생 처리: reserve길이에 비례

~> 체육복을 잃어버린 학생 처리: lost길이에 비례

~> 체육복 빌려주기 처리: 전체 학생 수 (n)에 비례

=> O(n)




- 문제의 해결 - 방법(2)
~> 만약 전체 학생 수가 매우 크다면?
=> 하지만 문제의 성질 상 O(n)보다 낮은 복잡도 알고리즘은 어려울 듯?
~> 그런데 여벌의 체육복을 가져온 학생은 매우 적다면?

=> 메모리&시간 낭비!


~> 여벌의 체육복을 가져온 학생들의 번호 (reserve)를 정렬하고,
~> 이것을 하나 하나 순서대로 살펴보면서 빌려줄 수 있는 다른 학생을 찾아 처리한다!
=> O(N logN) //정렬때문에!!
=> 빌려줄 수 있는 다른 학생 찾는 것 <- 해시를 적용해서 상수 시간에 처리!

- 알고리즘 복잡도
~> 여벌 체육복 가져온 학생들의 번호 (reserve)를 정렬
=> O(k log k)
~> 체육복 빌려줄 수 있는 학생을 찾아 처리
=> O(k)xO(1)

=> 전체 복잡도: O(k log k)


- 따라서, n이 작으면 방법 1이, n이 크고 k가 작으면 방법 2가 유용



- 방법 1 파이썬 구현!!
ex. def solution(n, lost, reserve):
        u = [1] * (n+2) //u[0], u[len]이 모두 intuitively accessible
        for i in reserve:
            u[i] += 1
        for i in lost: 
            u[i] -= 1
        for i in range(1, n + 1):
            if u[i-1] == 0 and u[i] == 2:
                u[i - 1: i + 1] = [1, 1]
            elif u[i] == 2 and u[i+1] == 0:
                u[i:i+2] =[1,1]
        return len([x for x  in  u[1:-1] if x > 0])
- 방법 2 파이썬 구현!!
ex. def solution(n, lost, reserve):
        set1 = set(lost) & set(reserve)
        // 교집합
        lost = set(lost) - set1 //빌려야하는 집합

        reserve = set(reserve) - s //빌려줄수있는 집합

        for x in sorted(reserve): 
            if x - 1 in lost:
                lost.remove(x - 1)
            elif x + 1 in lost:
                lost.remove(x + 1)


        
        answer = n - len(lost)
        return answer




## 3. 정렬 (Sort) 대표 문제 풀이 - 가장 큰 수
- 문제의 해결 방법
1. 빈 문자열로 수를 초기화
2. 가장 크게 만들 수 있는 수를 고른다
3. 그 수를 현재 수에 이어 붙임
4. 모든 수를 다 사용할 때 까지 반복

=> O(n^2) : no no!

- 조금 나은 문제의 해결 방법
1. 빈 문자열로 수를 초기화
2. 수의 목록을 (크게 만드는 것을 우선으로) 정렬
3. 목록에서 하나씩 꺼내어 현재 수에 이어 붙인다
4. 모든 수 사용할 때까지 반복

- "크게 만드는 수"의 기준
ex. 34 => 34343434....
ex. 343 => 343343343..

- 알고리즘 설계 => 구현
~> 대소 관계 비교를 위한 기준 마련
~> 이를 이용해 주어진 배열을 정렬한 후 문자열 표현을 완성

ex. def solution(numbers):
        numbers = [str(x) for x in numbers]
        numbers.sort(key = lambda x: (x * 4)[:4], reverse =True)
        if numbers[0] =='0':
            answer = '0'
        else:
            answer = ''.join(numbers)
        return answer



## 4. 탐욕법(Greedy) 대표 문제 풀이 - 큰 수 만들기!

- 큰 수 만들기 - 원칙

~> 앞 자리에 큰 수가 오는 것이 전체를 크게 만듦.
~> 따라서 큰 것을 우선해서 골라 담자

~> 앞 자리에서부터 하나씩 골라 담자
~> 그러나, 지금 담으려는 것보다 작은 것들은 도로 뺀다!
~> 단, 뺄 수 있는 수효에 도달할 때까지만

=> 큰 수가 앞자리에, 작은 수가 뒷자리에 놓이도록
=> (제약조건)뺄 수 있는 수의 개수


- 알고리즘 설계 => 구현

~> numbers로 부터 하나씩 꺼내어 모으되
~> 이 때, 이미 모아둔 것 중 지금 등장한 것보다 작은 것은 빼냄
~> 이것은 어디서 어떻게 살펴보아야 할까?
~> 이렇게 모은 숫자들 자릿수 맞춰서 반환
~> 아직 뺄 개수 (k)를 채우지 못한 경우에는 자릿수 맞춰 반환

- 알고리즘 복잡도
~> 가장 단순 (무식?)한 방법은? => 가능한 모든 조합 나열 후 가장 큰 숫자 고름
=> 너무 수가 크기에 다 고려하지 못함. Combinatory exclusion

~> 우리가 설계한 것은?O(n)
=> 각각의 숫자에 대해 기껏해야 한 번 빼고 한 번 넣는 것이므로, 2n

- 탐욕법 (Greedy Approach)
~> 앞 단계에서의 선택 (앞 자리에 큰 수!) 이 이후 단계에서의 동작에 의한 solution의 optimality에 영향을 주지 x


ex. def solution(number, k):
        collected = []
        for i, num in enumerate(number):
            while len(collected) > 0 and collected[-1] < num and k > 0:
                //문자열 자체를 비교 ~> 한 글자 비교 && 파이썬이라 괜찮다
                collected.pop()
                k -= 1
            if k == 0:
                collected += list(number[i:])

                break
            collected.append(num)

        collected = collected[:-k]  if k > 0 else collected
        
        answer = ''.join(collected)


## 5. 힙 (Heap) 대표 문제 풀이: 더 맵게

- 문제의 해결 - 예제
ex. 1 2 3 9 10 12, k = 7 //정렬필수

ex. 5  3 9 10 12  , k = 7
ex. 3 5 9 10 12,   k = 7
ex.  13 9 10 12,  k = 7
ex. 9 10 12 13 > 7=> OK

- 알고리즘 복잡도
~> 최악의 경우: 수가 하나 남을 때까지 섞어야 하는 경우 (n-1회)

~> 각 단계 ("섞는 일")에서 요구되는 계산:

=> 정렬된 리스트에 순서 맞추어 원소 삽입
=> O(n)

~> 전체 문제풀이의 복잡도

=> O(n^2) //n번의 단계를 거치는 데 각 단계 당 O(n) 정렬을 거침
=> 지나치게 높다!

=> 힙을 사용하자

- 보다 나은방법
~> 최소/최대 원소를 빠르게 꺼낼 수 있으면 좋겠는데!
~> 힙 (heap)
=> max heap
=> min heap

- 힙 (heaps)
~> 성질: 최대 / 최소 원소를 빠르게 찾기 편함
~> 연산
1. 힙 구성 (heapify)
- O (n logn)
- 빈 힙에다가 n개의 원소를 삽입하는 식으로
2. 삽입 (insert)
- O(log n)

3. 삭제 (remove)
- O(logn)


- 힙의 구현
~> 완전 이진 트리 (complete binary tree)
=> 배열을 이용해 구현 가능!

- 힙의 응용
~> 정렬, heapsort
~> 우선 순위 큐 (priority queue)


- Python에서 힙 적용
ex. import heapq

ex. heapq.heapify(L) //리스트 L로부터 min heap 구성
ex. m = heapq.heappop(L) //min heap L에서 최소값 삭제 (반환)
ex. heapq.heappush(L, x) //min heap L에 원소 x 삽입

- 파이썬으로 구현!
ex. import heapq

ex. def solution (scoville, K):
        answer = 0
        heapq.heapify(scoville)
        while True: //최악의 경우 모든 원소를 거침 O(n)
            //두 조건을 모두 while에 넣는 것보다
            //while True로 해놓고 조건 만족 시 break하는 것이
            //더 편리할 것이라 생각
            min1 = heapq.heappop(scoville) //O(log n)
            
            if min >= K:
                break
            elif len(scoville) == 0:
                answer = -1
                break
            min2 = heapq.heappop(scoville) //O(log n)
            new_scoville = min1 + min2 * 2


            heapq.heappush(scoville, new_scoville) //O(log n)
            answer += 1

        
        return answer





## 6. 동적계획법(Dynamic Programming) 대표 문제 풀이 - N으로 표현




- 동적 계획법이란?
~> 주어진 최적화 문제를 // 재귀적인 방식으로 보다 작은 부분으로 나누어 // 부분 문제를 풀어, 이 해를 조합하여 // 전체 문제의 해답에 이르는 방식

~> 알고리즘의 진행에 따라 // **탐색해야 할 범위를 동적으로 결정 **함으로써 //탐색 범위를 한정할 수 있음


- 동적계획법의 적용 예
~> 피보나치 수열

=> 재귀함수로 구현한다면? //알고리즘 복잡도 - 지수 함수

=> 동적 계획법 적용? // f(0) = 0, f(1) = 1, f(2) = f(1) + f(0) = 1, f(3) = f(2) + f(1) = 2, f(4) = f(3) + f(2) = 3
//부분 문제를 먼저 구하고 그를 이용 전체 문제 답을 구함

//복잡도 - 선형함수의 형태





- Knapsack Problem
~> 가장 높은 값을 갖도록 물건들을 골라 배낭에 담으시오

- 문제의 해결 - 동적계획법으로 설계
~> N을 한 번 사용해서 만들 수 있는 수(들) => 1
~> N을 두 번 사용해서 만들 수 있는 수(들) => 2
~> N을 세 번 사용해서 만들 수 있는 수(들) => 3
~> ...

- 문제의 해결 - 예제
(1) 5
(2) 55, (1) +-/* (1) => 10 0 1 25
(3) 555, (1) +-/* (2), (2) +-/* (1)
=> 555 60 15 5 30 6 -50 -5 -20 4 275 50 0 125 11 2 20 -4 55

(4) 5555, (3) +-/* (1), (1) +-/* (3), (2) +-/* (2)
(5) 55555, (3) +-/* (2), (2) +-/* (3), (1) +-/* (4), (4) +-/* (1)

- 문제의 해결 - 일반화
(n) "x"*n

(1) +-/* (n-1)
(2) +-/* (n-2)
...
(n-1) +-*/ (1)

- 괄호 고려? (yes), 괄호 없는 경우 고려? (yes)

- 문제의 복잡도
~> (발생할 수 없는) 최악의 경우 //incl 같은결과
~> 숫자의 사용 횟수 | 만들어지는 결과의 수효
        1                   1
        2                   5
        3                   41
        4                   429
        5                   5073
        6                   64469
        7                   859385
        8                   11853949

~> 실제로 만들어지는 결과의 개수
~> N    1   2   3   4   5    6    7     8
   1    1   4   10  23  55   130  320  780
   2    1   4   14  43  120  336  923  2596
   3    1   5   18  57  171  493  1469 4326
   ..

//세로는 어느 수를 사용했느냐

- 요약
~> 문제의 성질에 따라, 동적 계획법으로 풀어서 탐색해야하는 범위를 효과적으로 줄일 수 있음

- 파이썬 구현
ex. def solution (N, number):
        //(i+1)번 사용해서 만들 수 있는 수들을 넣을 것임
        s = [set() for x in range(8)]

        //i번 반복한 숫자들을 먼저 넣어 줌
        for i, x in enumerate(s, start=1):
            cc = int(str(N)*i)

            if cc == number:
                return i
            
            x.add(cc)

        //i번 사용할 수들 집합
        for i in range(1, len(s)):
            //1번이면 0번,
            //2번이면 0번, 1번,
            //3번이면 0번, 1번,2번,...
            //사용한 숫자들을 꺼내도록
            for j in range(i):
                //if j = 0
                //if j = 1
                for op1 in s[j]:
                    //i - j - 1 = 2 - 0 - 1 = 1 ~> 배열 인덱스므로, <=> 2번 사용한 수들
                    //i - j - 1 = 2 - 1 - 1 = 0 <=> 1번 사용한 수들
                    for op2 in s[i - j - 1]:
                        s[i].add(op1 + op2)
                        s[i].add(op1 - op2)
                        s[i].add(op1 * op2)
                        if op2 !=0:
                            s[i].add(op1 // op2)

            if number in s[i]:
                answer = i + 1
                break
            
        
        else:
            
            answer = -1

                    

        return answer




## 7. 깊이 /너비 우선 탐색 (DFS /BFS) 대표 문제 풀이 - 여행경로

- 배경지식
~> 그래프 (graphs)
~> 정점 (vertex, node)과 간선 (edge, link)
~> 유향 (directed) 그래프와 무향 (undirected) 그래프 
~> 스택 (Stack)
~> 큐 (Queue)

- 깊이 우선 탐색(DFS: Depth First Search)
~> 한 정점에서 인접한 모든 (아직 방문하지 않은) 정점을 방문하되, 각 인접 정점을 기준으로 깊이 우선 탐색을 끝낸 후 다음 정점으로 진행

~> 스택 이용해 어느 정점에서 DFS를 하고 있는 지 기억하고 되돌아 감

- 너비 우선 탐색(BFS: Breadth First Search)
~> 한 정점에서 인접한 모든 (아직 방문 안 한)정점을 방문하고,방문한 각 인접 정점을 기준으로 (방문한 순서에 따라) 또다시 너비 우선 탐색을 행함

~> 큐 이용해 어느 정점에서 BFS하고 있는 지 기억하고 진행함


- 문제의 해결 - 깊이 우선 탐색 (DFS)을 응용

~> 한 붓 그리기!
=> 이것이 가능함은 문제에서 보장되어 있음

~> 시작 정점은 언제나 "ICN"

~> 모든 정점 방문이 아니고, 모든 간선을 거쳐야

=> 언젠간 한 번 가야 하는데, 그 순서를 정하라


- 알고리즘의 설계
~> 처음 정점에서 갈 수 있는 정점을 alphabetical order로 정하고, 해당 간선을 없애고, 나머지 그림에서 똑같은 logic 반복


~>스택 이용해 재귀적인 '한 붓 그리기' 문제 해결 - DFS 응용

- 요약

=> 재귀적 성질 가진 한 붓 그리기 문제. 그래프 DFS 응용하여 해결
- 그래프 표현

~> 사전 이용, 각 공항에서 출발하는 항공권의 집합을 **리스트**로 표현(알파벳 순서여야 되기 때문)

ex. ICN -> [SFO, ATL]
ex. ATL -> [SFO, ICN]

~> 각 리스트에서 역순으로 정리(리스트 뒤에서부터 pop하는 것이 더 효율적이므로)

ex. def solution(tickets):
        routes = {}
        for t in tickets:
            routes[t[0]] = routes.get(t[0], []) + [t[1]]
        

        

        for r in routes:
            routes[r].sort(reverse=True)

        stack = ["ICN"]

        path = []

        while len(stack) > 0:
            top = stack[-1]
            //해당 공항에서 출발하는 표가 없거나 다 썼으면
            if top not in  routes  or  len(routes[top]) == 0:
                path.append(stack.pop() )

            else:
                stack.append(routes[top][-1])
                routes[top] = routes[top][:-1]
            





            