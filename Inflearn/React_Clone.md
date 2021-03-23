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
import reducer from '../reducers';

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
: import  {useDispatch}from 'react-redux';

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
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extenson';

const configureStore = () => {
        const middlewares =[]
        const enhancer = process.env.NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares)) //배포용
            : composeWithDevTools(applyMiddleware(...middlewares)) //개발용


        const store = createStore(reducer,enhancer);
        return store;
}
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
const initialState = {

}

const reducer = (state = initialState, action)=>{
    switch (action.type){
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
import {combineReducers} from 'redux';
import user from './user';
import post from './post';
```
=> combineReducers는 리듀서를 합쳐주는 기능

- reducer는 함수. 함수를 합치는 것은 쉽지 않은 일. 따라서 combineReducers의 도움을 받아야 한다
```javascript
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE: 
                console.log('HYDRATE', action);
                return {...state, ...action.payload}
            
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
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'BP'
        },
        content: 'First article #GME #APL',
        Images: [{
            src: 'http://image.yes24.com/momo/TopCate1860/MidCate008/185975276.jpg'
        },{
            src: 'https://miro.medium.com/max/1200/1*ZDDuzNRgvV0pJukSOw-UDA.jpeg'
        },{
            src: 'https://image.aladin.co.kr/product/23331/95/cover500/e332537164_1.jpg'
        }]
    }],
    Comments: [{
        User: {
            nickname: 'hero'
        },
        content: 'Saving $$$ for it!*'
    }],

    imagePaths: [],

    postAdded: false,
}
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
const PostCard = ()=> {
    return(
    
        <div>
            <Card>
                <Image />
                <Content />
                <Buttons></Buttons>
            </Card>
            <CommentForm/>
            <Comments />
            
        </div>
    )
}
```
=> 이렇게 기획을 하고, 하나씩 구현해 나가면 됨.

- 배열 안에 JSX넣을 땐 항상 key를 넣어줘야 함

- user.js에서, export const initialState = {..., me: null, ..}


- components > PostImages.js
```javascript
import React,{useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { Button, Card, Popover, Avatar } from 'antd';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'
import PostImages from './PostImages';

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
    }, [])
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
                    liked
                        ? <HeartTwoTone twoToneColor = '#eb2f96' key="heart"onClick = {onToggleLike} />
                        : <HeartOutlined key="heart"onClick = {onToggleLike}/>,
                    <MessageOutlined key="comment"onClick = {onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {/* 로그인 시에만 보이게 */}
                            {id && post.User.id === id ?(
                                <>
                                    <Button>Edit</Button>
                                    <Button type="danger">Remove</Button>
                                </>
                            ) : <Button>Report</Button>}
                        </Button.Group>
                    )}>
                        {/* 더보기버튼 */}
                        <EllipsisOutlined />
                    </Popover>
                ]}
                >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />   
            </Card>
            {commentFormOpened &&(
                    <div>
                        Comments
                    </div>)}          
            {/* <CommentForm />
            <Comments /> */}
        </div>
    )
}
PostCard.propTypes = {
    // post: PropTypes.object.isRequired,
    // 혹은 더 자세히 명시해주기 위해서
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
}

```

### 댓글 구현하기





















