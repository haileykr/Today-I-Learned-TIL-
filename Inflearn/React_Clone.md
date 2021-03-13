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

- Next.js ~> 이런 거 해줌. 검색엔진에도 잘 나타나게 함.

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



