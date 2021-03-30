https://opentutorials.org/module/4058

## 인트로
- 리액트 입문 수업
1. 리액트를 사용하는 이유
2. 리액트의 컴포넌트를 만드는 법
3. 리액트와 불변(immutable) 관계

- 안 다루는 것
1. 데이터베이스
2. 서버와 연동
3. redux

- 페이스북에서 만든 UI library

## 시작
### 오리엔테이션
- coding -> run -> deploy

### 개발환경의 정리
- 공식문서 중요!!

### npm을 이용해서 create react app설치
- 공식적으론 npx 추천
ex. npm install create-react-app
ex. npx create-react-app

=> npm은 라이브러리 자체를 설치
=> npx는 필요할 때마다 다운로드 받고 지움 (메모리 낭비 x, 항상 최신버전)

### create react app을 이용해서 개발환경 구축
- react-app 폴더 생성
- 그 폴더로 가서
- create-react-app . (globally 이 라이브러리 설치했을 때에만)

### 샘플 웹앱 실행
- 디렉토리 구조
1. src
2. public
: index.html에, <div id="root"> 안에 컴포넌트들이 들어갈 것
: 그 컴포넌트들은 src안의 파일들을 통해 만들 수 있음
: 그 중에서 entry file은
: index.js

=> App.js는 함수 방식 / 클래스 방식으로 되어있을 수 있다
=> in this course, class type will be used
ex. function 방식
```javascript
import React from 'react';
import './App.css';
function App(){
    return (
        <div className = "App">
        </div>
    );
}
export default App;
```
ex. class 방식
```javascript
import React, {Component} from 'react';
import "./App.css"

class App extends Component{
    render(){
        return (
            
            <div className = "App">
            </div>
        );
    }
}


export default App;
```

### CSS 코딩하는 법




- index.css
- App.css 초기화

### 배포하는 법
- 아무것도 없는 상황에서도, Network tab보면 2.2MB나 다운받았다고 나온다 ㅠ
- create-react-app은 파일의 무게가 무겁기 떄문

=> 개발모드 에선 npm start
=> 프로덕션 모드에선 npm run  build (용량 줄여서 build라는 새로운 폴더 만들어 거기에 저장)

- 따라서 production에서는 build안의 파일들을 써야한다
- web server directory root도 build안의 파일들을 참조

- ex. npm install -g serve
- ex. npx serve -s build //build폴더를 source로

=> 450KB만 사용했음









## 컴포넌트 제작!
- in App.js

### props
```javascript
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>

        <Subject title="React" sub="For UI"></Subject>
        <TOC/>
        <Content></Content>
      </div>
    );
  }
}
```

### Component 분리하기
- Components Folder
- TOC.js

## STATE
### State 사용
```javascript
constructor(props){
  super(props);
  this.state = {
      subject: {title: 'WEB', sub: 'World Wide Web!'}
  }
  };
  ```
=> component가 만들어질 때 constructor함수가 제일 먼저 실행돼서 초기화를 담당한다

### Key
- TOC내부 데이터 추가
```javascript
    contents: [
            {id: 1, title: 'HTML', desc:'HTML is HyperText, ...'},
            {id: 2, title: 'CSS', desc: 'CSS is for design'},
            {id: 3, title: 'Javascript', desc: 'Javascript is for interactive'}
    ]

...
    <TOC data={this.state.contents}/>
```

- TOC.js에서는
```javascript
const data = this.props.data;
        const lists = [];
        let i = 0;
        while (i < data.length){
            lists.push(<li key={data[i].id}><a href = {"/content/"+data[i].id}>{data[i].title}</a></li>)
        })


```

### 이벤트
- 이벤트 설치

- 'debugger' keyword

- App.js
```javascript
return (
      <div className="App">
        <header>
                <h1><a href="/"  onClick = {function(e){
                  e.preventDefault();
                  this.setState({
                    mode: 'welcome'
                  })
                  //this.state.mode = 'welcome'
                }.bind(this)}>{this.state.subject.title}</a></h1>
                {this.state.subject.sub}
            </header>
```
=> 주석처리 된 부분 작동 x
=> 왜냐하면 함수 안에선 this가 compoennt가르키지않음
: .bind(this)해줌
=> state바꿀 때는 React에서 명시한 것처럼, .setState()써야 함! 그냥 바꿔버리면 react가 바꿨는 지 인식을 못해서 리렌더링x


### Bind함수 이해하기
- 예시
```javascript
var obj = {name: 'egoing'}
function bindTest(){
    console.log(this.name)
}
const bindTest2 = bindTest.bind(obj);
//복사해서 만들어짐
```
=> this의 값이 object가 됨

### setState
### 컴포넌트 이벤트
- App.js
```javascript
return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage = {function(){
              this.setState({mode: 'welcome'})
        }.bind(this)}
        >
        </Subject>
```

## Create기능
### 베이스캠프
- component 안에서, props로 전달된 밸류를 바꾸는 것은 금지
=> state를 통해 밖에서 관리한다

- CRUD

### create구현
- 생성 구현해보자!
- 여태까지는 Read만 가능

- Create 버튼 누르면
- mode = "create"로 바뀌고
- Form 컴포넌트 나타나서
- 새로운 정보를 입력하면
- Content 컴포넌트에 추가!


1. 모드 변경
- App.js



- Control.js 생성
```javascript
import React, { Component } from 'react';
class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="/create" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
                <li><input onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}type="button" value="delete"></input></li>
            </ul>
        );
    }
}

export default Control;
```

2. mode 전환 기능

3. 데이터 추가

- NOTE. 배열[state]에 값을 추가
: push - original data바꿈
=> debugging 어려움!
: concat - 복사본 만듦
=> 수정할 때에는 이걸로 사용!

### shouldComponentUpdate
- shouldComponentUpdate(newProps, newState){
    if (this.props.data === newProps.data){
      return false;
    }
    return true; //변경 있을 때만 render함수 호출
  }

- TOC.js에 적용!

### immuTable (불변)
- note. 복사본 만드는 다른 방법[for 배열] - Array.from(original)
- 복사본 만드는 방법[for 객체]- Object.assign({}, a)


### Update, Delete 구현
- UpdateContent.js

- this.props.data.title이런 식으로 데이터를 받으면 read-only이기 때문에, 문제가 생길 수 있음
=> 따라서 먼저 editable하게 state화 시켜주자!
```javascript

constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

```












### 구현 - delete
- Control.js에서

### 수업을 마치며
- Immutability중요

=> 쓸 수 있는 라이브러리

1. immutable-js
ex.
```javascript
<script src = "immutable.min.js"></script>
<script>
  var map1 = Immutable.Map({a: 1, b: 2, c: 3})
  var map2 = map1.set('b', 50);
  map1.get('b'); //2
  map2.get('b'); //50
</script>
```

2. router
- URL만으로 페이지를 찾아올 수 있게
- React Router
=> url에 따라서 적당한 컴포넌트를 실행시킬 수 있음
=> npm등으로 설치

3. create-react-app
=> npm run eject로 감춰진 여러 설정 제어 가능

4. redux
=> 컴포넌트가 많아지면 부모-자식간의 소통이 복잡해짐!
=> state-props 통신 과정에서 event bubbling이 정말 많이 생길 수 있음
=> 중앙 저장소를 만들고 모든  comnponent는 그 저장소와 직접 연결
=> 그 중앙 저장소의 데이터가 변경되면, 이와 연결된 모든 component가 변경됨

5. react server side rendering
- 서버 쪽에서 웹페이지를 완성한 후에, 클라이언트로 완성된 html을 전송하는 걸로 어플리케이션 구동 시작 가능
=> 초기 구동 시간 단축
=> JS 앱 특유의 로딩 없는 특성 유지 가능

6. react native
=> react와 같은 문법으로 native앱 구성 가능
=> native앱이란, ios, android같은 플랫폼 의미







