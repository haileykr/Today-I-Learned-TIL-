# 프로그래머스 정규표현식
### 숫자 대표문자
- `\d` where d stands for digit
```python
regex = r'\d'

search_target = '''Luke Skywarker 02-123-4567 luke@daum.net
다스베이더 070-9999-9999 darth_vader@gmail.com
princess leia 010 2454 3457 leia@gmail.com'''

import re
result = re.findall(regex, search_target)
print("\n".join(result))
```

### 글자 대표문자
- `\w` for words
- a, b, c, 가, 나, 다, 1 등 문자와 숫자 포함
- 특수문자 미포함, \_ 포함

### 하나 이상
- `+ `
- 하나 혹은 그 이상 연결 된!
- Ex. `\d+ `

### 0개 이상
- `* `
- 자연수 찾는 방법?
  - 처음에 1~9 중 하나의 숫자가 나온 후
  - 그 뒤에는 숫자가 0개 이상 나오면
  - `[1-9]\d* `

### 있거나 없거나?(1)
- ?
- 있거나 없거나 를 표현
- Ex. `-? ` ~> "-"가 있거나 없거나 를 의미!
- 전화번호
  - -를 포함할 수도, 포함하지 않을 수도 있다
  - `\d+-?\d+-?\d+`

### 있거나 없거나?(2)
- "-또는 공백이 있거나 없거나" 의 조건
- `[- ]? `

### n번?
- {n}
- n번 반복을 의미
- Ex. `\d{3} `숫자 3번 반복을 의미함

### n~m번
- {n, m}
- n번~ m번

### 몇 개 중에 고르기
- [aeiou]
- a,e , i, o, u 중에 고름

### 범위에서 고르기
- [a-z]
- 소문자 중에 고름겨
- 연속된 소문자 고름
  - [a-z]+

### 한글 찾기!
- [가-힣]+

### 기타대표문자
- \s 공백 문자 (스페이스, 탭, 뉴라인)
- \S 공백 문자 제외 문자
- \D 숫자 제외 문자
- \W 글자 제외 문자

### 자바스크립트에서 Regex Use!`
- String.prototype.match()
- Example
```javascript
/*아래 코드의 /와 /g 가운데에 정규표현식을 넣으세요.
 *g는 global의 약자로, 정규표현식과 일치하는 모든 내용 찾아오라고 하는 옵션입니다.
 */
const regex = /\d/g;
console.log(searchTar.match(regex));
```

- 보충 설명
- `[^abc] ` ~> abc 아닌 문자 찾기
- `\b ` ~> Find a match at the beginning/end of word ex. \bH or H\b
- `\n ` ~> newline
- `\t ` ~> tab
- `\0 ` ~> null character