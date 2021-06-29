# Hello, Next.js

### Next.js 역할 소개
- 정상적인 웹페이지
  : 브라우저 <-> 프론트 서버 <-> 백엔드 서버 <-> 데이터베이스
  -> 한 번에 페이지가 그려지는 대신 오래걸릴 수 있음

- React/Angular/Vue 사용
  : 브라우저 <-> 프론트 서버
  <-> 백엔드 서버 <-> 데이터베이스
  -> 레이아웃 먼저 보여주고, 로딩창 띄우고, 백엔드에서 바로 데이터 갖고 와 화면 보여줌

- 다만 한 번에 다 갖고 와야하는 불편함을 줄이기 위해 Server-side rendering + Codesplitting을 같이 씀

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
import { Menu } from "antd";

const Applayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Nodebird</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};
```

### \_app.js와 Head
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
=> pages/\_app.js에 넣어줌

```javascript
const App = ({ Component }) => {
  return <Component />;
};
```

- \_app.js가 index, profile, register.js의 공통적인 부분 담당, 따라서 component부분에 다른 파일의 return부분이 들어감
- App이 다른 파일 return의 부모인 셈!

- Therefore,
  **공통 to all pages**는 \_app.js에,
  **공통 to some components** 는 Applayout에 넣어주면 된다!

- 헤드를 수정하고 싶을 땐..
  : next에서 head를 수정할 수 있는 기능을 제공함

- \_app.js

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

- NOTE. target="\_blank"할 떄는 rel="noreferrer noopener"까지 적어줘야 보안 위협 x!!

### 로그인 폼 만들기
- 현재 서버가 없으므로 로그인 구현 위해 dummy data 사용!

- in Applayout.js

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);
...
{isLoggedIn ? <UserProfile /> : <LoginForm/>

```

- components > UserProfile.js
  components > LogInProfile.js

- Note.

: Component에 props로 넣어주는 모든 함수는 useCallback()을 해줘라
ex. in LogInForm.js

```javascript
const onChangeId = useCallback((e) => {
  setId(e.target.value);
}, []);

const onChangePassword = useCallback((e) => {
  setPassword(e.target.value);
}, []);
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
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margintop: 10px;
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
{
  isLoggedIn ? <UserProfile /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />;
}
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
- <a href="..."target="\_blank"rel="noreferrer noopener">
  // target='\_blank'하면 새 창에서, 이전에 어떤 창에서 넘어왔는 지 정보를 알 수 있음
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
export default (initialValue = null) => {
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
import { createWrapper } from "next-redux-wrapper";
const configureStore = () => {};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
export default wrapper;
```

- 이거를 \_app.js에 가져와서

```javascript
export default wrapper.withRedux(NodeBird);
```

- NOTE. React-redux에서는 \_app.js에서,

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
- 데이터가 있다고 했을 때, Redux에서는 'action'을 만들어 데이터를 수정한다.

- 중앙 저장소 -> action -> dispatch -> reducer -> 중앙 저장소
  : 여기서 reducer는 정확히 action이 어떤 기능을 수행해야 하는 지 풀어서 써 주는 것
  ex. action
  {
  type: 'CHANGE_NICKNAME',
  data: 'boogicho'
  }

ex. reducer
switch (action.type){
case 'CHANGE_NICKNAME':
return {
...state,
name: action.data,
}
}

=> 따라서 크게 마법같은 건 없고, action을 하나 만들 때마다 reducer도 만들어줘야 해서 코드량이 늘어남

- 그럼 뭐가 좋은가?
  : action이 다 기록이 되기 때문에, 나중에 debugging할 때 용이하다
  : ex. 로그인 기능 테스트할 때, manually log in/out할 필요 없이 로그를 살펴보면서 데이터 변환 양상을 보면 된다!

- NOTE.
  : 자바스크립트에서,
  ex. {} === {} //false
  => 객체를 새로 만들면 false
  ex. a = {};
  ex. b = a;
  ex. a === b //true
  => '참조' 하면 true

- 위의 reducer를 보면 스위치 문에서 '객체'를 리턴해 줌
  => 객체를 새로 만들어야
  => 변경 내역이 추적이 되기 때문!

ex. const prev = {name: 'zc'}
ex. const next ={name: 'bc'}
// 이러면 이전 것과 다음 것이 다른 객체들이어서 기록이 남음

but
ex. const prev = {name:'zc'}
ex. next = prev;
ex. next.name = 'bc'하면
ex. prev.name //은 'bc'가 나옴!

- 또 여기서 ...state을 해주는 이유는,
  : 그 부분은 새로 만들지 않고
  : '참조' 만 해줘서 메모리를 아끼기 위함!

### 리덕스 실제 구현하기
- 폴더 reducers만들기!
- index.js

- NOTE. reducer는 함수다! 안에 switch가 들어있는 함수.

- configureStore.js

```javascript
import reducer from "../reducers";

const configureStore = () => {
  const store = createStore(reducer, enhancer);
  return store;
};
```

//스토어는, state와 reducer를 포함하는 것

- 너무 액션이 반복되면 똑같은 코드 쓰는 수고 줄이기 위해 액션함수를 만들어준다!
- index.js

```javascript
const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],

    }
};



export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

//action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
};
changeNickname('BM');

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'BM'
// }

store.dispatch(changeNickname('MT'));

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            };
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data
            }
    }
});
```

- 첫 액션 디스패치를 해보자.
- componetns > AppLayout.js
  : 이제 const [isLoggedIn] 필요 없음. 리덕스라는 중앙관리소가 있기 때문에 컴포넌트별로 isLoggedIn을 관리하지 않아도 됨.

: 리덕스에 initial State를 두면 얘를 다양한 컴포넌트에서 원할 때 가져갈 수 있다!

```javascript
import {useSelector} from 'react-redux';

..
const Applayout = ({ children }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);
    //이제 isLoggedIn이 바뀌면 알아서 Applayout이 리렌더링됨
    ...
        {isLoggedIn ? <UserProfile /> : <LogInForm />}
    ...
```

- LogInForm.js
  : {setIsLoggedIn}을 prop으로 받아줄 필요 더는 없음
  : 대신 const dispatch = useDispatch();
  : import {useDispatch} from 'react-redux';
  : 리덕스 쓰면 useState할 일이 많이 줄어듬

```javascript
import {loginAction} from '../reducers'
...
const onSubmitForm = useCallback(() => {
        console.log(id, password);
        // setIsLoggedIn(true);

        dispatch(loginAction());
    }, [id, password]);

```

- UserProfile에도
  : import {useDispatch}from 'react-redux';

- reduceers에서 logoutAction만들기!

### 미들웨어와 리덕스 데브툴즈
- reducers/index.js

```javascript
import {HYDRATE} from 'next-redux-wrapper';
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return {...state, ...action.payload}
```

- 액션같은것을 redux dev tools에 기록을 남게 하려면 **미들웨어를** 붙어야 함

```javascript
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extenson";

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) //배포용
      : composeWithDevTools(applyMiddleware(...middlewares)); //개발용

  const store = createStore(reducer, enhancer);
  return store;
};
```

- 개발용일 때는 devtoops를 넣어줌
  : npm i redux-devtools-extension
  : 요게 있어야 브라우저 개발자 도구랑 연동이 됨
  : 히스토리가 쌓이면 메모리도 많이 잡아먹고, 중앙 데이터가 어떻게 변하는 지 보여 보안이 안 좋아짐 => 개발용일때만 사용해!
  // 리덕스의 기능이 확장된 것이기 때문에 'enhancer'

- NOTE-만약 포트 넘버 바꾸고 싶으면 package.json
  : "dev": "next -p 3000"

- 이제 리덕스 데브툴 에서 히스토리와, 각 히스토리에 따른 데이터 변환도 볼 수 있다!
  : State &Diff 기능 자주씀

### 리듀서 쪼개기
- 액션/case가 늘면서 index는 길어짐
- reducers/user.js 랑 post.js 만들어서 쪼개주자!
  => 그 이유는
  => index.js에서 const initialState={user:...,post:..}였기 때문

- 기본 꼴

```javascript
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
```

=> 기존 state와 action을 받아서 다음 state를 렌더

=> index에 있던 action들도 옮겨줌

- 이제는 그 reducer들을 index.js에 불러옴

```javascript
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";
```
=> combineReducers는 리듀서를 합쳐주는 기능

- reducer는 함수. 함수를 합치는 것은 쉽지 않은 일. 따라서 combineReducers의 도움을 받아야 한다
```javascript
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});
```
=> user와 post를 combineReducer를 이용해서 줄여주는 모양새지만, HYDRATE사용을 위해 index도 넣어주는 것
(HYDRATE은 SSR을 위해 Required!)

- index.js에서 initialState는 이제 필요 x
  => user.js랑 post.js에 있고 combineReducer에서 알아서 합쳐줌!

- LogInForm.js
  => '../reducers/user';

### 더미데이터와 포스트폼 만들기
- 폼에 현재 styled components 사양이 적용이 안 되고 있음
  => 이유? styled components는 지금 SSR 설정을 안 해줬기 때문에

=> SSR는 프론트엔드 서버에서 HTML을 데이터랑 합쳐서 그려줌
=> styled components는 지금 SSR설정이 안 되어 있어서 이것이 적용이 안 된 채로 SSR이 행해지는 것임

- 이번 강좌에서는 Main Pg꾸밀 것!
- 리듀서가 있으면, 그 중심으로 생각하면 된다

- reducers / post.js
- 가짜데이터

```javascript
export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "BP",
      },
      content: "First article #GME #APL",
      Images: [
        {
          src: "http://image.yes24.com/momo/TopCate1860/MidCate008/185975276.jpg",
        },
        {
          src: "https://miro.medium.com/max/1200/1*ZDDuzNRgvV0pJukSOw-UDA.jpeg",
        },
        {
          src: "https://image.aladin.co.kr/product/23331/95/cover500/e332537164_1.jpg",
        },
      ],
    },
  ],
  Comments: [
    {
      User: {
        nickname: "hero",
      },
      content: "Saving $$$ for it!*",
    },
  ],

  imagePaths: [],

  postAdded: false,
};
```

- 왜 User, Images, Comments는 대문자로 시작?
  : SQLite와 관련 있음
  : 관계가 있는 정보끼리 합쳐줌
  : 합쳐준 애들은 대문자가 되어서 나옴

=> 이런 props 이름 및 구성이, FE와 BE 개발자들이 협의해서 맞춰나가야 할 것

- 리덕스 없을 떄는 useState로 처리하던 것들도, 이를 사용하면 initialState에 초기데이터를 저장할 수 있음!

- 계속 post.js

```javascript
const ADD_POST = 'ADD_POST';
// 액션 이름을 상수로 지어주면 오타로 인한 에러 줄이는 데 도움됨
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: ..
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            return {
                ...state,

                mainPosts: [dummyPost,...state.mainPosts],
                //제일 위에 보여주기 위해 앞에다 추가
                postAdded: true,
            };
        default:
            return state;
    }
};
```
- pages>index.js

```javascript
const Home = () => {
    const {isLoggedIn} = useSelector((state) => state.user);
    const {mainPosts} = useSelector((state) => state.post);
    return (
        <Applayout>
            {/* 로그인 시에만 보임 */}
            {isLoggedIn && <PostForm />}
            /* 키는 index하면 안 됨! */
            /* 지워질 가능성 있기 때문 */
            {mainPosts.map((post) => <PostCard  key = {post.id} post={post}>
        </Applayout>
    );
}
```
- components > PostForm.js

- components > PostCard.js

### 게시글 구현
- PostCard.js

```javascript
const PostCard = () => {
  return (
    <div>
      <Card>
        <Image />
        <Content />
        <Buttons></Buttons>
      </Card>
      <CommentForm />
      <Comments />
    </div>
  );
};
```
=> 이렇게 기획을 하고, 하나씩 구현해 나가면 됨.

- 배열 안에 JSX넣을 땐 항상 key를 넣어줘야 함

- user.js에서, export const initialState = {..., me: null, ..}

- components > PostImages.js

```javascript
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Button, Card, Popover, Avatar } from "antd";
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
  // post는 지금 반복문 통해서
  // 부모로부터 받아온 것
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);

    // prev는 이전 상태가 들어있음. useState -liked/setliked
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  const { me } = useSelector((state) => state.user);
  // const id = me && me.id;
  // 위의 식은 아래와 같은 뜻
  const id = me?.id;
  // "optional chaining 연산자!"
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        // cover와 actions모두 antd기능
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {/* 로그인 시에만 보이게 */}
                {id && post.User.id === id ? (
                  <>
                    <Button>Edit</Button>
                    <Button type="danger">Remove</Button>
                  </>
                ) : (
                  <Button>Report</Button>
                )}
              </Button.Group>
            }
          >
            {/* 더보기버튼 */}
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && <div>Comments</div>}
      {/* <CommentForm />
            <Comments /> */}
    </div>
  );
};
PostCard.propTypes = {
  // post: PropTypes.object.isRequired,
  // 혹은 더 자세히 명시해주기 위해서
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
```

### 댓글 구현하기
```javascript
{
  commentFormOpened && (
    <div>
      <CommentForm post={post} />
      {/* 게시글의 id를 comment가 받아야하기 때문에 post 넘겨줌! */}
      <List
        header={`${post.Comments.length} comments`}
        itemLayout="horizontal"
        dataSource={post.Comments}
        // post.Comments 각각이 item으로 들어감
        renderItem={(item) => (
          <li>
            <Comment>
              author = {item.User.nickname}
              avatar = {<Avatar>{item.User.nickname[0]}</Avatar>}
              content = {item.content}
            </Comment>
          </li>
        )}
      />
    </div>
  );
}
```

### 이미지 구현하기
- PostImages.js
```javascript
const PostImages = ({images}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);
    if (images.length === 1){
        return (
            <>
            <img role="presentation" src = {images[0].src} alt = {images[0].src} onClick = {onZoom} />
            </>
            )
        }
        ..
```

### 이미지 캐루셀 구현하기
- 이미지 클릭 시 캐루셀 보여지게 할 거임
  => PostImages.js의 onZoon

- PostImages.js

```javascript
{
  showImagesZoom && <ImagesZoom image={images} onClose={onClose} />;
}
```

- 특이한 방법 사용 구현할 것임!
  => ImagesZoom 폴더 만듬

- ex.npm i react-slick
  => react-slick은 carousel중에 가장 유명한 컴포넌트!

- 너무 inline style이 많아져 styled-component 사용
- 한 styled component 안에 nested componoent style 명시하면, 변수명 정해야 하는 곤란에서 벗어날 수 있음

### 글로벌 스타일과 컴포넌트 폴더 구조
- 이미 정해져있는 slick의 class name바꾸기 위해 GlobalStyle 사용함!

- ImagesZoom > index.js

```javascript
import styled, {createGlobalStyle} from 'styled-components';

...
const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
    .ant-card-cover {
        transform: none !important;
    }
    // antd최신 버전에서는 transform을 시켜서 position: fixed가 제대로 작동 안 하기 때문
`;
...

return (
    ...
    <Global/>
)
```
=> Global 태그는 아무데나 넣어주면 됨

- vs. styled.div``는 모두 local scope를 가짐

- 가로 스크롤이 생겨서 거슬린다면...
  => margin-left와 margin-right이 생겨서 그럼.
  => components > Applayout.js에서

```javascript
import {createGlobalStyle} from 'styled-components';

...
const Global = createGlobalStyle`
.ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
}

.ant-col:first-child {
    padding-left: 0 !important;
}

.ant-col:last-child {
    padding-right: 0 !important;
}
`
..
```

- ImagesZoom > index.js에서 header > button따로 구현해주자!
```javascript
const CloseBtn = styled(CloseOutLined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  curosr: pointer;
`;
```
=> 아이콘으로 바꿔주기 위해

- "Indicator"는 현재 몇번째 slide보고 있는 지 indicate해주기 위해
  : Slick주변에 써줌
```javascript
<Indicator>
  <div>
    {currentSlide + 1} /{images.length}
  </div>
</Indicator>
```

- Why did we make ImagesZoom as a separate folder?
  => styled components코드 너무 많음
  => ImagesZoom > styles.js에 따로 넣어줌

### 게시글 해시태그 링크로 만들기
- 리덕스 서버로 가기 전에, 하나 빠뜨린 것 처리합시다!
: 특수한 기능을 추가해야 하므로, component 새로 만들어 줌
=> components >PostCard

```javascript
    description={ <PostCardContent postData ={post.content}/>}
```
- components > PostCardContent.js
  => 그냥 문자열은 문자열로, 해쉬태그는 해쉬태그로 바꿔줄거임

=> 정규표현식 사용! (ex. regexr.com)
: 해쉬태그 여러 개 찾아야되니깐 //g
: 해쉬태그 찾아야되니깐 /#/g
: 해쉬태그 이후 모든 글자 /#.+/g
: 하지만 이러면 공백 구분 없이 한 번에 고려되므로
: 공백을 제외한 해쉬태그 이후 모든 것을 선택하도록 /#[^\s]+/g
: #첫번째#두번째 이런 것도 처리해주도록 /(#[^\s#]+)/g
=> .split에서 정규표현식쓸땐 괄호 해줘야 제대로 작동을한다!!

- PostCardContent.js
```javascript
    <div>
        {postData.split(/(#[^\s#]+)/g).map ((v) => {
            if (v.match (/(#[^\s#]+)/g)){

                return <Link href = {`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
                // Link는 넥스트의 링크임 - slice는 # 뗀 것
            }
            return v; //일반 문자열이면 그냥 반환
        })
    </div>
```

- PostCard.js
```javascript
import PostCardContent from "./PostCardContent";
```

# Redux-Saga 연동

### redux-thunk 이해하기
- redux-thunk는 redux의 MW로써 redux의 기능을 향상
- 그 중에서도 redux-thunk는 redux가 비동기 액션을 dispatch할 수 있도록 도와줌
  ex. 동기액션

```javascript
const INCREMENT_COUNTER = "INCREMENT_COUNTER";

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}
```

ex. 비동기 액션

```javascript
function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
```

=> 아래 함수는 redux-thunk를 써야 실행 됨
=> 장점: 한 async 함수 안에 여러 개의 sync함수 dispatch가능

- NOTE. redux-thunk는 굉장히 간단한 프로그램!

```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      if (typeof action === "function") {
        return action(dispatch, getState, extraArgument);
      }
      return next(action);
    };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

=> 사실 그냥 middleware로 써줄 수도 있음
=> 그래도 다운로드 해보자! npm i redux-thunk

- store > configureStore.js

```javascript
import thunkMiddleware from 'redux-thunk';

const configureStore = () => {
    const middlewares = [thunkMiddleware];
    ...
```

- ex. loggerMiddleware만들어보면

```javascript
const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);
    return next(action);
  };
```

=> 3단 고차 함수 있음
=> 함수 실행마다 로그 해주는 미들웨어!

- 따라서 리덕스 기능을 미들웨어로 계속 확장시켜줄 수 있다

- 하지만 실무에서도 thunk보다는 saga를 더 많이 쓰기 땜시
  : thunk는 간단히 얘기하고 saga로 넘어갈 것임

- reducers > user.js
  => logout과 login 액션이 실제로는 BE server와 통신해야 하기 때문에
  => 바로 바로 되지 않음
  => 따라서 비동기여야 하고, loginRequestAction / logoutRequestAction으로 바꿔야 함

```javascript
export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
export const loginSuccessAction = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};
export const loginFailureAction = (data) => {
  return {
    type: "LOG_IN_FAILURE",
    data,
  };
};
```

=> 어떤 상황이든 이렇게 request-success-failure세가지로 나뉨!

- 이 때 thunk를 쓰면

```javascript

export const loginAction = (data) =>{
    return (dispatch, getState) => {
        const state = getState(); //initialState나올것임
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .them((res) => {
                dispatch(loginSuccessAction(res.data));
            })

            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
            })
    }
}
```

=> 비동기 action creator가능

- 봤듯이 thunk는 여러 번의 dispatch를 하나에 할 수 있다는 장점 있음
  => but 그게 다. 반면에 saga는 더 많은 기능 있다
  ex. delay
  ex. takethelatest (ex. 세 번 클릭시 한 번만 취급)
  ex. throttle/debounce (ex. 스크롤 내리면 서버에 엄청 과부하 ~> 조금씩만 받아들여 self-DDOS공격 방지함)
  => 따라서 thunk는 간단할 때만 쓰고 복잡하면 saga로 넘어감

### saga 설치하고 generator 이해하기

- 이제 thunk 지워버리자! thunk코드들 지워주고
  ex. npm rm redux-thunk

- npm i redux-saga next-redux-saga

- store > configureStore.js

```javascript
import createSagaMiddleware from 'redux-saga';

import rootSata from '../sagas'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    ...
    store.sagaTask = sagaMiddleware.run(rootSaga);
}
```

- 또한 pages > \_app.js에서

```javascript
import withReduxSaga from 'next-redux-saga';
...

export default wrapper.withRedux(withReduxSaga(App));
```

- sagas > index.js

```javascript
export default function* rootSaga() {}
```

=> function\*은 제네레이터!
=> 제네레이터는 gen().next()
=> 처럼 .next()를 해줘야 실행된다!

ex. const gen = function\* () {
console.log(1)
yield;
console.log(2);
yield 3 ;
}
const generator = gen();
generator.next(); // 1
generator.next(); // 2

- 종단점이 있는 함수이므로 gen함수는 무한 루프도 필요 시 오케이
  ex. let i = 0;
  const gen = function\*() {
  while(true) {
  yield i++;
  }
  }
  const g = gen();
  g.next();

=> eventListener
=> 와 결합해서도 많이 씀

### saga 이펙트 알아보기

- all, fork 등을 사가 이펙트라고 한다.
- rootSaga 하나를 만들어놓고, 거기에 우리가 만들고 싶은 비동기 액션들을 하나씩 넣음

- index

```javascript
export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}
```

=> all은 배열을 받아들임
=> 이 안에 모든 async actions이 한 번에 실행됨

=> fork는 이 함수를 실행한다는 뜻!
=> fork대신 call을 쓸 수도 있는데, 명백히 다른 점이 있다!

ex.

```javascript
function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  try {
    const result = yield call(logInAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}
function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}
```

=> watchLogIn에서 'LOG_IN' 액션이 들어오면 logIn()이 실행되고,
=> generator함수가 이벤트 리스너처럼 실행되어
=> logInAPI를 시도하고 성공하면 LOG_IN_SUCCESS를
=> 실패하면 LOG_IN_FAILURE를 리턴한다!

- call vs fork
  => fork: sync func 호출
  => call: async func 호출
  => 여기서 우리는 promise를 기다려야 하므로 call 사용

=> yield는 await과 비슷함

- call함수는 첫 번째 매개변수가 함수 이름, 그 다음 매개변수들은 호출되는 함수의 매개변수
  ex. const result = yield call(logInAPI, action.data);

ex. function logInAPI(data){
return axios.post('/api/login', data)
}

- generator는 실행할 때 한 줄 한 줄 할 수 있기에
  : testing할 때 정말로 좋다

```javascript
const l = logIn({ type: "LOG_IN_REQUEST", data: { id: "BP" } });
l.next();
l.next();
```

### take, take 시리즈, throttle 알아보기

- 노트: 다음과 같은 generator는 **이벤트리스터**역할을 하는데, 치명적인 단점은 일회용이라는 것이다

```javascript
function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}
```

=> 따라서 무한루프로 감싸줌!

=> but takeEvery가 더 흔히 쓰임

```javascript
function* watchLogIn(){
    while(true){
        yield take('LOG_IN_REQUEST', logIn);
    }
}

function* watchLogIn(){
        yield takeEvery('LOG_IN_REQUEST', logIn);
    }
}
```

- while take는 동기적으로 동작하지만, takeEvery는 비동기로 동작한다는 차이가 있음

=> 여기서 takeLatest를 해줘서, 중복처리를 막을수도 있다.
: 하지만 takeLatest에는 치명적인 단점이 있는데, 요청자체를 한 번으로 줄여주는 게 아니라, 요청이 여러번 들어간 건 어쩔 수 없고, Backend server -> Frontend server의 응답을 한 번만 보여주는 것이다.
: 따라서 백엔드 처리는 여러 번 일어나고, 새로고침하면 그렇게 여러 번 처리한 것이 보일 것임

=> throttle!

```javscript
function* watchAddPost(){
    yield throttle('ADD_POSTREQUEST',addPost, 10000);
}
```

: 정말로 10초 동안에는 해당 함수가 한 번만 처리되도록 함! 요청 포함
=> but throttle은 특수한 경우에만 쓰고 보통 takeLatest 사용
=> 중복 처리는 server에서 또 따로 처리

=> 다만 요청이 너무 많아 DDOS공격처럼 될 것 같으면 throttle처리한당!

- thunk는 여러 액션을 묶어주는 역할밖에 못했는데, saga는 지금 보듯이 여러 추가기능 있음 (thunk로는 직접 구현했어야 했을 것들)

- 그리구 지금은 server가 없기 때문에, loginAPI하면 무조건 에러남
  => delay로 비동기 효과 가짜로 구현

```javascript
function* addPost(action){
    try {
        //const result = yield call(addPostAPI, action.data)
        yield delay(1000)
```

- 쓰로틀 vs. 디바운스 차이는 제로초 블로그에서!

### saga 쪼개고 reducer 연결

- 삼총사 saga 액션들 계속 쓰다보면 코드가 너무 길어짐
  => saga 쪼개자!
  => sagas>post.js 랑 user.js 만들기

- reducer는 합칠 때 combinedReducers로 합쳤는데, sagas는 그런 것까진 필요x

=> user에 관련된 건 user.js에 나머진 다른 거에

- 액션 이름이 통일되게 reducers edit!
  => 리듀서에서도, switch-case에 모든 삼총사 케이스들이 다 있어야 함!
  ex. "log-in-request', 'log-in-success', 'log-in-failure' etc
  => 길어짐

=> 로그인 시도 중 등의 상태도 define해줌. 로딩창 띄우기 위해

- LogInForm.js에서

```javascript
const LogInForm = () => {
    ...
    const {isLoggingIn} = useSelector((state) => state.user);

<ButtonWrapper>
    <Button ... loading={isLoggingIn}>
```

- UserProfile.js에서
  => logOutRequestAction
  => 그리고 이제 me를 사용할 수 있으므로 me.data

- reducers에서 successAction과 failureAction은 이제 필요없음! Saga가 알아서 호출해 줄 거니까!

- 흐름을 다시 한 번 보자!

1. components>LogInForm.js에서 로그인 함
   => id, pw 적고 로그인 누름
   => loginRequestAction({id, password})실행

2. 그러면 sagas>user.js에서
   => function\* watchLogIn(){
   yield takeLatest('LOG_IN_REQUEST', logIn);
   }
   => 가 실행됨

3. 같은 파일에서
   => function\*logIn(action) {..}실행!

4. 그와 동시에 reducers>user.js
   => case 'LOG_IN_REQUEST' 실행

5. sagas>user.js에서
   => LOG_IN_SUCCESS 디스패치되면

6. reducers>user.js
   => LOG_IN_SUCCESS 실행됨
   => me: {...action.data, nickname: 'BP'} 데이터 생김
   => isLoggedIn: true

7. Applayout에서
   => <Col ..>
   {isLoggedIn ? <UserProfile /> : <LogInForm />}
   </Col>
   => 트루되면서 <UserProfile /> 보여짐!

### 액션과 상태 정리하기

- reducer 액션명이 string이면 오타에 취약하다는 단점이 있다
  => 따라서, 변수로 빼주면 좋음
  => reducers>user.js

```javascript
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
```

=> 이런 식으로!
=> 그리고 다른 파일에서도 쓸 수 있으니 export 해줌

- reducers > post.js에서도 바꿈!

- reducers > user.js

```javascript
case LOG_IN_REQUEST:
    return {
        ...state,
        isLoggingIn: true,
        //me: null, //data를 없앤 채 로딩을 돌려줄꺼냐
        logInError: null
        }
```

=> 보통 로딩 때에는 데이터를 안 없애는 게 트렌드긴 함! 혹시나 로그인 실패 시 데이터를 다시 보여줘야 하니까

- reducers > post.js와
  sagas > post.js도 업뎃!

### 바뀐 상태 확인 + eslint점검하기!

- Applayout.js

```javascript
const { me } = useSelector((state)=>state.user);
...
    <Col xs={24} md={6}>
        {me ? <UserProfile /> : <LogInForm />}
```

- LogInForm.js
  => id를 email로 바꿔줌
  => SQL에서 자동으로 id를 assign해주는데 이와 헷갈리지 않기 위해

- UserProfile.js

```javascript
    <div key = "tweet">{me.Posts.length}<br />0</div>,
    ...

```

- pages>profile.js

```javascript
const followerList = [
  { nickname: "BP" },
  { nickname: "chicken" },
  { nickname: "bread" },
];
const followingList = [
  { nickname: "BP" },
  { nickname: "chicken" },
  { nickname: "bread" },
];
```

=> 더 이상 필요 x (b/c 오브 dummyData)

```javascript
<FollowList header="Following" data={me.Followings} />
```

- pages>register.js

```javascript
    const dispatch = useDispatch();
        const onSubmit = useCallback(() => {
dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        })
```

- id를 email로 모두 바꿔주기

- CommentForm.js

```javascript
const CommentForm = ({ post }) => {

const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id},
        })
        // 재사용할 거면 따로 함수로 빼는 게 좋고,
        // 아니면 그냥 여기에 액션 객체 하나로 쓰는 것도 좋다
    }, [commentText, id]);

// 포스팅 되면 입력창 비워주기 위해
useEffect(() => {
        if (addPostDone){
            setText('');
        }
    }, [addPostDone]);
```

=> 비슷하게 comment도 해줌!

- 너무 느슨하게 코딩되어 있어서 eslint가 잘 동작하지도 않음
  => ex. npm i -D babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react-hooks eslint-plugin-jsx-a11y

=> .eslintrc

```javascript
    "parser": "babel-eslint",
    "extends": [
            "airbnb"
    ],
    "rules": {
        "linebreak-style":0,
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-console": "off",
        "no-underscore-dangle": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-one-expression-per-line": "off",
        "object-curly-newline": "off",
        "linebreak-style": "off"



```

### 게시글, 댓글 saga 작성하기

- 화면에 문제 생기면 항상 data를 먼저 봐라!

- comment쓰면 dummyData말고 직접 넣어주는 걸 보고 싶기 때문에

- sagas/post.js에서 data: action.data하고
  => reducers/post.js에서 ADD_POST_SUCCESS

```javascript
    case ADD_POST_SUCCESS:
        return {
            ...state,
            mainPosts: [dummyPost(action.data),...state.mainPosts],
```

=> still in reducers/post.js

```javascript
const dummyPost = (dadta) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "BP",
  },
  Images: [],
  Comments: [],
});
```

- 지금은 id가 겹쳐서 문제 됨.
  => npm i shortid
  => npm i faker

- 코멘트 처리해주자!

```javascript
    ADD_COMMENT_SUCCESS: {
        const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        const post = {...state.mainPosts[postIndex]};
        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;

        return {
            ...state,
            mainPosts,
            //제일 위에 보여주기 위해 앞에다 추가
            addCommentLoading: false,
            addCommentDone: true,
        };
```

- 흐름: saga => reducer => useEffect 실행 => 화면바뀜
  => 불변성 지키면서 수정

### 게시글 삭제 saga 작성하기

- 위의 ADD_COMMENT_SUCCESS부분 너무 복잡하다!
  => **immer**쓰면 훨씬 편함

- 개념 복습!
  => data관련은 다 reducer에서
- reducers/user.js
  => dummyData에 Followings,Followers넣으면 숫자가 뜬다!

- 게시글에도 사실 id는 다 붙여줘야 함
- user.js (reducers)
  ex. Posts: [{id: 1}],

- post.js (reducers)
  => id: 1 게시글 아이디가 동일하므로 '내가 쓴 게시글'로 판단

```javascript
export const initialState = {
    ...
    Comments: [{
            id: shortId.generate(),
            User: {
                nickname: 'hero'
            },
            content: 'Saving $$$ for it!*'
        },{
            id: shortId.generate(),
            User: {
                nickname: 'nero',
            },
            content: 'wanna buy it sooooon!!'
        }],
    ...
```

=> Comments처럼 대문자로 시작하는 것들은
=> 서버에서 주는 것들: 아이디가 고유하게 붙어있음
: Images등도 다 id 부여 필요! => KEY로 쓰기 때문에

- 이제 **게시글을 쓸 때\***...
  => 게시글은
  => reducers/post.js에서
  `case ADD_POST_SUCCESS`

=> 반면 dummyUser, userData부분은
=> reducers/user.js에 있음

- 문제는,
  => post를 하나 추가할 떄,
  => dummyUser.Posts에도 하나가 추가되어야 함
  => 삭제 또한 마찬가지

=> 각 reducer에서, 그 안에 있는 정보들만 건들 수 있기 떄문에 문제!

- 원리를 다시 생각해봅시다...
  => User reducer 상태는
  => action으로만 바꿀 수 있음
  => 따라서 action을 만들어주면 됨

```javascript
export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
```

=> User reducer 상태를 바꿀 수 있는 action을 이렇게 하나 만들고
=> 걔를 post saga에서 호출
(saga에서 유저 액션 호출 가능)

```javascript
function* addPost(action){
    try {
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data
            }
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        });
        ..
```

=> 사가는 여러 action을 dispatch해줄 수 있음
=> 어떤 action이 reducer의 데이터를 동시에 바꿔야한다고 하면,
=> action을 여러 번 호출해 주면 되는 것임.
=> Post reducer에서는 post reducer action으로 데이터 바꾸고
=> User reducer에서는 user reducer action으로 데이터 바꾸고

- 이제 reducers/post.js에서 업뎃
  => case ADD_POST_SUCCESS:
  => action.data가 id와 content가 들어있는 객체

```javascript
const dummyPost = (data) => ({
    id:data.id,
    content: data.content,
    ..

```

- reducers/user.js에서는 또
  => post에 하나 추가해야 함

```javascript
case ADD_POST_TO_ME:
    return {
        ...state,
        me: {
            ...state.me,
            Posts: [{id: action.data}, ...state.me.Posts],
        }
    };
```

=> 불변성 지키는 게 정말 정신 없음!

- 이제 delete구현
  => reducers/user.js에서

```javascript
case REMOVE_POST_OF_ME:
            return {
                ...state,

                 me: {
                    ...state.me,
                    Posts: state.me.Posts.filter((v) => v.id !== action.data),
                }
            }
}
```

=> reducers/post에서

```javascript
...
case REMOVE_POST_SUCCESS:
            return {
                ...state,
                mainPosts: state.,mainPosts.filter((v)=> v.id !== action.data),
                //제일 위에 보여주기 위해 앞에다 추가
                removePostLoading: false,
                removePostDone: true,
            };
...
```

=> 삭제는 보통 Filter로 Immutability지키면서 많이 함

=> sagas/post.js에서

```javascript
export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment)
```

=> 이외에 모든 코드들 더해줌
`function removePostAPI(data)`
`function* removePost(action)`
`function* watchRemovePost()`

ex.

```javascript
function removePostAPI() {
    return axios.delete('/api/post', data)
}

function* removePost(action) {
    try {
        //const result = yield call(addPostAPI, action.data)
        yield delay(1000)
        const id = shortId.generate();
        // post reducer조작
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: {


                id,
                content: action.data
            }
        });
        //user reducer조작
        yield put({
            type: REMOVE_POST_OF_ME,
            data: id,
        });
    } catch (err) {
        yield put({

            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        });
    }


function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST,removePost);
}
```

=> function\* removePost(action)에서, 액선 한 방에 둘 다 못 바꾸니
=> 액션 두 개로 두 개의 상태 모두 바꿔줌

- 이제 다시 PostCard.js
  `<Button type="danger"onClick ={onRemovePost}>Remove</Button> `

```javascript
const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const onRemovePost = useCallback(() => {
            dispatch({

                type: REMOVE_POST_REQUEST,
                data: post.id
            })
...
```

### immer도입

- 지금 reducers/post.js를 보면 정말 복잡하다!

```javascript
case ADD_POST_SUCCESS:
    return {
        ...state,
        mainPosts: [dummyPost(action.data),...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
    }
```

=> 이런 식으로 불변성을 지켜주려다보니 코드가 복잡해짐
=> immer 사용!!

- ex. npm i **immer**

=> 리덕스 뿐만 아니라
=> 리액트도 불변성 지켜줘야 함
=> useState/setState등으로
=> 이런 데도 쓸 수 있어서
=> immer는 필수템!
=> HOOK 버전을 원하면 use-immer가 있음
=> use-immer가 있으면 useState같은 것도 대체할 수 있음

- immer는 보통
  : **produce**라는 이름으로 많이 import한다

```javascript
import produce from "immer";

// state-> draft 대체
// immer가 알아서 불변성 관리함
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {});
};
```

- immer하려면 parameter reassign해야되기 때문에,
  eslintrc에서 "no-param-reassign":"off"

- immer로 코드 작성한 걸 보면, 오히려 불변성을 안 지켜야 한다
  ex. unshift

### faker로 실감나는 더미데이터 만들기

- 좀 멋들어진 더미 데이터 원할 때
- npm i install
- 예시
  : reduce/posts

```javascript
import faker from 'faker';

initialState.mainPosts = initialState.mainPosts.concat(
    Array(20).fill().map(() => ({
        id: shortId.generate(),
        Images: [{
            src: faker.image.imageUrl(),
        }],
        Comments: [{
            User: {
                id: shortId.generate(),
                nickname: faker.name.findName(),
            },

            content: faker.lorem.sentence(),
        }],
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },

        content: faker.lorem.paragraph,
    }
)

```

=> 여기선 20개만 했지만
=> 성능 최적화 보여주려면 수천개로 보여주는 게 좋으다.

- Placeholder.com도 유용한 사이트

- 로그인 안 하면 Profile 페이지 안 보이게,
  pages>profile.js

```javascript
useEffect(() => {
  if (!me && me.id) {
    Router.push("/");
  }
}, [me && me.id]);

if (!me) {
  return null;
}
```

- Redux Toolkit 따라가면 좋음
  ex. createReducer()쓰면 switch문 안 쓰고 쉽게 쓸 수도 있음

### 인피니트 스크롤링 도입

- 이제 dummy data를 빼주고 액션을 도입할 것

- generateDummyPost 부분을 함수로 빼주자~>무한스크롤 시에 조금씩 불러오는걸mimic

- LOAD_POST_REQUEST 액션 정의

- 그리고 index.js에서
  메인 페이지 불러올 때 useEffect로 바로 LOAD_POSTS_REQUEST디스패치할 수 있도록 한다

```javascript
const dispatch = useDispatch();
useEffect(() => {
  dispatch({
    type: LOAD_POSTS_REQUEST,
  });
}, []);
```

- actions들 추가
- LOAD_POST_SUCCESS에서는 상태 변화
  : draft.mainPosts = action.data.concat(draft.mainPosts);  
  draft.hasMorePost = draft.mainPosts.length < 50; //50개 이상은 안 가져오겠다

- initialStates에 hasMorePosts도 추가
  ~> 더 이상 불러올 것 없을 상황을 대비

- saga/post.js에도 코드 추가!
  : LOAD_POST관련...

*

```javascript
function* loadPost(action) {
    try {
        //const result = yield call(loadPostAPI, action.data)
        yield delay(1000)
        const id = shortId.generate();
        yield put({
            type: LOAD_POST_SUCCESS,
            data: generateDummyPost(10)
        });
```

- 인피니트 스크롤링

```javascript
useEffect(() => {
        function onScroll(){
            //많이 쓰는 세 가지
            // scrollY: 얼마나 내렸는 지
            // clientHeight: 화면 보이는 길이
            // scrollHeight: 총 길이
            // 따라서 끝까지 내렸을 때
            // scrollY + clientHeight=scrollHeight!!

            if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight){
                dispatch({
                    type: LOAD_POST_REQUEST,
                });
            }
        }
        window.addEventListener('scroll', onScroll);
        //useEffect에서 window함수 쓸 때 중요한 건
        //이렇게 해제해주는 것
        //메모리 누수 방지
        return() => {
            window.removeEventListener('scroll', onScroll);
        };
```

- 너무 요청 많이 들어가니

```javscript
yield throttle(5000, LOAD_POST_REQUEST, loadPost)
```

해줌
~> 하지만 이는 앞의 request를 취소하지 않은 채 5초만 지켜주기 때문에 비슷한 오류를 품고 있음

- 따라서
  loadPostLoading이 request때만 true이고,
  success나 failure때는 false로 바뀌는 것에 착안,
  && !loadPostLoading으로 한 단계 더 막을 씌워준다!

- - 모바일은 상대적으로 메모리가 적어서
    너무 많이 불러오면 메모리가 모자랄수 있음

=> react-virtualize 사용!!

- 백엔드와 연동 시작하면,
  LOAD_POST_REQUEST에서 DATA를 넣어줘야 함
  ~> EX. limit & offset
  => 하지만 이는 좋지 않다! 만약 게시글이 추가 / 삭제 된다면 limit과 offset이 꼬여 버리니

~> therefore, limit & lastId형식을 많이 씀
~> 예를 들어, 백엔드 에서

```javascript
const posts = await Post.findAll({
  //where: {id: lastId},
  limit: 10,
  order: [["createdAt", "DESC"]],
  include: [
    {
      //항상 완성된 데이터를 돌려줘야 함
      model: User,
      attributes: ["id", "nickname"],
    },
    {
      model: Image,
    },
    {
      model: Comment,
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    },
  ],
});

res.status(200).json(posts);
```

이런 식으로 하고

~> 프론트 에서는 원하는 포스트 갯수와
~> 화면에 보이는 lastPostId를 건네줌 됩니다!

### 팔로잉 & 팔로워

- antd Card component에 extra prop이 있음
- PostCard component

```javascript
<Card
    ...
    extra={<FollowButton post={post} />}>
    ...
```

- FollowButton Component 구현

- user reducer+ saga update

## Back-End with NodeJS

### 노드로 서버 구축하기

- 사실 이미 노드를 씀! ~> Next에서 노드로 돌렸기 때문에
- 이젠 직접 백엔드 서버를 만들기 위해 back 폴더 만들어 주자!

- prepare / back / app.js

```javascript
const http = require("http");
http.createServer(() => {});
http.listen(3065);
```

^ 요건 npm install 안해도 Node가 제공
~> 이 http가 서버 역할을 해준다

- back 폴더로 가서 npm init을 해줘서 package.json을 만들어주자

- 한 컴터 안에 F, B 모두 넣어줄 수도 있음
  ~> 하지만 이러면 scale할 때 F + B를 복사해줘야 하고,
  ~> 만약 F가 1000 요청 받을 떄 B은 10만 받는다면
  ~> unnecessary B자원이 또 복사되기 떄문에
  ~> 대규모 앱을 생각한다면 기능별로 나눠주는 게 좋음
  EX. 배달의 민족에서, 주문받는 서버는 회원가입 서버와 다르게 두는 게 효율적

- 작은 컴터 두 대가, 큰 컴터 하나보다 쌈!

```javascript
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write("<h1>Hello node</h1>");
  res.write("Hello node");
  res.write("Hello node");
  res.write("Hello node");
  res.write("Hello node");
  res.end("Hello node");
});
server.listen(3065, () => {
  console.log("server running on port3065");
});
```

- `node app.js`로 실행
- res.end는 마지막에 실행만 가능함!

- routing 하려면 다음과 같이 코드가 엄청 복잡해짐
  ~> 빌트-인으로 노드에서 제공하는 http보다 더 깔끔하게 코드짤 수 있는 express framework쓸 거임!

```javascript
const http = require('http');

const server=http.createServer((req, res)=>{
    console.log(req.url, req.method);
    if (req.method === 'GET'){
        if (req.url === "/api/post"){
            ...
        }
    }
    else if (req.method === "POST"){
        ...
    }
    res.write('<h1>Hello!</h1>');
    res.write('<header>Test!</header>');
    res.end('Hello node');
});
server.listen(3065, () => {
    console.log("Server Running on Port#3065...");
})
```

### 익스프레스 Routing
* `npm install express`
* 익스프레스도 내부적으론 http 쓴다
~> 때문에 서버를 돌릴 수 있음


```javascript

const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send("HI!!!");
})

app.listen(3065, ()=>{
    console.log("Server Running on Port#3065...");
})
```
* API는 보통 JSON으로 응답
```javascript


app.get ('/api/blahblah', (req, res) => {
    res.json([
        {id: 1, content: 'Hello'},
        {id: 1, content: 'Hello'},
        {id: 1, content: 'Hello'},
    ])

```

* 주로 쓰는 HTTP Requests
    * app.get ~> 가져옴
    * app.post ~> 생성함
    * app.put ~> 전체 수정
    * app.delete ~> 제거함
    * app.patch ~> 부분 수정
    * app.options ~> 찔러보기!
    * app.head ~> 헤더만 가져오기 - 별로안쓴다! (헤더/바디 둘 다 가져오는 게 typical, 하지만 app.head는 헤더만 가져온다!)
    
* 애매하면 POST로 보내는 걸로 타협 많이들 본다! REST를 제대로 지키는 회사는 거의 없음!

* SWAGGER Recommended!
* 추천

### 익스프레스 Routers Organization
* prepare / back / routes

* post.js
```javascript

const express = require('express')

const router =express.Router(); 

router.get('/', (req, res) => {
    ...
});

module.exports = router;
```

* app.js에서는
```javascript
app.use('/post', postRouter);
```
이렇게 해주면 됨

* NOTE. 프론트에서는 import express from 'express', export default router 이런 식으로 썼음
~> 노드는const express = require('express'), module.exports = router 이런 식으로 씀
~> 프론트에서 쓰는 방식도 사실은 webpack이 후자로 변환시켜 줌
~> 노드에서는 webpack 안 쓰기 때문에 아직 안 됨 - 나중에는 통일 될 수도 있을것
<br/>


### MySQL! 연동
* npm i sequelize sequelize-cli
* npm i mysql2 //node, mysql을 연결해주는  driver!

* sequelize는 javascript를 sql로 바꿔주는 library
* SQL에 자신 있으면 그냥
* mysql2만 사용해도 된다!

* npx sequelize init으로 세팅해준다!
  * config>config.json, migrations, models, seeders 생김!
  * config.json에 내 비밀번호 넣고, database는 react-nodebird로 바꿈!

* 데이터베이스는 보통 development / test / production으로 나눠서 한다!
  * typ. host = 127.0.0.1, port = 3306

* made a new user! nodebird identified by "chicken"!! 

* 기본으로 주어지는 models>index.js는 별로여서 제로초님은 변형해서 씀
```javascript
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // 기본 값 development 설정
const config = require('../config/config')[env]; // development에 해당하는 설정 가져옴
const db = {};

const sequelize= new Sequelize(config.database, config.username, config.password, config);
```

<br/>

### 시퀄라이즈 모델 만들기

* user먼저!
  * models>user.js!
  * module.exports = (sequelize, DataTypes) => {const User = sequelize.define('User', {//mysql에서는 자동으로 users로 테이블이 저장된다!  })}
  * 그리고 이제 하나 하나 적어주면 된다!
* post도 만들어준다!
  * charset: 'utf8', collate:'utf8_general_ci'는 한글저장 위함
  * charset: 'utf8mb4'는 이모티콘 위해서
* comment
* hashtag
* image

* 각각의 datatype은 sequelize.define내에서 해준다!
* password는 해시되므로 넉넉히 잡아줌
<br/>

### 시퀄라이즈 관계 설정하기!
* 관계 설정은 ###.associate = (db) => {} 에서 함!
* ex. db.User.hasMany(db.Post) // User와 Post의 1대 다 관계!
* ex. db.Post.belongsTo(db.User); //1대 1 관계! (.hasOne도 있음)

* ex. db.Hashtag.belongsToMany(db.Post, {through:'PostHashtag '});  //다대 다 관계!

* belongsTo가 있으면 해당하는 column (ex. PostId, UserId)를 자동으로 만들어서 관계를 관리한다!

* ex. db.Post.belongsToMany(db.User, {through: 'Like', as:'Likers'}) //db.User를Likers로 참조할 수가 있다!

* ex. db.User.belongsToMany(db.User, {through: 'Follow', as:'Followers', foreignKey: 'FollowingId'})//외래키로 컬럼키 바꿈

* 다대 다 관계에서는  자동적으로 중간 테이블이 생긴다!
<br/>

### 시퀄라이즈sync + nodemon
* index.js에서 불러온다
```javascript

db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
...

Object.keys(db).forEach(modelName=>{
  if (db[modelName].associate){
    db[modelName].associate(db);
  }
});//데이터베이스 돌면서 관계설정해줌!
```

* 백엔드 app.js에선 const db = require('./models');로 가져와줌
* + db.sequelize.sync()

* 그리구 react_nodebird 데이터베이스를 만들어주기 위해서는

```javascript
npx sequelize db:create
```

* 해주면 됨!!

* node app.js하면 mysql이 자동으로 실행되면서 - 우리가 넣은 코드로- 필요한 테이블들이 생성됨
  * 테이블 만들 땐
  * CREATE TABLE IF NOT EXISTS로 실행되기 때문에
  * 여러 번 실행되어도 중복 생성 안 된다고 안심할 수 있다!

* DataGrip - erd 만들기 위함!

* 서버 변경 시마다 새롭게 런치해주는  `npm i -D nodemon@2` 설치!
* package.json에 "scripts."dev":"nodemon app"




<br/>


### 회원가입 구현하기
* 이제 서버를 두 개 실행시켜야 함! - 프론트 1, 백 1
* 백엔드 app.js에 userRouter 또한 연동

```javascript
const userRouter = require('./routes/user');
app.use('/user', userRouter);
```

* routes > user.js
  
```javascript
const bcrypt = require('bcrypt');

const {User} =require('../models');

router.post('/',async (req,res, next)=>{ // POST /user/

  try {
    // 이메일 중복 체크!
    const exUser = await User.findOne({ //비동기니까 await 써줌
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 이메일입니다');
    }
    const hashedPassword = bcrypt.hash(req.body.password, 10);
    await User.create({
        email: req.body.email,
        nickname: req.body.nickname,
        password: hashedPassword
    })
    res.status(201).send('OK');
  } catch (error) {
    console.error(error);
    next(error); //한 방에 처리할 수있음 - status 500 (서버 쪽에서 난 에러)
  }

});
```

* index.js에서 db 안에 User를 담아서 module.exports를 해줬으니, require('../models');에서 구조분해해서 User에 접근할 수 있는 것이다
* async - await으로 테이블에 데이터 넣는 과정을 기다려 줌

* req.body 쓰기 위해서,  app.js에 app.use(express.json()) - json형식, app.use(express.urlencoded({extended: true}))- form submit 추가해줌!
  * [미들웨어]
* 비밀번호 암호화 위해 npm install bcyrpt 

* 보통 bcrypt hash값은 10 - 13 //1초 정도 걸리는 값으로 맞추면 좋다.

* 200 성공, 300 리다이렉트, 400 클라이언트 에러, 500 서버 에러

<br/>

### CORS 문제 해결하기
* 이제 서버를 두 개 띄워준다!
* CORS 문제 뜸: 브라우저 단에서 띄워주는 에러!
  * CORS 문제는 브라우저에서 서버로 리퀘스트 보낼 때만 생기고, 서버에서 서버로 보내면 안 뜸!

* 해결하는 방법 두 가지 - (1) proxy 서버 사용, (2) Access-Allow-Cross-Origin header 사용
  * 우리는 두 번째 방법을 사용함!
  * routes / user.js 에  `res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3060');` 넣어줌!
  * 혹은 **미들웨어**로 많이 처리한다
  * `npm i cors`
  * app.js에서 사용! 


* "classNames did not match" - SSR 과 CSR을 같이 활용하는 경우 컴포넌트 생성하는 순서에 따라 식별자가 달라져 스타일링이 잘 적용되지 않을 수 있음
* 이런 식별자 생성 과정을 정규화해주는 라이브러리 설치!
* `npm i --save-dev babel-plugin-styled-components`
* 최상단에 .babelrc파일도 넣어줌
  * 프론트 폴더 안에 넣어주니 해결!

<br/>

### 로그인 구현!
* back / routes / user => router.post('/login', ..)

* front에서도 backend와 연동해준다!

* 공통되는 url (이 경우 http://localhost:3065)는 index.js(redux-saga)에서 묶어줌!
```javascript
import axios from'axios';

axios.defaults.baseURL = "http://localhost:3065"
```

* 복잡한 로그인 과정을 잘 처리하는 라이브러리가 있다! passport
  * 그 중 보통 이메일 로그인은 passport-local이 처리 가능
  * `npm i passport passport-local`
  * 백엔드 쪽에!

* 백엔드 폴더에 passports / index.js 만듦!
  * 패스포트 설정 파일

```javascript
const passport = require('passport');
const local =  require('./local');

module.exports = () => {
    passport.serializeUser(() => {

    });
    passport.deserializeUser(() => {

    });

    local();
}
```

  * local.js에서는 local strategy설정을 해준다

```javascript
// local login strategies
const passport = require('passport');
const { Strategy: LocalStrategy} = require('passport-local');

module.exports = () => {
    passport.use(new LocalStrategy({
      passport.use(new LocalStrategy({
        usernameField: "email",//data got from the form submit

        passwordField: "password",
    }));
}
```

  * app.js를 중앙통제소로 생각하면 된다!

```javascript
const passportConfig=require('./passports/index');

passportConfig();
```

* 코드 확인!

* 미들웨어 확장, middleware 확장, passport.authenticate, server or client error

<br/>

### 쿠키, 세션과 전체 흐름
* login form ~> saga/users에서 데이터 받아서 리퀘스트 보내줌 ~> routes/user에 router.post('login'...)에서 req.body에 들어가서 passport.authenticate거침 ~> 그 단계에서 passports/local.js에서 로컬 전략 거침 ~> 여기서 성공하면 rerturn done(null, user)로 넘어감 ~> 다시 routes/user에서 콜백에 가서 다른 에러들 없으면 passport login을 시도 ~> 다른 문제 없으면 프론트로 return res.status(200).json (user); 응답해줌

* 패스포트가 로그인 해줄 때 세션이 쓰이기 때문에 back/app.js에서 npm i express-session 해주고

```javascript

app.use(cookieParser());

app.use(session());
app.use(passport.initialize());
app.use(passport.session());
```
해줘야 함!!
* cookie-parser도 설치함

* 서버 쪽에 통째로 들고 있는 게 세션, 클라이언트 쪽에 보내주는 랜덤 (해킹 불가)한 것이 쿠키

* 하지만 서버 쪽에 (아이디, 비밀번호, 닉네임, 게시물, 댓글, ..) 모두 저장하면 서버에 너무 과부하가 심할 것이다!
  * 서버엔 id만 저장하고, 쿠키도 id에 해당하는 값만 보내준다 ~> 나머지 정보는 데이터베이스와 소통하며 얻어냄!

* req.login했을 때 동시에 실행되는 게 passports/index.js의 serializeUser

* index.js에다가

```javascript
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: 'nodebirdsecret'
}));
```


* 하지만 이렇게 password와 sercret key를 소스 코드에 넣으면 안전 x
  * => `npm install dotenv`
  
```javascript
COOKIE_SECRET=...

DB_PASSWORD=...
```

* 그리구 process.env.COOKIE_SECRET이런 식으로 고쳐줌

* app.js에선
```javscript
const dotenv = require('dotenv');

dotenv.config();
```
* config/config.json도 config.js로 바꿔서 dotenv사용할 수 있도록 하자

* 로그인 흐름: 로그인 폼 ~> routes>user ~> 전략 통해서 실행 ~> 오류 없으면 return done(null, user)~> 패스포트 로그인 ~> passport.serializeUser ~> connect.sid쿠키 보내짐 ~>한 번 로그인 성공한 후에는, deserializer에서 유저 정보 복구

* 로그아웃은 req.logout(), req.session.destroy(), res.send('ok')
<br/>

### 로그인 문제 해결
* 에러 뜨는 이유 - me.Posts 등이 없어서!
* routes > user.js에서 User를 고쳐줌! (관계 설정 include: model: 통해서! 해주고 password는 exclude해준다)

* 이제 me에 정보가 제대로 뜨는 걸 볼 수 있다!

* 새로고침 했을 때 정보 날라가는 것은 SSR 통해서 해결할 수 있다

* Router.push는 뒤로가기 했을 때 그 전 페이지가 나옴. 이거 원하지 않으면 Router.replace쓰기

* 소셜 로그인은 passport-### 설치하고 각 사이트 developers page에서 앱을 만들면 됨

* 자동 로그인은 정책이 다들 다름
   
* OAuth부분은 passport-google-oauth20읽기 추천 하심!
<br/>

### 미들웨어로 라우터 검사하기
* 로그인 안 한사람이 로그아웃하고 그런 거 막기 위해 미들웨어 사용!
* routes > middlewares.js
* 미들웨어 ~> next() 안에 뭐라도 넣으면 error 처리하러 가고, 안에 안 넣으면 다음 미들웨어로 감

* 에러처리 미들웨어는 보통 app.use와 app.listen 사이에 자동으로 구현됨. 만약 에러 페이지를 따로 띄워주고 싶다던가 하는 방식으로 고쳐주고 싶으면 app.use((err, req, res, next)=>{});이런 코드로 customizing 가능.
<br/>

### 게시글, 댓글 작성하기
* 이젠 더미 말고 실제 작성 포스트 올려주기!
  * 백엔드 - post router
  * 프론트엔드 - post saga

<br/>

### credentials로 쿠키 공유하기
* app.use(cors({
    origin: '*', // fix it when in production
    credentials: true//로 해줘야 쿠키도 공유됨!
}));
* 프론트에서도 addPost, addComment 등에 withCredentials: true해줘야 함
* 이 부분은 중복되니까 index.js - saga에서 axios.defaults.withCrendentials = true;하면 쉬움

* 다만 이제 cookie같은 민감한 정보를 withCredentials:true를 통해서 보내니까 origin은 '*'가 되면 안 됨. 좀 더 구체적으로 적어줘야 한다.

* 게시글 등록하면 에러남. images가 없기 때문. fullPost에 include: model:해줘서 해결

<br/>

### 내 로그인 정보 매번 불러오기
* 로그인 새로고침할 때마다 풀림 ~> 쿠키는 가지고 있는데 새로고침할 때 서버로 전달이 안 돼서 로그인이 풀린 것처럼 보인다
* useEffect ~> LOAD_MY_INFO_REQUEST넣어서 새로고침할 때마다 불러올 수 있게 하자 (with populated models)! 서버사이드렌더링하면 깜빡이는 현상 없앨 수 있음. 서버에서 렌더링 해서 보내주기 때문에!

<br/>

### 게시글 불러오기!
* 무한스크롤 - posts Router 만들자!
1. 리밋 & 오프셋 ~> 데이터베이스에서 제공하는 기능
  * 하지만 이거는 중간에 새로운 게시글이 추가되거나 기존 게시글이 삭제되면 순서가 이상해짐
  * 그리고 앞에서부터 탐색하기 때문에 시간이 오래걸림

2. 리밋 & 라스트아이디
  * 또한 정보를 가져올 땐 항상 완성해서 가져와야 됨 ~> include로 처리!




* 백엔드에 `npm i morgan` ~> 프론트에서 백에 요청 보낼 때 어떤 요청이 보내지는 지 콘솔에 뜬다!
  * `const morgan = require("morgan"); app.use(morgan("dev"));`


* 코멘트 인클루드해서 다 가져와준다!

<br/>

### 게시글 좋아요
* onLike, onUnlike ~> PostCard.js

* 액션도 만들어 줌!
* like는 PATCH, unlike는 DELETE로 구현해주자!
* Router에서 구현!

* NOTE. 관계 설정을 해주면 추가 메서드가 생긴다!
  * ex. db.Post.belongsTo(db.Post, {as: 'Retweet'}); //post.addRetweet
  * ex. db.Post.hasMany(db.Image); //post.addImages , post.removeImages
  * ex. db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });//post.addLikers, post.removeLikers

* add, get, set, remove 생김! 활용 잘 가능

<br/>

### 게시글 제거 / 닉네임 변경
* 백엔드 라우터 

* 보안은 수정 및 삭제 때 더욱 철저히 해야된다!
  * 조건 강화!

<br/>

### 팔로우,언팔로우
* 이둘 또한 패치 / 딜리트로 구현해주자!
* 팔로우 및 팔로잉 목록은? GET으로 구현해주자!
  * 라우터
  * profile페이지
  * FollowList컴포넌트
```javascript
  const onCancel = (id) => () => { //useful in loop
    dispatch({
      type: UNFOLLOW_REQUEST,
      data:id,
    });
  };
  ```
* 팔로잉 차단 기능도 만들어줌

<br/>

### 이미지 업로드를 위한 multer
* 이미지 올리면 enctype은 "multipart/form-data"형식으로 올라감!
  * 이 형식 처리하려면 multer library 설치해주자!
