## 1. 강의 오리엔테이션

- 보조 Repl.it IDE
: https://replt.it/languages/python3/

- 문제 풀이
~> 3개 파트!
1. 준비 운동 (옵션): 선수지식/알고리즘 학습, 비슷한 문제 확인
2. 문제 분석: 지문 읽기/컴퓨터적인 생각, 요구사항 분석 (복잡도)
3. 문제 해결: 설계 및 코딩, 정답처리 받기

## 2. 문자열 압축
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


## 3. 괄호 검사

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