# Hello, Next.js
### Next.js 역할 소개
- 정상적인 웹페이지
: 브라우저 <-> 프론트 서버 <-> 백엔드 서버 <-> 데이터베이스
-> 한 번에 페이지가 그려지는 대신 오래걸릴 수 있음

- React/Angular/Vue 사용
: 브라우저 <-> 프론트 서버
          <-> 백엔드 서버 <-> 데이터베이스
-> 레이아웃 먼저 보여주고, 로딩창 띄우고, 백엔드에서 바로 데이터 갖고 와 화면 보여줌

- 다만 한 번에 다 갖고 와야하는 불편함을 줄이기 위해 Server-side rendering  + Codesplitting을 같이 씀

- Next.js ~> 이런 거 해줌. 검색엔진에도 잘 나타나게 함. SSR를 용이하게 해줌.

- SSR : 처음 로딩할 때만 데이터베이스까지 쭉 갔다 옴. 그 담에는 캐싱한 걸 이용해서 백엔드에 잠깐씩 다녀 옴.

- 주의: 터미널을 띄어줌!
: prepare > front에서 프로젝트 실행.

- Node.js : 이미 안정화 되어있기 때문에 어느 버전이든 상관 없음
~> node -v, npm -v 모두 터미널에서 실행되어야 함.

### Next.js 실행해보기
- prepare > front에서
ex. npm init
~> package name에 react-nodebird-front
~> package.json이 생김!

- node 프로젝트에서는 이 package.json이 항상 있어야 함

- Next.js ~> 9버전 (현재는 10버전도 나왔음)
ex. npm i next@9

- package.json에서
~> "author": <your-name>
~> "scripts" / "test" ->"dev", content -> "next"

- 더북.io ~> 노드 교과서 8장까지 무료 공개!

- prepare > front >pages > index.js
: pages 폴더 안의 파일을 모두 next가 페이지로 만들어 줌 (codesplitting이후). 
: import React from 'react'구문 필요 x

- ex. npm run dev //package.json에 쓰인 대로 next라는 명령어가 실행된다

- ex. npm i react react-dom


- profile.js ~> localhost:3000/profile하면 보임
=> 넥스트가 해주는 것.
=> 리액트는 리액트 라우터 등이 추가로 필요

- pages > about > intro.js

- components 디렉토리
(doesnt' have to be named components; whereas pages has to be pages)

- ex. npm i prop-types

- 이제 Applayout으로 감싸줌 (tag)

- next는 자체적인 라우터가 있음 => next/link

- Link!

- 개발모드는 원래 느림
프로덕션 모드는 훨씬 나음

- ex. npm i eslint - D
//개발용으로 (-D)설치함
- ex. npm i eslint-plugin-import -D
- ex. npm i eslint-plugin-react-hooks -D

- eslint는 리액트 개발 시 많이 쓰이는 코드 점검 모듈
- 그리고 이에 대한 설정을 저장해주자!
=> prepare / front / .eslintrc
=> .eslintrc는 JSON파일로


### Q & A
- SSR: React 랑 Nodejs/Spring/Django/Ruby on Rails.. 둘 다 필요 (서버가 있어야 서버 사이드 렌더링이 가능)
- CORS: 브라우저 - 백엔드 간 요청에 CORS 설정이 필요
// SSR할 때 프론트 서버와 백엔드 서버 도메인이 달라서 (포트 넘버 다름)
vs. 브라우저 - 프론트서버에서는 CORS 설정 필요 x
- 검색엔진에 나오려면 => 서버 사이드 렌더링
- 로딩을 없앨 목적으로 서버 사이드 렌더링해도 좋음

- MongoDB는 로그를 쌓아야할 시 추천
=>대부분 케이스는 MySQL 사용

# antd 사용해 SNS 화면 만들기
### antd와 styled-components
- antd - Ant Design
: CSS Framework
: React / Vue / Angular 에 모두 사용 가능
: will use V.4

- NOTE: npm trends

- ex. npm i antd styled-components @ant-design/icons
// 보통 아이콘은 용량 차지 큼
// 그래서 usually separate library로 분류해 놈

- styled-components는 SASS-equivalent

- 이제 Styling 시작!

- Applayout.js
```javascript
import { Menu } from 'antd';

const Applayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>Nodebird</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/register"><a>Register</a></Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    );
};
```


### _app.js와 Head
- 이 때 antd를 리액트와 연동시키는 과정도 필요
- docs 참고!

- next : 기본적으로 안에 webpack이 들어 있음
- 원래 css 파일은 import x
- import는 JS만 가능
- but webpack이 css보는 순간 css를 style tag으로 바꿔서
- html에 삽입

=> 따라서,
`import 'antd/dist/antd.css`
넣어주면 antd의 css파일을 알아서 처리
=> 이는 중복될 코드!
=> pages/_app.js에 넣어줌

```javascript
const App = ({Component}) => {
    return (
        <Component />
    )
};
```
- _app.js가 index, profile, register.js의 공통적인 부분 담당, 따라서 component부분에 다른 파일의 return부분이 들어감
- App이 다른 파일 return의 부모인 셈! 

- Therefore,
**공통 to all pages**는 _app.js에,
**공통 to some components** 는 Applayout에 넣어주면 된다!

- 헤드를 수정하고 싶을 땐..
: next에서 head를 수정할 수 있는 기능을 제공함

- _app.js
```javascript
import Head from 'next/head';
...
<Head>
    <meta charSet="utf-8"/>
    <title>NodeBird</title>
</Head>

```





### 반응형 그리드 만들기
- in components > Applayout.js
```javascript
import {Menu, Input }from 'antd';
..
    //antd docs참고함
    <Input.Search enterButton />
```

- 반응형 vs 적응형
: 반응형은 screen 크기에 따라 components 등의 크기가 변하는 것
: 적응형은 desktop / mobile 등 첨부터 다르게 만듬

- NOTE. 웹 개발을 할 때는
: 꼭! **모바일 먼저** 개발!
: 그 다음에 점점 늘려서 **태블릿**, **데스크탑** 순서로 만듬

: antd에서, xs - 모바일, sm - 태블릿, md - 작은 데스크탑

: antd - 총 col 합= 24!

- NOTE. target="_blank"할 떄는 rel="noreferrer noopener"까지 적어줘야 보안 위협 x!!




### 로그인 폼 만들기

- 현재 서버가 없으므로 로그인 구현 위해 dummy data 사용!

- in Applayout.js
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false); 
...
{isLoggedIn ? <UserProfile /> : <LoginForm/>

```

- components >   UserProfile.js
  components >   LogInProfile.js

- Note.

: Component에 props로 넣어주는 모든 함수는 useCallback()을 해줘라
ex. in LogInForm.js

```javascript

const onChangeId = useCallback((e) => {
    setId(e.target.value);
},[]);

const onChangePassword =useCallback((e) => {
    setPassword(e.target.value);
},[]);
```
=> 중복이 많으니 나중엔 라이브러리 사용 추천!

### 리렌더링 이해
- 로그인 화면에서 좀 더 여유를 주기위해
```javascript
<div style = {{marginTop: 10}}>
...
```
=> 라고 하면 **안 됨**

- {{}}면 *객체*로 여겨지는데
리액트 사용 시 virtual dom을 계속 살펴보면서
달라진 게 있을 때마다 업데이트 하기 때문에.
=> 객체를 새로 생성하는 것은 변화로 인식하기 때문에
useCallback fn이 불러질 때마다 "이전 버전이랑 현재 버젼이랑 이 부분이 다르네?"하면서 리 렌더링 해버림

```javascript

import styled from 'styled-components';

const ButtonWrapper = styled.div`
    marginTop: 10px;
    `;
```
해서 이미 style이 적용된 컴포넌트를 만들고 이것을 사용한다!

=> 성능에 크게 영향이 없다면 그냥 inline써도 됨!
너무 집착할 필요는 x

- Applayout에서 SearchInput도 그렇게!

- styled-components가 싫으면
ex. in LogInForm,js,
```javascript
import {useMemo} from 'react';

const style = useMemo(() => ({marginTop: 10}), []);

<ButtonWrapper style={style}>
```
=> 함수를 캐싱하는 게 useCallback, 값을 캐싱하는 게 useMemo
=> 리렌더링이 되더라도 계속 같은 값을 유지한다!

### 더미 데이터로 로그인하기
- in LogedInForm.js
```javascript
const LoginForm = ({setIsLoggedIn})=> {
    ...
}

const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
}, [id, password]);

return (
    <Form onFinish = {onSubmitForm}>
    ...
)
```
=> antd에서는 e.preventDefault();가 이미 onFinish에 적용되어 있기 때문에 또 써주면 안 됨!

- setIsLoggedIn은 어디서 오는가?
=> dummy data로 Applayout.js에서 setIsLoggedIn을
```javascript
    {isLoggedIn ? <UserProfile /> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
```

=> 로그인을 하는 순간 setIsLoggedIn을 해줬으니 isLoggedIn이 true로 바뀔것이고, <UserProfile/>이 뜰 것이다
=> 백엔드가 없어도 이렇게 흉내를 낼 수 있음

- UserProfile.js
=> card
```javascript
actions = {[
                <div key = "tweet">PI equals 3.141592..<br />0</div>,
                <div key = "followings">Following<br />0</div>,
                <div key = "followers">Followers<br />0</div>,
            ]}
```
=> 리액트에서 배열로 JS쓸 때는 key 붙여줘야 함!!

- 로그아웃 기능 구현은
in UserProfile.js,
```javascript
    const UserProfile = ({setIsLoggedIn}) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    });

    ...
        <Button onclick={onLogOut}>Log Out</Button>
```

- and in Applayout.js,
```javascript
    {isLoggedIn ? <UserProfile setIsLoggedIn = {setIsLoggedIn}/> : <LogInForm setIsLoggedIn={setIsLoggedIn/>}
```

- in LogInForm.js,
```javascript

const FormWrapper = styled(Form)`
    padding: 10px;
`;
```
해주자!
to make it look better!

### 크롬 확장 프로그램 + Q&A
- <a href="..."target="_blank"rel="noreferrer noopener">
// target='_blank'하면 새 창에서, 이전에 어떤 창에서 넘어왔는 지 정보를 알 수 있음
// noreferrer (이전 페이지), noopener (누가 나를 열었는 지) 정보 안 주는 방법

- 크롬 확장 프로그램 / React Deevloper Tools 혹은 Redux DevTools

- 대륙의실수 - antd / echart / vue

### 프로필 페이지 만들기
- in pages/profile.js
```javascript
<AppLayout>
...
</>
```

- componetns / NicknameEditForm.js
- components / FollowList.js

- again, form은 repetivie한 부분이 많기 때문에 library 써서 만드는 거 추천!

- List라는 컴포넌트 <= antd docs!

### 회원가입 페이지 만들기 (React Hook)
```javascript
export default(initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return [value, handler];
};
```
- 이렇게 중복되는 것들은 커스텀 훅을 만들어주면 좋다!!

- 훅을 쓸 수 있는 조건? => 조건문/반복문 등에서는 불가함. 무조건 component안에서만 가능!
=> hooks/useInput.js안에 중복되는 부분 따로 빼내줌.

## Redux 연동하기
### 리덕스 설치 & 필요성 소개
- Redux > Mobx : 인기 더 좋고 초보한테 더 쉬움 but 코드량이 많아 생산성 측면에서는 덜 좋음

- Next에 Redux 를 붙이는 것 : 원래 어렵. but 라이브러리가 쉽게 했다.
=> "Next-Redux-Wrapper"

- store > configureStore.js 만듬
- npm i next-redux-wrapper
(6버전!)
```javascript

import {createWrapper} from   'next-redux-wrapper';
const configureStore = () => {};
const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});
export default wrapper;
```

- 이거를 _app.js에 가져와서
```javascript
export default wrapper.withRedux(NodeBird);
```

- NOTE. React-redux에서는 _app.js에서,
```javascript
return (
    <Provider store= {store}>
        <Head>
            <title>
                ...

)
```
이렇게 Provider로 감싸야 하지만,
next에서는 필요 x

- "중앙저장소" 역할 - Context API, Redux, Mobx, GraphQL, etc.

cf. Redux는 코드량이 많은 대신 에러 나면 트래킹 쉬움. Mobx는 반대

: central storage는 서버에서 주로 데이터 받음. 서버서 받는 것은 비동기.
: 비동기를 다룰 때는 실패의 가능성이 있어서 이에 대비해야 한다는 점!
: 비동기 => 요청 - 성공 - 실패 3단계
: 이를 context api에서 구현하려면 manually해줘야 함!


- NOTE! Component는 화면 렌더링에만 집중하고, 데이터 다루는 작업은 별도의 모듈/라이브러리에서 처리하면 좋음
=> 비동기 요청도 redux 혹은 mobx에 맡기는 것이 좋다

- 비동기 요청이 많으면 Context API도 결국 Redux/mobx처럼 구현하게 되어 있음
=> 따라서 처음부터 그걸 쓰는 게 좋다!


### 리덕스의 원리와 불변성
- 







