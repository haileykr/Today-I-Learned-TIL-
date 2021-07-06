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

* router.post("/images",...)

* multer는 앱에다 적용해줄 수도 있지만, 각 router마다 이미지를 처리하는 방식이 다르기 때문에, router마다 새롭게 설정을 만들어 적용해주는 것이 편하다!

```javascript
const upload = multer({
  storage: multer.diskStorage({ //on disk for now
    destination(req, file, done) {
      done(null, 'uploads'); //"uploads"folder
    },
    filename(req, file, done){ // 제로초.png
      const ext = path.extname(file.originalname); //확장자 추출 (png)
      const basename = path.basename(file.originalname, ext); //제로초

      done(null, basename + new Date().getTime() + ext); //제로초1518471289.png
    }
  }),
  limits: {fileSize: 20 * 1024* 1024} // 20MB
});
```

* 일단은 "uploads"라는 폴더에 [하드디스크] 저장. 나중엔 AWS S3같은 곳에 저장.
  * 요청을 많이 받으면 server scaling을 해줘야하는데, 하드디스크에 파일이 저장되어 있다면 이들도 같이 복사된다. 메모리의 낭비됨!
* filename은 같으면 node.js는 기본적으로 덮어씌움.
  * filename에 날짜를 덧붙여주자!
  * path는 노드에서 제공

* 동영상 같은 건 서버를 거치는 것만으로도 부담을 주기 때문에, 클라이언트에서 바로 클라우드로 올리고 그런 방식을 도입해봐야 한다!
1. 한 번에 이미지 + 내용 보내기
  * 백엔드 설계에선 편하다
  * 하지만 프론트에서 이미지 사용이 불편 (ex. 미리보기 등)
2. 두 번에 (1) 이미지 보내고 (2) 파일 이름 받고 (3) 그거 바탕으로 미리보기 / 리사이징 등 하고 (4) 내용과 함께 백엔드로 다시 보냄
  * 게시글 작성 안 하거나 하면 이미지만 남게 됨
  * 이를 굳이 지워줄 수도 있겠지만
  * 이미지도 다 자산이기 때문에 (ex. 머신러닝) 보통 안 지움!

* PostForm
```javascript
const onChangeImages = useCallback((e) => {
        // 파일이 어떻게 저장되는 지 확인!
        console.log("images", e.target.files);
        const imageFormData = new FormData(); // with FormData you can send images as "multipart" 

        [].forEach.call(e.files.target,(f) => {
            imageFormData.append('image', f); //"image" == the "name" of the input
        });
        dispatch({

            type:UPLOAD_IMAGES_REQUEST,
            data: iamgeFormData            
        })
    })
```
* 리듀서에도 추가

* fs 조작해서 디렉토리도 만들어주자!
```javascript

const fs = require("fs");

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다.");
  fs.mkdirSync("uploads");

}
```

<br/>


### express.static 미들웨어
* 파일 경로를 잘 고쳐줄 수 있음
  * path.join은 운영체제에 따라 다른 디렉토리 표기법 통일해줌!

```javascript
app.use("/", express.static(path.join(__dirname,"uploads")));
```

* 이미지 미리보기
* 이미지 제거
  * 동기 액션!
  * 백엔드에서도 지우고 싶으면 비동기 액션들 만들면 됨!

* 이제 포스트 업로드할 때 content text와 imagePaths까지 보내줌!
  * imagepaths는 string이어서 그냥 json으로 보내도 되긴 한다!
  * 하지만 multer의 upload.none()써보기 위해 formData에 붙여서 보내줄 것
  * axios에서 보낼 때, formData는 반드시 {content : data} 이런 식으로 쓰면 안되고,  data 이런 식으로 보내줘야 한다

* multer는 images나 files이면 req.file, req.files 이런 식으로 되지만 나머진 req.body.content, req.body.image(imagepath)이런 식으로 된다

* PostForm Component

```javascript
router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  // POST /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (req.body.image) {
      if (Array.isArray(req.body.image)){ // if multiple images are uploaded : [a.png, b.png] array is sent
       const images = await Promise.all(req.body.image.map((image) =>Image.create({src: image})));//sequelize create
       // inside the parentheses, each one is a Promise
       // images are saved in the server, and only the filenames are saved in the database
       await post.addImages(images);
      } else {//if a single image is uploaded: a.png string is sent
        const image =await Image.create({src: image});
        await post.addImages(image);
      
      }
    }
```

* 이미지는 보통 데이터베이스에 저장하지 않는다
  * 부담이 너무 크고, cdn등을 통한 캐싱도 불가하기 때문
  * thus the database usually only has image paths

<br/>

### 해시태그 등록하기
* routes > post.js
```javascript
  const hashtags = req.body.content.match(/#[^\s#]+/g);
  if (hashtags){
    const result = await Promise.all(hashtags.map(tag => Hashtag.findOrCreate({
      where:{name:tag.slice(1).toLowerCase()}
    }))); 
    //"#" 떼주기 위해서 tag.slice(1)한다!

    //findOrCreate ~> [[노드, true], [리액트,true]] this format is used!! so 
    await post.addHashtags(result.map((v) =>v[0]))
  }

```
* findOrCreate는 일단 찾아보고 이미 있지 않음 그 때 생성함!

<br/>

### 리트윗!
* onRetweet function 만들어주기!
* 더블체크하자! ~> 서버에서 꼭 해줘야하지만 프론트에서도 ex. 로그인 안 하면 return alert 이런 거 넣어주기!

* retweet때 체크할 것 여러 개
```javascript

router.post('/:postId/retweet', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {id: req.params.postId},
      include : [{
        model: Post,
        as: 'Retweet' //post.Retweet Available!
      }]
    });
    if (!post){
      return res.status(403).send('The post does not exist.');
    }
    if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)){
    
      return res.status(403).send('You cannot retweet your own post.');
    }
    const retweetTargetId = post.RetweetId || post.id; //if the post we're retweeting retweeted another post, refer to the original post id!
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      }
    });
    if (exPost){
      return res.status(403).send('You already retweeted this post.');
    }
    const retweet=await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: 'retweet',
    });
    const retweetWithPrevPost = await Post.findOne({
      where: {id: retweet.id},
      inclde: [{
        model: Post,
        as: 'Retweet'
      }, {
        model: User,
        attributes: ['id','nickname']
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id','nickname']
        }]
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id']
      }]
    })
  } catch(error){
    console.error(error);
    next(error);
  }
});
```
~> 지금 정도면 괜찮지만
~> 이렇게 불러올 때 include가 길어지면 데이터베이스에서 정보를 불러오는 속도가 너무 느려질 수 있음
~> 앱 크기가 커지면 쪼개는 것 고려 ex. retweeted post 먼저 불러오고, 댓글은 댓글 아이콘 누르면 따로 action써서 불러오고 등등

<br/>

### 쿼리스트링과 lastID방식
* GET은 데이터를 보내줄 때 쿼리 스트링 방식으로 됨
* 데이터 캐싱이 url을 통해서 가능!
* EX.  return axios.get(`/posts?lastId=${lastId}`);
<br/>

# Next.js 서버사이드렌더링

### 서버사이드렌더링 준비
* CSR로는 형식만 먼저 브라우저 <-> 프론트 서버 로 불러오고
  * 데이터는 브라우저 <-> 프론트 <-> 백 이렇게 두 번 만에 불러옴
* SSR 사용함 처음부터 브라우저 <-> 프론트 <-> 백이 되어서 데이터 불러오기 전 깜빡거린다든지 등의 이질적 느낌이 덜 듬


* 버전 9에서는 withReduxSaga 필요x 

* "next-redux-wrapper"로 만든 wrapper를 사용해 우리 app.js를 감싸고 있음
  * 이를 이용해 개별 페이지에 SSR를 적용할 것
* 원래는 next.js에서 SSR용 메소드  4가지 제공
  * 하지만 리덕스와 같이 쓰면 문제가 좀 있기때문에
  * "next-redux-wrapper"를  쓸 것

* useEffect ~> 컴포넌트 마운트 이후 실행됨
  * 컴포넌트 마운트 되기 전에 액션이 실행되면 데이터 채워진 상태로 화면이 그려질 것
  * next 8버전 ~> Home.getInitialProps
    * 이건 곧 deprecated될 것!!


* Store> configStore에서 정의했던 wrapper를 두고 두고 씀!
  * export const getServerSideProps ...
  * "export const"라고 쓰여있는 부분은 서버가 미리 실행함 (export default Home보다 먼저)
  * 이 안에 원하는 useEffect액션을
  * 넣으면 SSR이 된다!!
  * 여기서 실행된 부분이 store에 들어감

* "@@INIT"에선 초기 상태 그대로 있음
* "getServerSideProp"실행 후 그 안에서 실행된 부분을 "case HYDRATE"으로 보냄

  * reducers > index.js에서 구조 설정함!!

* 리퀘스트 보내고 Success될 때까지 기다린 상황을 전달받기를 원함
  * pages>index.js
  * import {END} from "redux-saga";
  * context.store.dispatch(END); await context.store.sagaTask.toPromise(); //sagaTask는 configStore 안에 정의 
  * 이제 "@@INIT"안에서는 데이터가 안 차있는데, 그 밑에 액션에선 차 있는 걸 볼 수 있다!

<br/>

### SSR시 쿠키보내기!
* 지금은 로그인 정보가 안 뜬다!
  * CSR할 때는 브라우저 -> 프론트 -> 백 에서 쿠키가 axios를 통해 자동으로 전달되었음
  * SSR할 때는 주체가 브라우저가 아니라 프론트! 프론트 -> 백 (getServerSideProps 는 프론트 쪽에서 실행) (브라우저는 개입 안 함)
  * 여기서 withCredentials설정 했던 것이 적용 안 되는 것임

* routes > user.js에서 console.log(req.headers)해서 쿠키가 헤더에 전달되는 지 확인해보자!
  * 쿠키 미포함

  * getServerSideProps안에
    * const cookie = context.req ? context.req.headers.cookie : '';
    * axios.defaults.headers.Cookie=cookie;
    * 이제 로그인 부분도 SSR이 된다! Cookie안에 connect.sid가 있기 때문에 정보 저장

* 다만! 위와 같이 하면 서버 쪽에서 로그인이 처리되기 때문에 로그인이 다른사용자들과 공유되는 상황이 발생!
  * if(context.req && cookie) { ... } 부분 넣어줌!

<br/>

### getStaticProps 사용!
* getServerSideProps 말고 다른 기능!
* pages > about.js
* 남의 정보 가져오는 거니까 route에서 중요 정보 빼고 돌려줌

* getStaticProps ~> 언제 접속해도 데이터가 바뀔 일 x (ex. 블로그 게시글 ~> 웬만하면 안 바뀜, 웹사이트 이벤트 페이지)
  * 아예 정적인 HTML로 뽑아 줌
* getServerSideProps ~> 접속할 때마다 데이터가 변할 수 있다면 (웬만한 경우엔 다 이거 쓰게 됨)
  * EX. load_user_request할 때 user 아이디가 항상 다르다면 getStaticProps쓰는 게 별로일 것 ~> HTML로 미리 빌드한 의미가 없어지기 때문

<br/>

### 다이나믹 라우팅
* 예를 들어 포스트를 공유하고 싶다 하면 ~> post/1.js, post/2.js, ...를 다 만들어야 할 것
* 이를 다이나믹하게 만들어줄 수 있음
  * post > [id].js

* favicon ~> front > public > favicon.ico

* SSR되면 검색엔진에도 내용이 차 있는 상태로 전해지게 된다!

<br/>

### CSS 서버사이드렌더링
* .babelrc

```javascript
{
    "presets": ["next/babel"],
    "plugins": [
        ["babel-plugin-styled-components", {
          "ssr": true, 
          "displayName": true}] //개발모드 때 외계어같이 보이는 className이 알아보기 쉽게 보인다
      ]
}
```

* pages > _app.js 위에 있는 것이 바로 _document.js!
* 이걸 hooks로 바꿀 수 있는 방법은 아직 찾지 못해 class형으로 진행!

* getInitialProps ~> 아직 _app.js와 _document.js에선 씀. 다른 페이지들에선 안 씀
  * 특수한 SSR 메소드
  * 하라는 대로 따라 치면 됨 (documentation참조)

* 라이브러리/객체 최신 버전 호환시켜주는 (babel이 못하는 - 최신 문법이 아니니) Polyfill.io 스크립트  <NextScript /> 위에 올려놔준다!
  * IE에서도 작동됨

* _document.js는 거의 안 쓰이고, SSR과 같은 특수 상황에서만 쓰임!

<br/>

### 사용 게시글, 해시태그 게시글
* 다이나믹 라우팅 여러 개 만들 수 있음

* pages > user > [id].js

* pages > hashtag>[id].js

* 액션 리듀서 상태는 한 페이지에 액션이 같이 있지 않는 이상 공유될 수 있다! ~> 이에 맞게 재사용

* URL에 한글 있으면 에러날 수 있음 ~> encodeURIComponent(data)감싸줌
  * 백 쪽에선 decodeURIComponent해줌!

<br/>

### getStaticPaths
* 다이나믹 라우팅일 때 getServerSideProps말고 getStaticProps써도 된다
  * 그리고 그걸 쓰기 위해선 무조건 export async function  getStaticPaths(){ return { paths: [], fallback: false}}넣어줘야 함
  * pages > post > [id].js!

```javascript
export async function getStaticPaths(){
  return {
    paths: [ 
      { params: {id: '1'}},
      {params:{id: '2'}},
      {params: {id: '3'}}, //pages for these are built on server as HTML beforehand
      //used with export const getStaticProps (if used) below
    ],
   fallback: true //this way, pages with id >= 4 do not result in error
  }
}

export const getStaticProps = ..
```

* fallback일어날 때 CSR을 기다려 주도록
```javascript
  if (router.isFallback) {
    return <div>Loading..</div>
  }//used with getStaticPaths & getStaticProps

```
* 이와 같이 추가!

* html로 미리 만들만한 것들에 적용해야 함
  * 따라서 사용 까다로움
  * 하지만 사용할 수 있다면 로딩 속도가 빨라지는 장점이 있음

<br/>

### swr 사용해보기
* "SWR" is derived from "stale-while-revalidate", a HTTP cache  invalidation strategy popularized by HTTP RFC 5861. React Hooks library for data fetching.
  * GET 요청 좀 더 간편히 할 수 있다
  * next에서 만듦
  * SSR도 된다!(SSR하는 코드에서 return { props: {data: 123} }로 돌려주면 해당 페이지에 props로 전해지고, 이것을 fetcher 다음에, initialData로 세번째 파라미터로 넣음 됨! )

*  `npm install swr`
*  pages>profile.js
```javascript

import useSWR from "swr";

const fetcher = (url) => axios.get(url, {withCredentials: true}); //어떻게 정보를 fetch할 지 설정.

//fetcher를 다르게 설정하면 graphql도 사용 가능

const {data, error } = useSWR('http://localhost:3065/user/followers', fetcher).then(result => result.data);
// data, error 둘 다 비어있음 아직 로딩중이란 것
```

* router.get("/:userId", ...)에서 "/followings"가 걸릴 수 있다!
  * 와일드카드 들어간 주소는 항상 밑에 두는 것이 좋음!

* 더보기 누르면 limit수를 늘려 한 번에 3, 6, 9씩 볼 수 있게 해준다

* SWR로 하면 간편! fetcher는 따로 util로 빼놔 필요할 때마다 import해도 좋다.

  * 굳이 SSR 필요 없다면 추천! (액션 따로 없어도 됨)

<br/>

### 해시태그 검색하기
* Applayout

<br/>

### moment와 next 빌드하기
* 날짜 library
  : moment ~ 70KB
  : date-fns (불변성 지키기 좋음)
  : luxon
  : dayjs ~ 2KB (데이터 용량 효율적임)
* npm install moment

* PostCard.js
  * import moment from "moment";
  * moment.locale("ko"); //한글로 변환


* moment 여러 기능이 매우 편함!

* 배포할 때 moment가 문제를 많이 일으켜서 일부러 설치해 본 것!!
  * 그 전에 빌드를 해야 함
  * 빌드하면 HTML, CSS, JAVASCRIPT요롷게 결과물이 나옴
  * 이 결과물들을 웹 서버에 올려두면 유저들의 브라우저로 전달되는 것!!
  * 개발 서버는 너무 느리기 때문에 빌드과정을 거쳐 실제 필요한 것들만 남겨 둔다!

* 빌드해보기!! 두구두구
  * `next build`
  
* NOTE!! **cicd** tool on GitHub
  ~> tells you when there would be errors during the build of codes you pushed 
* EX. JENKINS, CIRCLE CI, TRAVIS CI

* 각 페이지 별로 1MB가 안 넘으면 한국에서 서비스할 만 함!
  * 넘으면 code-splitting이나 next/lazy, suspense사용

* 람다 - SSR 적용 [getServerSideProps]
* 검은 똥그라미 - SSR 적용 [getStaticProps]
* 하얀 똥그라미 - 처음부터 정적인 HTML페이지

* Next.js에서 에러 페이지 추가할 수 있음

* 참고 ~> 에러 내용을 사용자에게 안 보여주는 게 좋다! 되도록이면 "잠시 후에 시도해보세요" 등의 모호한 메시지를 보여주는 게 좋음!!

* 용량 큰 걸 분석해보고 싶은데?
  * `npm i @next/bundle-analyzer`
<br/>

### 커스텀 웹팩 & bundle-analyzer
* front > next.config.js

```javascript
// require("dotenv").config(); //then we can manipulate env settings
// or you can run script like "scripts" : "build" : "ANALYZE=true NODE_ENV=production next build" ~> settings for each run! 
// but!! this doesn't run on windows
// thus install cross-env

const withBundleAnalyzer = require("@next/bundle-analyzer") ({
    enabled: process.env.ANALYZE=== "true",
});

module.exports = withBundleAnalyzer({
    compress: true,

    webpack(config, {webpack}){
        const prod = process.env.NODE_ENV ==='production';
        const plugins = [...config.plugins]; 

        // if (prod) {
        //     plugins.push(new CompressPlugin()); //from compression-webpack-plugin: is now built-in!
        // }//creates gzip files
        
        return {
            ...config,
            mode: prod ? 'production':'development',
            devtool: prod ? 'hidden-source-map': 'eval', //가려줌
            plugins,
            // module: {//if wanna change modules!
            //     ...config.module,
            //     rules : [
            //         ...config.module.rules,
            //         {

            //         }
            //     ],
            // }
        };
    }
});
```

* 설정 위해 npm i cross-env
* "scripts": "build" : "cross-env ANALYZE=true NODE_ENV=production next build "
* 돌려봄 프론트 / 서버 용량 도식적으로 볼 수 있음
  * concatenate된 건 어쩔 수 없음
  * 덩어리로 큰 것들을 줄일 방법을 생각
  * moment.locale 용량이 매우 큰 걸 볼 수 있다! regex로 줄여주자

* tree-shaking

* 기능 구현을 다 하고! 앱 완성 후에 이렇게 줄여나가는 과정 bundle-analyzer로 함
  * (배포 직전)

<br/>

### 배포 전 질문 및 답변
* Model 최신문법 사용
* 클래스와 스태틱 사용!!
  * models > comment.js
  * sequelize.define --> Model.init
  * 이렇게 바꿔주면 됨

* 나중에 TypeScript쓸 때도 이 방법이 더욱 더 도움이 됨.

* immer 도입 이후로 IE에서 작동이 안 된다!
  * IE11 정도는 아직 지원해 줘야 함
  * front > util > produce.js
  * produce function 새로 만듦!
  * enableES5를 immer에서 import!
  * 원래는 이걸 entry point (프론트 최상단 ~> react-dom, render) 에 놓으면 되는데
  * next는 그게 없어서 따로 작업해 줌

* import  produce from "../util/produce";를 reducer의 각각 위에다가 넣기!

* build할 때는 항상 back-end server 켜놓기!
* SSR되고 있는 지 확인하는 방법?
  * 크롬에서 disable JavaScript하고 새로고침 해보자!
  * CSS까지 적용돼서 나옴
<br/>

# AWS에 배포!

### EC2 생성하기
* "scripts" : "start": "cross-env NODE_ENV=production next start -p 3060"

* 리마인더! server라는 건 '컴퓨터'.
* 내 컴퓨터 써도 되고 남의 컴퓨터 써도 된다
* 하지만 내 컴퓨터는 항상 가동해야 돼서 전력 문제, 메모리 문제 등 생길 수 있을것!
* AWS는 99.98%의 가동률을 보여준다!

* 계정 새로 만들기 ~> 회원가입
* 매니지먼트 화면
  * console.aws.amazon.com/
  * 지역 ~> 서울로 변경!


* 프론트 
* 백엔드 //두 개 가동!

* EC2 ~> 인스턴스 생성!
  * Ubuntu 프리 티어니 선택
  * 실무에선 monitoring 선택 (but 요금 발생)
  * 보안 그룹 구성 ~> HTTP(Port#80), HTTPS(Port#443)추가로선택!
  * HTTP, HTTPS는 모두 접근가능하게 해놓고, SSH만 내 IP로 지정한다는 식으로 보안을 강화하는 걸 고려해보자
  * 키페어 ~> 새 키 페어 생성!
    * react_nodebird
    * 다운로드! 잘 갖고 있자

* 이렇게 EC2 두 개 만듦 ~> front+back
* 실습할 때만 쓸거면 인스턴스 ~> 중지 / 종료 해서 돈 안 나가게 하자!

* EC2에 올리는 방법은 여러 가지
  * AWS에서 제공하는 툴 통해 FTP로 보낼 수도 있고
  * GitHub에 Repository를 끌고 올 수도 있고
    * AWS에서 "인스턴스에 연결"
    * prepare 
    * 폴더에서 ssh경로 복사해 붙여넣기
    * ubuntu로 쉘이 바뀌면 (AWS의 컴퓨터임!)
    * git clone https://github.com/해당주소
    * front 폴더로 가줌
<br/>

### 우분투에 노드 설치
* sudo apt-get update
* suto apt-get install -y build-essential
* sudo apt-get install curl
* curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash --
* sudo apt-get install -y nodejs

* node -v
* npm -v
* 설치 잘됐나 확인!

* 프론트 폴더에서 npm i 



* 백 서버도 똑같이 해주자!

* 배포 서버이기 때문에 dev가 아니라 build를 하고 start를 할 거임!
  * 프론트 시도

* 빌리고 있는 컴퓨터 메모리가 너무 작으면 에러날 수 있음
  * 그러면 메모리 더 큰 옵션을 선택하는 수밖엔 없음

* 흐름! 깃허브에 push ~> 원격에서 git pull origin master~> npm install ~> npm run build~> npm run start
* 이런 귀찮은 것을 자동으로 해주는 게 cicd tools!

* note. server scaling하려면 새로운 컴퓨터마다 노드 깔고 그런 과정이 또 지루할 거다!
  * Docker가 해결!
  * 서버 한 대 띄우면서 명령어 쫙 적어놓음 docker가 실행되면 그 명령어들도 순서대로 다 실행되면서 기존 서버와 똑같은 서버 만들어 냄
<br/>

### 우분투에 MySQL설치
* 원래는 데이터베이스 서버 따로 두는 게 좋다
* 하지만 그럼 유료로 전환될 수 있으니 그냥 백엔드 서버에 포함해서 배포해봄!

* sudo apt-get install -y mysql-server
  * now version 8 is installed!
  * 밑에 꺼 할 필요x
* wget -c https://repo.mysql.com//mysql-apt-config_0.8.13-1_all.deb 
* sudo dpkg -i mysql-apt-config_0.8.13-1_all.deb

* sudo su해서 root계정으로 전환
* mysql_secure_installation

* mysql -u root -p
* exit;

* back > package.json에 "scripts":"start":"node app"추가

* 하지만 mysql 연결 안 될 것 ~> dotenv파일이 gitignore돼서 안 올라가기 때문

* vim .env로 새로 만들어주자 (원격 백에서)
  * "a" 혹은 "i" 누르면 insert 모드
  * dotenv 안의 내용 그대로 넣자
  * esc 한 번 누르고~> 명령모드로 전환!! 
  * :wq (저장 + 나감)

* ls -a 쳐보면
  * .env확인할 수 있다!
  * cat .env로 쳌!

* 다시 npm start

* 안되면 sudo su해서 mysql -u root -p해서 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '해당 비밀번호'

* npx sequelize db:create

* 지금은 포트가 3065로 설정되어 접근x
  * EC2인스턴스 생성 시 80과 443만 열어놨기 떄문!

* vim app.js해서 포트 넘버 바꿔줌!

* EACCES에러
  * Linux system에선 포트 넘버 1024 밑은 root access 필요
  * sudo su해서 실행하면 된다!


* 이제
* AWS EC2 IPv4주소로 들어가면 Express연결된 것 볼 수 있다!
<br/>

### pm2 사용하기
* 백엔드 서버를 exit; 해서 내 컴퓨터로 돌아오면 서버가 더 이상 작동 x
* 노드가 foreground process ~ 터미널 끄면 같이 꺼짐 여서 생기는 문제
* vs. background process ~ 터미널 꺼도 안 꺼짐
* 이 문제 해결하기 위해 pm2 설치할 것임!

* npm install pm2
* package.json에서 "scripts":"start":"pm2  start  app.js"
* sudo npm start (root계정으로 넘어가지 않았음)

* 에러나는 경우엔 npx pm2 monit
* 여기 아무 에러도 안 뜨면 실행도 안 되었다는 것 (IP Address 찾아갔을 때 안 뜬단 전제하에)
* 끄는 방법 ~ npx pm2 kill 
* 로그 보려면
  * npx pm2 logs (--error)

* 리스트 보려면
  * npx pm2 list

* 서버들 리로드 하려면
  * npx pm2 reload all

* AWS는 탄력적IP하면 IP가 고정되지만 아니면 계속 변함
  * 탄력적IP 해서 IP고정시키면 대신 돈이 나감
  * IP변하면 SSH 연결 Link 바뀔 수 있음!

* back > app.js부분을 좀 더 개발 모드에 맞게 설정해주자!
  * morgan("combined") 쓰면 더 자세히 사용자 로그 같은 것도 볼 수 있음 ~> 해킹 시도 유저 등 찾기 용이!
  * app.use(hpp());
  * app.use(helmet()); 꼭 넣어주기! 보안에 도움되는 패키지
  * 내 컴퓨터로 가서 npm i pm2 cross-env helmet hpp

* 노드에서 프로덕션 서버 만들 땐 helmet, hpp는 필수라 생각하면 된다!

```javascript

if (process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'));
    app.use(hpp());
    app.use(helmet());
} else {
    app.use(morgan('dev'));
}

app.use(cors({
    origin:['http://localhost:3000', 'nodebird.com'],
    credentials: true
}));

```

* package.json에선
```javascript
      "start":"cross-env NODE_ENV=proudction pm2 start app",
  ```

* 커밋 앤드 푸시

* abort 뜨면 git reset --hard
* git pull

* vim app.js에서 포트 넘버 다시 한 번 확인해줌!

* sudo npx pm2 list했을 때 무언가 실행되고 있으면

  * sudo lsof -i tcp:3065 (or :80)

* sudo npm  i


* sudo npm start

* 안 되면 package.json 명령에 pm2 app.js 확장자 썼는 지 확인!

* 실행 후엔 항상 직접 IP Address 들어가 잘 작동되는 지 확인!

<br/>

### 프론트 서버 배포하기
* about 페이지에서 데이터베이스에 정보가 안 차있음 에러남
  * getStaticProps는 이미 데이터가 차 있어 성공적으로 페이지를 빌드할 수 있어야 에러가 안 나기 때문에

* 프론트에서도 npm i pm2 해주고
* 프론트, 백 둘 다 pm2 써줌
  * background process로 만들어주기위해!

* 프론튼 SSR쓰기 때문에
  * 백엔드 서버 안 키면 에러날 것
  * 그리고 개발 땐 localhost:3065로 타겟 주소 잡아줬지만 
  * 배포 시엔 프론트, 백 다른 IP Address에 다른 컴퓨터

* 이 때 IP Address는 계속 변할텐데 바뀔 때마다 바꿔주는 게 어려우니
  * config 폴더를 만들어 따로 관리해주는 것이 좋을 것이다
  * export const backurl = "http://###.###.###";

* 프론트 서버 pm2 통해서 하는 법!
  * sudo npm run build 먼저 하고 [프론트 소스 코드 바뀌면 빌드 먼저 해야 함 | 백엔든 안 해도 된다]
  * sudo npx pm2 start npm -- start

* Reminder!
  * Front - sudo npx pm2 start npm -- start && sudo npx pm2 monit
  * Back - sudo npm start && sudo npx pm2 monit
  * (sudo npx pm2 reaload  all)

* mysql 테이블이 소문자로 시작하도록 생성되는 지도 확인!

<br/>

### 도메인 연결하기
* 지금은 "domain is invalid"하기 때문에 cookie가 제대로 안 간다.
* 요청이 가는 곳과 요청을 받는 곳의 도메인이 다름 ~> 이러면 쿠키가 공유 x
* 이를 nodebird로 통일해 줄거다!
  * 다른 이름으로도
  * 도메인 구매! (싼 데서 사자!)

* 도메인 산 곳에서
  * "네임 서버 설정" ex. 가비아
  * AWS | Route53 | 호스팅영역생성
  * 영역 이름은 해당 도메인 이름으로! (내 경우 babbleheehaw.shop)
  * At first, there are two types
    * NS, SOA
* NS (Name Server) 에 있는 URL들을 다 "네임 서버 설정"에 넣어줌!
  * 그래야 AWS에서 관리가 가능

* AWS - EC2 탄력적 ip 두 개 할당 받는다!
  * 원래 할당 받을 떄 돈이 들지만
  * 연결 눌러 인스턴스 하나 당 연결하면 무료

* 인스턴스 지우면 탄력적 IP도 연결 해제하는 것 잊지 마라!

* 탄력적 IP 할당받고 연결한 이후에는 IP주소가 고정이 된다!

* 호스팅 영역 ~ 유형 A | 프론트 IP // 유형 A | 이름 앞에 api.~~ |백IP
* // 유형 CNAME  설정하면 www.로 접속해도 들어가 짐!!

* http://api.babbleheehaw.shop [https://api.wesoodaa.site] ~> 접속 확인!

* NOTE. **HSTS 정책 ** : 한 번 https로 접속하면 일정 시간동안은 계속 https로 접속됨
* 설정 안 하는 법 검색함 됨

* 이젠 도메인 이름을 backUrl로 넣어주면 된다!
  * api.~

* 그리고 back > app.js에서 쿠키공유를 위해서 추가 설정 해준다!
```javascript
app.use(session({

  ...
  cookie: {
      httpOnly: true, //not accessible via JavaScript
      secure: false, //http
      domain: process.env.NODE_ENV === 'production'&& '.babbleheehaw.shop' //cookie shared between api.~ and ~
    }
  })
);
```

<br/>

### S3 연결하기
* 지금 문제 ~>
  * 백엔드 서버 자체에 이미지 업로드 중이어서
  * 서버 스케일링되면 이미지들도 다같이 복사됨


* S3에 업로드하면 편함! 백업도 처리해 준다
* 백엔드에 저장하는 게 아니라 프론트에서 올릴 떄 바로 S3로 올릴 것36
* S3- 버킷 만들기
  * 퍼블릭 접근 풀어줘야 브라우저에서 접근할 수 있다(비활성화)
  * 버킷 정책
```javascript
{
  "Version": "2012-10-17",
  "Statement": [
    { 
      "Sid": "AddPerm",
      "Effect": "Allow",//중요
      "Principal": "*",
      "Action": [
        "s3:GetObject",//중요
        "s3:PutObject"//중요
      ],
      "Resource":"arn:aws:s3:::babbleheehaw/*"//버킷이름과동일
    }
  ]
}
```

* 그리고 액세스 키를 하나 만들어야 한다
  * "내 보안 자격 증명"
  * "새 액세스 키 만들기"
    * "dotenv"같은 데에 넣어두면 된다

* 백엔드 폴더로 돌아와서  `npm install multer-s3 aws-sdk`
  * multer-s3 : multer 통해서 s3에 올릴 때 사용
  * aws-sdk : s3접근 권한 얻을 때 사용

* "dotenv"에 S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY넣기!
  * production 모드에서도 따로 vim .env로 넣어준다

* NOTE. 실무에서는 Access Key보다는 IAM방식으로 더 많이 함 (access key는 권한이 너무 강력)


* back > routes > post.js
```javascript
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'babbleheehaw',
    key(req, file, cb){//storage name
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
    }
  })
});


router.post("/images", isLoggedIn, upload.array("image"), async (req, res, next) => {
    //upload.array for multiple images, upload.single for a single image
    //upload.none() for json/text only

    //this portion is ran once logged in, and the files are uploaded
    // res.json(req.files.map((v) => v.filename));
    res.json(req.files.map((v) => v.location));//with AWS S3
  }
);
```

* 프론트엔드에서도 수정을 좀 해줘야 한다
  * backUrl 안에 저장소가 생기는 게 아니라
  * S3용 주소가 따로 생기기 때문
  * EX. PostForm, PostImages, ImagesZoom 에서 backUrl넣은 거 필요x


* 만약 에러에 missing Credential 문제 나오면 S3인증 관련일 수 있음!

* 이미지 업로드 성공
  * 후엔 이미지 path 확인해보자 ~> AWS S3경로!
  * AWS S3버킷 가면 업로드된 이미지도 볼 수 있음!

* S3 이후 계에속 권한 401 문제 떴는데, npm install 안 해줘서 그렇다..!! 드뎌 해결..이 아니뮤ㅠㅠㅠㅠㅠㅠㅠㅠㅠ gggggggggggg
  * 이미지 source 떄문이었던 듯?!?!?!?! {`${v.src}`}, not {v.src}

<br/>

### Lambda로 이미지 리사이징 하기
* 이미지 리사이징 이라는 작업은 성능적으로 무리가 많이 가는 작업
  * 게시글의 사진이나 모바일 화면 등에서는 작게 봐도 될텐데, 굳이 고해상도의 이미지를 그대로 가져올 필요 x
    * 클릭 시 ImageZoom때나 원본으로 보여줘도 됨

* 새 서버를 이미지 작업만을 위해서 두는 건 비용적으로 무리가 됨
* 이 떄 람다를 쓰면 좋다!!
  * 작은 컴퓨터 혹은 작은 함수라고 생각하면 된다!
  * 이미지 리사이징을 하는 "함수"를 만들어서, 함수를 그 때 그 때 실행해주면 된다
  * 직접 사용할 수도 있다 - 주소 사용 통해
  * 혹은 "트리거"설정으로 "S3 실행될 때!"등으로 지정해 사용도 가능

* "serverless"앱도 만들 수 있음 - EC2 안 쓰고, lambda 여럿, S3등만을 이용해서

* 람다는 프론트도 아니고 백도 아니니 람다 폴더를 따로 만들어준다!
  * npm init
  * npm install aws-sdk
  * npm install shart //이미지리사이징
  * git add package.json  package-lock.json

* lambda > index.js
  * AWS.config.update안함!왜냐하면 람다는 AWS에 업로드를 하는데 이 때
    * lambda 실행될 때마다 알아서 내 정보 불러오기 때문! 따라서 키 같은 거 넣어줄 필요 x
    * [vs. 백서버는 EC2서버이기 때문에 따로 정보 넣어줘야 했음]


* lambda function name can be anything!

* sudo git pull하고
  * 람다 폴더에서 npm install함!  (권한 문제 발생 시 sudo su하고 거기선 sudo npm i)

* lambda에 생긴 파일들 묶어줄 것임!
  * 리눅슨 파일 묶기와 압축이 따로 있음
  * 묶기만 할 것임!
  * sudo apt install zip
  * zip -r aws-upload.zip  ./*
  * ls하면 새로운 묶음 파일 생긴 걸 확인할 수 있음

* $  sudo curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o   "awscliv2.zip"  

  * unzip awscliv2.zip 

  * sudo ./aws/install


* 이제 aws명령어 사용 가능!
* 이유: EC2에서
  * S3로 소스 코드 보내려고 ~ 아까 묶은 폴더

* $ aws configure
  * default output : json

* $ aws s3 cp "aws-upload.zip"  s3://babbleheehaw

* 아마존 S3에 버킷 올라왔는 지 확인!

* 람다 ~ 함수 생성
  * 함수 이름 ~ image-resize

* 함수 코드 ~ Amazon S3에서 파일 업로드 [https://babbleheehaw.s3.us-east-2.amazonaws.com/aws-upload.zip]

* 기본설정 ~ 제한시간 30초로 늘려줌! 메모리는 256MB 정도!

  * 역할은 ~ AWS정책 템플릿에서 새 역할 생성 - S3객체 읽기 전용 권한 선택!


* trigger setting ~ S3
  * prefix ~original/
    * 이거 안 넣어주면 original 안 이미지가 편집되어 thumb폴더에 들어가면 또 trigger되어 infinite loop 생김!
  * activate trigger option
  * recursive call option

<br/>

### 카카오톡 공유 & 강좌마무리

* 이제 프론트에서 thumb폴더 거를 받아오면 될 것

  * router.post('/images', ...
    * res.json(req.files.map((v) =>v.location.replace(/\/original\//, '/thumb/'))));

* 상세보기 할 때만 원본 보여줌
  * ImagesZoom-index
  * 미리보기할 때도 thumb으로 변환할 때까지 시간 걸리니 원본 보여줌!

* 백엔드 서버재시작 해도 로그인 안 풀리려면 Redis 써야 함!

* CloudWatch에서 로그 확인

* thumb이 계속 안 됐는데,
  * S3 버킷에 다음과 같이 두 개를 써줘야 했기 때문!
  * "Resource": [
                "arn:aws:s3:::wesoodaa/*",
                "arn:aws:s3:::wesoodaaa"
            ]

* 0706 ~> EC2 us-east-2에서 ap-northeast-2로 이동 (idk why)
  * bucket 새로 생성해주고 



