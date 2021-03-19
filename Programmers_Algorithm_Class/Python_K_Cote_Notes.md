## 0. 강의 오리엔테이션

- 보조 Repl.it IDE
: https://replt.it/languages/python3/

- 문제 풀이
~> 3개 파트!
1. 준비 운동 (옵션): 선수지식/알고리즘 학습, 비슷한 문제 확인
2. 문제 분석: 지문 읽기/컴퓨터적인 생각, 요구사항 분석 (복잡도)
3. 문제 해결: 설계 및 코딩, 정답처리 받기

## 1. 문자열 압축
- 리스트, 인덱싱, 슬라이싱, 반복문/인덱스 이용한 순회 이용
- range(start, stop, step)

- 예시 문제 - 모의고사 (난이도: 하)
~> 각 학생의 답안 리스트를 반복하여 길이를 10000 이상으로... => 메모리 낭비!

~> 나머지 연산자 확인! => better

- 문자열 압축 (문자열 처리, 구현, 완전 탐색)
~> 난이도: 하 (Easy)
~> 쉬운 문제 / but 지문 정확히 읽어야 함
~> 구현 실수 하기 쉬운 문제
~> 30분안에 풀이!

- **항상 종이와 펜을 두고 문제 요구 사항을 검토하는 것이 좋다!! **

- 문제 단순화
: Step 1. 문자열을 1개 단위로 자름
: Step 2. 문자열을 2개 단위로 자름
: Step 3. 문자열을 3개 단위로 자름
: ...


- 요구사항 분석
~> 문자열 길이는 1 이상 1000 이하
~> 따라서 시간 복잡도 O(N^2) 으로 해결해야 함

**일반적으로 파이썬에서는, 1초에 약 2000만에서 1억 가량의 데이터 처리**

- 문제 해결 아이디어
~> 현재 상태를 이전 상태와 비교하며 동일한 문자열이 몇 번 나왔는지 체크

- 소스코드
ex. def solution(s):
        # original string 길이로 초기화
        answer = len(s)
        # 1개 단위(step)부터 압축 단위를 늘려가며 확인
        for step in range(1, len(s)):
            compressed = ""
            prev = s[0:step] # 앞에서부터 step만큼의 문자열 추출
            count = 1

            #단위 (step)만큼 증가시키며 이전과 비교!

            for j in range(step, len(s), step):
                # 이전 상태와 동일하면 count 증가
                if prev == s[j:j+step]:
                    count += 1
                
                # 아니면 더 이상 압축x
                else:
                    compressed +=str(count) + prev if count >= 2 else prev
                    prev = s[j:j+step]
                    count = 1
            
            # 남아있는 문자열에 대해 처리
            compressed += str(count) + prev if count >= 2 else prev

            # 만들어지는 압축 문자열 중 min이 정답

            answer =min(answer, len(compressed))

        return answer


## 2. 괄호 검사

- 재귀함수
ex. def recursive():
        print("재귀함수 호출")
        recursive()
    recursive()

    ~> 파이썬은 재귀 호출의 깊이 제한 두고 있음
    ~> 재귀함수 너무 깊게 호출하면, 런타임 에러 발생
    ~> 재귀함수 이용시 반드시 종료조건 명시


ex. def recursive(i):
        # 백 번째 출력을 했을 때 종료되도록 명시
        if i == 100:
            return
        print("재귀함수 호출")
        recursive(i+1)

    recursive(0)

ex. 팩토리얼
: 점화식- f(1) = 1, f(n) = f(n) x f(n-1)

- 재귀함수 관련 주의!
~> 코딩테스트에서 재귀함수 구현을 요구하거나 재귀함수 풀이가 효과적일 떄가 많음
~> 깊이 우선 탐색 (DFS)를 구현하는 방법으로써 많이 사용
~> 파이썬의 경우 채점 환경마다 깊이 제한이 다를 수 있음
~> 재귀 함수를 반복문으로 구현해보거나, 반복문을 재귀 함수로 구현해보는 연습 하기!

- 괄호 변환 (난이도 - 하)
~> 재귀 함수 구현
~> 40분 안에 문제 해결

~> 입력: 균형잡힌 괄호 문자열 => 만들어야 하는 프로그램 => 출력: 올바른괄호문자열


- 재귀함수는 N이 1000 이하일 때 안정적으로 됨

- 구현 문제는 최대한 실수를 줄이기 위해, 기능별로 메서드를 구현하는 것이 좋음

ex. 균형잡힌 괄호 문자열
    def balanced_index(p):
        count = 0 # 왼쪽 괄호의 개수
        for i in range(len(p)):
            if p[i] == '(':
                count += 1
            else:
                count -= 1
            if count == 0:
                return i #균형잡힌 괄호 문자열의 인덱스 반환


ex. 올바른괄호문자열
    
    
    def check_proper(p): 
        count = 0 # 왼쪽 괄호의 개수
        for i in p:
            if i == '(':
                count += 1
            else:
                if count == 0 : #쌍이 맞지 않는 경우
                    return False
                count -=1
            return True


ex. 정답 코드
    def solution(p):
        answer = ''
        if p == '':
            return answer
        index = balanced_index(p)
        u = p[:index + 1]
        v = p[index+1:]

        # 올바른 괄호 문자열이면, v에 대해 수행한결과 붙임
        if check_proper(u):
            answer = u + solution(v)
        else:
            answer = '('
            answer += solution(u)
            answer += ')'
            u = list(u[1:-1]) # 첫 번쨰와 마지막 제거

            for i in range(len(u)):
                if u[i] == '(':
                    u[i] = ')'
                else:
                    u[i] = '('
            answer += "".join(u)

        return answer





## 3. 자물쇠 열쇠
- https://programmers.co.kr/learn/courses/30/lessons/60059
- 2차원 리스트

- 파이썬에서 N X M 리스트를 초기화 하는 방법
~> List Comprehensions
~> ex. n, m = 2, 5
        data = [[0] * m for _ in range(n)]

- 2차원 리스트 다루기 예시 : 크기가 같은 두 2차원 리스트 합치기
ex. def matrix_add(a,b):
        n = len(a) # 행 길이계산
        m = len(a[0]) # 열 길이계산

        result = [[0]*m for _ in range(n)] #결과 리스트
        for i in range(n):
            for j in range(m):
                result[i][j] = a[i][j] + b[i][j]
        
        return result


- 2차원 리스트 다루기예시: 2차원 리스트 90도 회전하기
ex. #2차원 리스트 90도 회전하기
    def rotate_a_matrix_by_90_degrees(a):
        n = len(a)
        m = len(a[0])

        result = [[0] * n for _ in range(m)] #결과 리스트
        for i in range(n):
            for j in range(m):
             result[j][n-i-1] = a[i][j]

            
        return result

- 요구사항 분석
~> N과 M의 크기가 20 이하이므로, 열쇠를 많이 이동 혹은 회전 가능
~> 완전 탐색 사용!

- 문제 해결 아이디어
~> 열쇠 크기가 자물쇠보다 작음
~> 먼저 자물쇠를 크기가 3배인 새로운 리스트를 만들어 중앙 부분으로 옮김
~> 이후 열쇠 배열을 좌측 상단부터 순서대로 이동시키며 겹치는 부분 확인

~> 홈 부분을 채울 수 있는지 확인 방법은,
~> 자물쇠 리스트에 열쇠 리스트 값을 더한 뒤,
~> 중간 자물쇠 파트 모든 부분의 value가 정확히 1인지 체크.

- 소스코드
ex. 위의 회전 메소드
ex. def check(new_lock):
    #자물쇠 중간 부분이 모두 1인지 체크!
        lock_length = len(new_lock) // 3

        for i in range(lock_length, lock_length * 2):
            for j in range(lock_length, lock_length * 2):
                if new_lock[i][j] != 1:
                    return False
            
        return True

ex. def solution(key, lock):
        n = len(key)
        m = len(lock)

        # 자물쇠 크기를 기존의 3배로 변환
        new_lock = [[0] * (n-3) for _ in range(n*3)]

        # 새로운 자물쇠 중간 부분에 기존자물쇠 값 넣기!

        for i in range(n):
            for j in range(n):
                new_lock[n+i][n+j] = lock[i][j]

        # 4가지 방향에 대해 확인
        for rotation in range(4):
            key = rotate_a_matrix_by_90_degrees(key)
            for x in range(n*2):
                for y in range(n*2):
                    #자물쇠에 열쇠 맞춰보기
                    for i in range(m):
                        for j in range(m):

                            new_lock[x+i][y+j] += key[i][j]
                    # 맞는 지 검사
                    if check(new_lock):
                        return True
                    # 안 맞으면 열쇠 다시 빼내기
                    for i in range(m):
                        for j in range(m):
                            new_lock[x+i][y+j] -= key[i][j]

        return False


        
        
## 4. 이진 탐색 - 가사검색!

- 이진탐색
~> 탐색 범위를 절반씩 좁혀가며 데이터를 탐색
~> 데이터 개수가 N일 때 복잡돈 O(log N)
~> 탐색 범위가 큰 문제 및 쿼리 (Query)를 다루는 문제에서 사용

- 이진탐색 구현 예시
ex. # 이진 탐색 소스 코드
    def binary_search(data, start, end, target):
        while start <= end:
            mid = (start + end) // 2
            # 찾은 경우 중간점 인덱스 반환
            if data[mid] == target:
                return mid
            # 중간점보다 큰 경우 오른쪽 확인
            elif data[mid] < target:
                start = mid + 1
            # 중간점보다 작은 경우 왼쪽 확인
            else:
                 end = mid - 1
        return None

    
- 파이썬 이진 탐색 라이브러리
~> bisect_left(a, x): 정렬된 순서 유지하면서 배열 a에 x를 삽입할 가장 왼쪽 위치 변환
~> bisect_right(a,x): 정렬된 순서 유지하면서 배열 a에 x를 삽입할 가장 오른쪽 위치 반환

- 파이썬 이진탐색 라이브러리 적용 예시 

1. 특정 범위의 데이터 개수 구하기

ex. from bisect import bisect_left, bisect_right

    #값이 [left_value, right_value]인 데이터의 개수를 반환하는 함수
    def count_by_range(a, left_value, right_value):
        right_index = bisect_right(a, right_value)
        left_index = bisect_left(a, left_value)

        return right_index - left_index


2. 정확히 값이 x인 데이터의 인덱스 반환

```python
def index_of_x(a, x):
    i = bisect_left(a, x)

    if i != len(a) and a[i] == x:
        return i
    return None
```

2. x보다 작은 데이터 중에 가장 큰 값의 인덱스 반환
```python
def index_of_less_than_x(a,x):
    i = bisect_left(a, x):
    # x보다 작은 데이터가 존재하는 경우
    if i:
        return i - 1 # 그 중에서 가장 큰 값의 인덱스 반환
    # x가 모든 데이터의 값 이하인 경우 None
    return None
```

3. x보다 작거나 같은 데이터 중에 가장 큰 값의 인덱스 반환
```python
def index_of_less_or_equal_to_x(a, x):
    i = bisect_left(a, x)
    # x보다 작거나 같은 데이터 존재하는 경우
    if i:
        return i - 1 # 그 중에서 가장 큰 값의 인덱스 반환
    # x가 모든 데이터의 값보다 작은 경우 None
    return None
```

4. x보다 큰 데이터 중에 가장 작은 값의 인덱스 반환

```python
def index_of_greater_than_x(a,x):
    i = bisect_right(a,x)
    # x보다 큰 데이터 존재하는 경우
    if i != len(a):
        return i # 그 중에서 가장 작은 값의 인덱스 반환
    # x가 모든 데이터 값 이상인 경우 None
    return None
```

5. x보다 크거나 같은 데이터 중에 가장 작은 값의 인덱스 반환
```python
def index_of_greater_equal_than_x(a,x):
    i = bisect_left(a,x)
    # x보다 크거나 같은 데이터가 존재하는 경우
    if i!= len(a):
        return i # 그 중에서 가장 작은 값의 인덱스 반환



    # x가 모든 데이터의 값보다 큰 경우 None
    return None
```


- 예시 문제 살펴보기 - 예산
~> 이진탐색, parametric search

~> 소스 코드!
```python
def solution(budgets, M):
    answer =0
    # 상한액은 0원부터 max(budgets) 사이의 값
    start = 0
    end = max(budgets)
    # 이진 탐색 (binary search) 수행
    while start <= end:
        mid = (end + start) // 2
        # 모든 지압에 배정될 총 금액 계산
        money = 0
        for budget in budgets:
            money += min(mid, budget)
        # 배정이 가능한 경우
        if money <= M:
            answer = mid #현재의 상환액을 저장
            start = mid + 1 #더 큰 상한액 가능한 지 확인함
        # 배정이 불가능한 경우
        else:
            end = mid - 1 #상한액 낮추기
    
    return answer
```

- 가사 검색
~> 이진 탐색, 트라이 자료구조
~> 난이도 : 상

- 요구 사항 분석
~> 전체 단어의 개수 N은 100,000 이하, 각 단어 길이는 10,000 이하
~> 전체 검색 키워드 개수 M은 100,000 이하, 각 검색 키워드 길이는 10,000 이하
~> 모든 검색 키워드에 대해 단순히 검사한다면 O(NM)으로 시간 초과 판정


- 풀이 순서
1. 먼저, words를 단어 길이 별로 다른 배열에 담아줌
2. 각 배열을 오름차순 정렬
3. count_by_range(a, left_value, right_value)로 갯수를 찾아주면 됨
ex. fro??일 떄, froaa 부터 frozz사이의 단어 개수 세기
4. 만약 와일드카드가 단어의 앞에 있다면, 단어들을 뒤집어서 세어주면 됨!

~> 복잡도는 O(N log M)


```python
from bisect import bisect_left, bisect_right

# 값이 [left_value, right_value]인 데이터의 개수를 반환하는 함수
def count_by_range(a, left_value, right_value):
    right_index = bisect_right(a, right_value)
    left_index = bisect_left(a, left_value)
    return right_index-left_index

#모든 단어들을 길이마다 나누어 저장하기 위한 리스트
data = [[] for _ in range(10001)]
# 모든 단어들을 길이마다 나누어 뒤집어 저장하기 위한 리스트
reversed_data = [[] for _ in range (10001)]


def solution(words, queries):
    answer = []
    for word in words: # 모든 단어를 접미사 와일드카드 배열, 접두사 와일드카드 배열에 각각 삽입
        data[len(word)].append(word)
        reversed_data[len(word)].append(word[::-1])

    for i in range(10001): # 각 배열 정렬
        data[i].sort()
        reversed_data[i].sort()


    for q in queries: # 쿼리를 하나씩 확인하며 처리
        if q[0]!= '?': # 접미사에 와일드 카드가 붙은 경우





            res = count_by_range(data[len(q)], q.replace('?','a'), q.replace('?','z'))
        else: # 접두사에 와일드카드가 붙은 경우
            res = count_by_range(reversed_data[len(q)],  q[::-1].replace('?','a'), q[::-1].replace('?','z'))
        # 검색된 단어의 개수를 저장
        answer.append(res)

    return answer
```

## 5. 기둥과 보
- Simulation
~> 문제에서 제시한 구체적인 처리과정을 차례로 수행하여 결과를 도출하는 유형의 문제
~> 문제에서 요구하는 대로 정확히 구현하기 까다로운 경우가 많음
~> 국내 상당수 대기업 공채에서 유사한 Simulation문제가 많이 출제되므로 연습이 필요


- 예시 문제
~> 상하좌우
~> 여행가가 정해진 계획표대로, U - D - L - R대로 움직임


```python
n = int(input()) # N 입력 받기
x, y = 1, 1
plans = input().split() # 계획서 입력 받기

# L, R, U, D에 따른 이동방향
dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]
move_types = ['L','R','U','D']

# 이동계획
for plan in plans:
    # 이동 후 좌표 구하기
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    # 공간을 벗어하는 경우 무시
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    # 이동 수행
    x, y = nx, ny

print(x,y)
```

- back to 기둥&보문제




~> Simulation문제이기 때문에 기본적으로 시간 복잡도 면모에서는 널널할 것

- 요구사항 분석
~> 전체 명령의 개수는 총 1,000개 이하
~> 전체 명령의 개수를 M이라고 할 때, 시간 복잡도 O(M^2) 가량의 알고리즘을 요구
: 하지만 경우에 따라서는 O(M^3) 알고리즘으로도 정답 판정 받을 수 있음


- 문제 해결 아이디어
~> 구조물이 규칙에 해당하는 지 확인하는 method를 따로 작성
~> 매 번 설치 및 삭제 연산을 수행할 때마다 일일이 규칙을 확인
~> 전체 명령의 개수를 M이라고 할 때, 시간 복잡도 O(M^3)으로 구성 가능

~> 구조물이 규칙에 부합하는 지 확인하는 메서드 예시
```python
# 현재 설치된 구조물이 '가능한' 구조물인지 확인함
def possible(answer):
    for x, y, stuff in answer:
        if stuff == 0: #설치된 것이 '기둥'인 경우
            # '바닥 위' 혹은 '보의 한 쪽 끝 부분 위'
            # 혹은 '다른 기둥 위'라면 오케이
            if y == 0 or [x-1, y, 1] in answer or [x, y, 1]in answer or [x, y-1, 0] in answer:
                continue
            return False # 아니라면 거짓(False)반환
        elif stuff == 1: #설치된 것이 '보'인 경우
            # '한쪽 끝 부분이 기둥 위' 혹은 '양쪽 끝 부분이 다른 보와 동시에 연결'이면 정상
            if [x, y-1, 0] in answer or [x+1, y-1, 0] in answer  or  ([x-1, y, 1] in answer and [x+1, y, 1] in answer):
                continue
            return False #아니라면 거짓(False) 반환
    return True


    
def solution(n, build_frame):
    answer = []
    for frame in build_frame: #작업 (frame)의 개수는 최대1000개
        x, y, stuff, operate = frame
        if operate == 0: # 삭제하는 경우
            answer.remove([x, y, stuff]) #일단 삭제를 해 본 후
            if not possible(answer): #가능한 구조물인 지 확인
                answer.append([x, y, stuff]) #가능한 구조물이 아니라면 다시 설치
        if operate == 1: #설치하는 경우
            answer.append([x, y, stuff]) #일단 설치를 해 본 후
            if not possible(answer): #가능한 구조물인 지 확인
                answer.remove([x, y, stuff]) #안되면 다시 삭제
        return sorted(answer) #정렬된 결과를 반환
```

- 더 빠른 방법 - O(M^3)이 아닌 O(M^2)인 경우 //set에서는 원소 삽입 및 삭제가 O(1)인 요점에 착안
```python
# the same possible()method with elements being tuples instead!



# using set and tuple 
def solution(n, build_frame):
    answer = set()
    for frame in build_frame:
        x, y, stuff, operate = frame
        if operate == 0:
            answer.remove((x, y, stuff))
            if not possible(answer):
                answer.add((x, y, stuff))
        else:
            answer.add((x, y, stuff))
            if not possible(answer):
                answer.remove((x,y,stuff))
    return sorted(answer)
```

## 6. 외벽 점검
- 완전 탐색: 순열과 조합
~> 코딩 테스트에서는 모든 순서나 조합을 고려해봐야 하는 완전 탐색 문제가 자주 출제됨
~> 순열: 서로 다른 n개에서 서로 다른 r개를 선택하여 일렬로 나열하는 것
ex. {'A', 'B', 'C'}에서 세 개를 선택하여 나열하는 것
~> 조합: 서로 다른 n개에서 순서에 상관 없이 서로 다른 r개를 선택하는 것
ex. {'A', 'B', 'C'}에서 순서를 고려 않고 두 개를 뽑는 경우

~> 순열의 수 : nPr = n * (n-1) * (n-2) * ... * (n - r + 1)
~> 조합의 수: nCr = [n * (n-1) * (n-2) * ... * (n - r + 1)]/r!

- 순열과 조합의 수는 커지기 쉽기 때문에 N이 10 이하로 제한되는 경우가 많음

- 순열 라이브러리


```python
from itertools import permutations, combinations
data = ['A', 'B', 'C']

result = list(permutations(data, 3))
result2 = list(combinations(data, 2))
print(result)
print(result2)
```

- 중복 순열 - product (n^r), 중복 조합 - combinations_with_replacement

- 모든 범위가 작기 때문 완전탐색을 사용할 수 있음

- 문제해결 아이디어 ~> 원형 형태는 처리 어렵
~> 이를 2배로 늘려 선형으로 바꿈
ex. n = 12, weak = [1, 5, 6, 10], dist = [1, 2, 3, 4]
~> 변형결과: weak = [1, 5, 6, 10, 13, 17, 18, 22]


- 소스코드
```python
from itertools import permutations

def solution(n, weak, dist):
    # 길이를 2배로 늘려서 '원형'을 일자 형태로 변형하기
    length = len(weak)
    for i in range(length):
        weak.append(weak[i] + n)
    
    # 투입할 친구 수의 최솟값을 찾아야 하므로 len(dist) + 1로 초기화
    answer = len(dist) + 1

    # 0부터 length - 1까지의 위치를 각각 시작점으로 설정
    for start in range(length):
        # 친구를 나열하는 모든 경우 각각에 대하여 확인
        for friends in list(permutations(dist, len(dist))):
            count = 1 # 투입할 친구의 수
            # 해당 친구가 점검할 수 있는 마지막 위치
            position = weak[start] + friends[count - 1]
            # 시작점부터 모든 취약한 지점을 확인
            for index in range(start, start + length):
                # 점검할 수 있는 위치를 벗어나는 경우
                if position < weak[index]:
                    # 새로운 친구 투입
                    count += 1
                    if count > len(dist): # 더 투입 불가하면
                        break
                    position = weak[index] + friends[count - 1]
            answer = min(answer, count)
        
    if answer > len(dist):
        return -1
    return answer


## 8. 블록 이동하기
- 너비우선탐색
~> 그래프에서 가까운 노드부터 탐색하는 알고리즘
~> 큐(Queue) 자료구조 이용
~> 너비 우선 탐색 알고리즘
1. 탐색 시작 노드를 큐에 삽입하고 방문 처리를 함
2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중 방문하지 않은 노드들을 큐에 삽입하고 방문 처리를 함
3. 2번의 과정을 더 이상 반복할 수 없을 때까지 반복

~> 너비 우선 탐색 활용
=> 너비 우선 탐색은 가까운 노드부터 탐색, 모든 간선의 비용이 1인 그래프에서 BFS를 사용하면 최단거리를 계산할 수 있음. 이는 기업 코딩 테스트에 많이 쓰임


- 너비 우선 탐색 예제 소스코드
```python
# 각 노드가 연결된 정보를 리스트 자료형으로 표현
graph = [ [], [2,3,8], [1,7], [1,4,5], [3,5], [3,4], [7],[2,6,8],[1,7]]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현
visited = [False] * 9

# 정의된 BFS 함수 호출
bfs(graph, 1, visited)
```

```python
from collections import deque

#BFS 함수 정의
def bfs(adj, start, visited):
    # 큐 (Queue) 구현을 위해 deque 라이브러리 사용
    queue = deque([start])
    # 현재 노드 방문 처리
    visited[start] = True
    # 큐가 빌 때까지 반복
    while queue:
        # 큐에서 하나의 노드 뽑아 출력
        v = queue.popleft()
        print(v, end = ' ')
        # 연결된 방문하지 않은 노드들을 큐에 삽입
        for i in graph[v]:

            if not visited[i]:
                queue.append(i)
                visited[i] = True

```


- 예시 문제
~>   변환


```python
from collections import deque

# 단어 변환 가능한 경우(한 개 이하의 알파벳만 다른 경우)

def possible(begin, target):
    length = len(begin)
    count = 0 #다른 알파벳의 갯수
    for i in range(length):
        # 두 알파벳이 서로 다를 때마다 카운트
        if begin[i] != target[i]:
            count += 1
        if count == 2:
            return False # 알파벳이 두 개 이상 다르면 거짓
    return True

def solution(begin, target, words):
    visited = {begin: 0} # 특정 단어로의 최소 변환 횟수 기록
    # BFS
    q = deque([begin])
    while q:
        now = q.popleft()
        for word in words: #모든 단어 check
            # 아직 방문 안 했으며 변환 가능하면 방문 처리
            if word not in visited and possible(now, word):
                visited[word] = visited[now] + 1
                q.append(word)

    # 목표 단어로 변환 가능하면 최소 변환 횟수 출력
    if target in visited:
        return visited[target]
    return 0

```

- 요구사항 분석
~> n의 범위가 제한적이므로, BFS 수행해도 넉넉히 통과 가능
=> 너비 우선 탐색을 인접 리스트로 구현하는 경우 O(V+E)

- 문제 해결 아이디어 : 접근 방법
~> 로봇 현재 상태에서 다음 상태로 이동하는 비용은 모두 동일
=> 따라서 BFS 이용 최단 거리 찾을 수 있음
=> 로봇의 현재 상태에서 회전 및 이동하는 모든 경우를 고려하여 BFS 수행하면 됨

- 문제 해결 아이디어2 : 방문 상태 저장
~> 현재 자전거 상태를 집합 (Set)으로 관리할 수 있음
=> 파이썬에서 {(1,1),(1,2)}과 {(1,2),(1,1)}은 같습니다
=> 한 번 방문한 (큐에 들어간) 자전거의 상태는 두 번 방문 x !

- 이동 - 상, 하, 좌, 우

- 회전 - 현재 상태가 가로 ~> 아래로 회전 (벽 없을 때) - 왼/오, 위로 회전 - 왼/오, 현재 상태가 가로 ~> 오른쪽으로 회전 - 위/아래, 왼쪽으로 회전 - 위/아래

- 범위 판정: 범위 판정을 간단히 하기 위한 목적으로, 맵을 변형해 맵의 외곽에 벽을 둘 수 있음

- 소스 코드 : 이동 가능한 위치 반환하는 메서드
```python
def get_next_pos(pos, board):
    next_pos = [] # 반환 결과 (이동 가능한 위치들)
    pos = list(pos) # 현재 위치
    pos1_x, pos1_y, pos2_x, pos2_y = pos[0][0], pos[0][1], pos[1][0], pos[1][1]

    # (상, 하, 좌, 우)로 이동하는 경우에 대해서 처리
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    for i in range(4):
        pos1_next_x, pos1_next_y, pos2_next_x, pos2_next_y = pos1_x + dx[i], pos1_y + dy[i], pos2_x + dx[i], pos2_y + dy[i]
        # 이동하고자 하는 두 칸이 모두 비었음
        if board[pos1_next_x][pos1_next_y] == 0 and board[pos2_next_x][pos2_next_y] == 0:
            next_pos.append({(pos1_next_x, pos1_next_y), (pos2_next_x, pos2_next_y)})

    # 현재 로봇이 가로로 놓여 있는 경우
    if pos1_x == pos2_x:
        for i in [-1, 1]: #위쪽으로 회전하거나, 아래쪽으로 회전
            if board[pos1_x + i][pos1_y] == 0 and board[pos2_x + i][pos2_y]== 0: #위 / 아래 두 칸 모두 비었으면
                next_pos.append({pos1_x, pos1_y),(pos1_x + i, pos1_y)})
                next_pos.append({pos2_x, pos2_y), (pos2_x + 1, pos2_y)})

    # 현재 로봇이 세로로 놓여 있는 경우
    elif pos1_y == pos2_y:
        for i in [-1, 1]: #왼쪽으로 회전하거나, 오른쪽으로 회전
            if board[pos1_x][pos1_y + i] == 0 and board[pos2_x][pos2_y+ i] ==0:
                next_pos.append({(pos1_x, pos1_y), (pos1_x, pos1_y + i)})
                next_pos.append({(pos2_x, pos2_y), (pos2_x, pos2_y + i)})

    # 현재 위치에서 이동할 수 있는 위치를 반환
    return next_pos



from collections import deque
def solution(board):
    # 맵의 외곽에 벽을 두는 형태로 맵 변형
    n = len(board)
    new_board = [[1] * (n + 2) for _ in range(n+2)]
    for i in range(n):
        for j in range(n):
            
            new_board[i+1][j+1] = board[i][j]

    # 너비 우선 탐색 (BFS) 수행
    q = deque()
    visited = []
    pos = {(1,1), (1,2)} # 시작 위치 설정
    q.append((pos, 0)) #큐에 삽입한 뒤에
    visited.append(pos) #방문 처리

    # 큐가 빌 때까지 반복
    while q:

        pos, cost = q.popleft()
        # (n, n) 위치에 로봇이 도달했다면, 최단 거리이므로 반환
        if (n, n) in pos:
            return cost
        # 현재 위치에서 이동할 수 있는 지 확인
        for next_pos in get_next_pos(pos, new_board):
            # 아직 방문하지 않은 위치라면 큐에 삽입 후 방문 처리
            if next_pos not visited:
                q.append((next_pos, cost + 1))
                visited.append(next_pos)

    return 0
```

# 안경잡이 개발자 - 알고리즘 강의 - 나동빈

## 17. Union - Find (합집합 찾기)
- 유니온 파인드는 대표적인 그래프 알고리즘.
- "합집합 찾기"
- 서로소 집합 (Disjoint-Set) 알고리즘이라고도 부름
- 구체적으로 여러 노드가 존재할 때 두 개의 노드를 선택해서, 현재 이 노드가 같은 그래프에 속하는 지 판별

- 처음엔 모든 노드가 자기 자신을 '부모'로 가졌다고 생각

- 두 개의 노드가 연결되면, *더 작은 값을 부모값*으로 설정
ex. 1과 2가 연결되면, 2의 부모 노드 - 1이 됨!

- 여러 노드가 연결되었을 때 연결성을 확실히 알기 위해, *재귀함수*가 쓰임
ex. 2과 3이 연결되면, 3이 부모노드는 2였다가, 재귀함수를 통해 1임을 알게 되어 1로 바뀐다
=> 그렇다면 1, 2, 3노드 모두 부모 노드가 1이 되어 같은 그래프에 속함을 알 수 있음!

- *Find알고리즘*은 두 개의 노드의 부모 노드를 확인하여 현재 같은 집합에 속하는 지 확인하는 알고리즘

```c
#include <stdio.h>

// 부모 노드를 찾는 함수
int getParent(int parent[], int x){
    if (parent[x] == x) return x;
    return parent[x] = getParent(parent, parent[x]);
}

// 두 부모노드를 합치는 함수
int unionParent(int parent[], int a, int b){
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

// 같은 부모를 가지는 지 확인
int findParent (int parent[], int a, int b){
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a == b) return 1;
    return 0;
}

int main(void) {
    int parent[11];
    for (int i = 1;i <= 10; i ++){
        parent[i] = i;
    }
    unionParent(parent, 1, 2);
    unionParent(parent, 2, 3);
    unionParent(parent, 3, 4);
    unionParent(parent, 4, 5);
    unionParent(parent, 5, 6);
    unionParent(parent, 6, 7);
    unionParent(parent, 7, 8);

    printf("are 1 and 5 connected?: %d\n",findParent(parent,1,5))
}
```

## 18. 최소비용 신장트리 - Kruskal Algorithm - 유투브
- 최소 비용 신장트리에서, 솔루션의
=>간선 숫자 = 노드 숫자 - 1

- 핵심 개념 ~> "간선을 거리가 짧은 순으로 그래프에 포함시키면 어떨까?"

- 일단 모든 노드를 최대한 적은 비용으로 "연결만" 시키면 되기 때문에 모든 간선 정보를 *오름차순*으로 정렬한 후, **비용이 적은 것부터 차근 차근 그래프에 포함**시키면 됨

- 중요!
1. 정렬된 순서에 맞게 그래프에 포함
2. 포함시키기 전에는 **사이클 테이블을 확인**
3. 사이클을 형성하는 경우 간선을 포함하지 않음

- 사이클이 발생하는 지는 Union-Find방법 사용

- 값이 작은 간선부터 선택, 선택하면서는 사이클 테이블의 부모 - 자식 관계를 update 해준다!

```c++
#include <iostream>

#include <vector>

#include <algorithm>

using namespace std;

// 재귀함수
int getParent(int parent[], int x){
    if (parent[x] == x) return x;
    return parent[x] = getParent(parent, parent[x]);
}


// 두 부모노드를 합치는 법
int unionParent(int parent[], int a, int b){
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
}
// 같은 부모를 가지는 지 확인
int findParent(int parent[], int a, int b){
    a = getParent(parent, a);
    b = getParent(parent, b);
    if (a == b) return 1;
    return 0;
}

// 간선 클래스 선언
class Edge {
public:
    int node[2];
    int distance;
    Edge(int a, int b,int distance){
        this->node[0] = a;
        this->node[1] = b;
        this->distane = distance;
    }
    bool operator <(Edge &edge){
        return this->distance < edge.distance;
    }
};

int main(void) {
    int n = 7;
    int m = 11;

    vector <Edge> v;
    v.push_back(Edge(1, 7, 12));
    ...

    // 간선의 비용을 오름차순 정렬
    sort(v.begin(), v.end()) ;

    // 각 정점이 포함된 그래프가 어디인 지 저장
    int parent[n];
    for (int i = 0; i < n; i++){
        parent[i] = i;
    }
    int sum = 0;
    for (int i = 0;i < v.size(); i++){
        //사이클이 발생하지 않는경우, 그래프에 포함
        if (!findParent(parent, v[i].node[0] - 1, v[i].node[1] - 1)){
            sum += v[i].distance;
            unionParent(parent, v[i].node[0] - 1, v[i].node[1] - 1);
        }

    }
}
