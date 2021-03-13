# HTML
- https://opentutorials.org/course/2039

## 기술소개
- HyperText - (링크)를 가장 중요한 특징으로 하는
: Markup - 마크업이라는 형식을 가진
: Language - 언어

## DOCType
- Document Type Declaration

## HTML의 변천사와 통계
- opentutorials.org/course/2039/10939

#### Form
- 데이터 전송 - hidden
: type="hidden" ~> 눈에 보이지 않지만 이 input의 value가 name으로 전송
- method
: URL형식으로 정보를 전달~>GET!
: 파일 업로드하는 부분이 하나라도 있으면 enctype = "multipart/form-data"

## HTML as Information
#### meta
- 웹 페이지 전부를 설명하는 정보

- ex. <meta charset = "utf-8">
      <meta name="description" content="생활코딩의 소개자료">
      <meta name = "keywords" content="코딩, coding, 프로그래밍">
      <meta name = "author" content ="egoing">
      <meta http-equiv = "refresh" content="30">

- 이렇게 내용부분은 아니지만, 내용을 설명할 수 있는 정보들을 담음.


#### Semantic Elements
- 사전도 있음!

- Important
: article - body contents
: aside - less relevant to body
: details - contents not displayed on screen
: figure - figures/diagrams
: footer - sites at bottom or overall info on doc
: header - sites at top or overall info on doc!!
: main - the main contents
: nav - navigation elements of doc
: section - sections of docs
: time

#### 검색엔진 최적화
- 가장 좋은 것 - HTML을 의미론적으로 잘 사용하기!
- 구글에서 publish한 가이드가 있음
(http://static.googleusercontent.com/media/www.google.com/ko//intl/ko/webmasters/docs/search-engine-optimization-starter-guide-ko.pdf)
- Seach Engine Optimization

- 나머지 마저 듣기!!

## 웹 개발자 도구
- 웹 개발을 하는데 필요한 여러가지 기능을 모아둔 도구
- 크롬 개발자 도구 수업
(https://opentutorials.org/module/306/2865)
~> Inspection
~> 페이지 소스 보기

## 모바일 지원
- ex. <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
// 다른 화면 크기에서도 최적화된 채로 표시

## 외부문서 삽입 - iframe
- ex. <iframe src = "https://opentutorials.org"width="500", height = "500"></iframe>

- 하지만 보안에는 취약하기 때문에 채택할 때 주의해야 함.

- <iframe ... sandbox>
// sandbox를 넣어주면, embed된 외부문서의 위험할 수 있는 기능들(ex. form, JS)이 작동 x
// 하지만 이것은 HTML5기술이어서 오래된 브라우저에서는 작동 x

## HTML5
#### 비디오 삽입
- HTML5 이전에는 비디오 삽입하는 정형화된 태그가 없었기에, 플래쉬 등이 비디오를 서포트함

- 동영상 - ex. .mp4, .ogv : "코덱"이 다름
- cf. 코덱 - 어떠한 데이터 스트림이나 신호에 대해, 인코딩이나 디코딩, 혹은 둘 다를 할 수 있는 하드웨어나 소프트웨어를 일컬음.
- ex. <video width = "400" controls>
        <source src = "~.mp4">
        <source src = "~.ogv>
      </video>

~> 브라우저마다 지원하는 포맷, 코덱이 다름
~> 소스를 여러 개 써 놓으면 브라우저가 가장 선호하는 포맷으로 보여줌

#### caniuse
- caniuse.com // 버전마다 지원 가능한 태그들 보여줌

#### HTML5의 입력양식
- input types
: color, date, datetime, datetime-local, email, month, number, range, search, tel, time, url, week
ex. <input type="number" min="10" max="15">

- 입력 타입 속성들
ex. <form autocomplete="on">..</form>
//이 폼 안의 특정 인풋은 autocomplete="off"할 수도 있다!

ex. <input...placeholder="id">

ex. <input...autofocus>

- 입력 값 체크
: 인풋 타입에 따라 자동으로 validation체크 해줌
: required

: pattern = "regular_expression"
//pattern으로는 regular expression올 것이 약속되어 있음
ex. pattern = "[a-zA-z].+[0-9]"






# CSS
### Intro
- cf. LESS (CSS + dynamic programming components), SASS (similar to LESS), Twitter Bootstrap

### 선택자와 선언
- css diner game

### 가상 클래스 선택자
- ex. :link (방문한 적 x), :visited (방문한 적 o), :hover, :active

### 속성을 공부하는 방법
- 통계에 따라


### 조화
#### 상속
- 상속받는 프로퍼티와 아닌 것이 있다

#### stylish
- 익스텐션설치 후 다른 유저들이 만든 스타일css 적용할 수 있다


#### 캐스케이딩
- 웹 브라우저 < 사용자 < 저자

### Layout
#### Flex
- https://codepen.io/enxaneta/embed/adLPwv?default-tab=result&theme-id=light
- history
: table -> position -> float -> flex

- Flex
ex. <container> //에 해당되는 tags
        <item></item>
        <item></item>
    </container>

- Container에 해당되는 속성들
: display, flex-direction, flex-wrap, flex-flow, justify-content, align-content, align-items
- Item에 해당되는 속성들
: order, flex-grow, flex-shrink, flex-basis, flex, align-self

- Flex 사용시,
: 부모element에게 display: flex를 주는 것이 시작

- Grow & Shrink & Basis
: 자식element에게 주어지는 속성들이다


- Holy Grail Layout

- Flex: Other Properties

~> align-items: flex-stqart, flex-end,center, baseline, stretch

#### 마진 겹침 현상
- 두 elemetns 사이의 마진 값 중 더 큰 것이 실제 margin이 됨!
- 부모-자식요소들~> 부모 tag가 시작적으로 투명한 상태가 되면 (ex. no border, no background-img) 자식 tag의 margin이 부모tag의 margin과 겹침

- 시각적으로 투명한 element의 마진값은, top과 bottom 중 더 큰 값으로 됨

#### 포지션
- static vs. relative
: 요소들 기본 포지션 값 - static. offset값 무시하고 딱 그 자리에 있음
: relative ~> 상대적으로 움직이게 하도록 - top, bottom, left, right 등 오프셋 값 설정 가능

- absolute
: 상대적인 기준을 html으로 삼음
: 절대 지정 이후로는 parent element와 무관해 짐
: 하지만!! parent 요소에 다른 position 값들(static 말고)이 주어지면, 그 요소 기준으로 작동
- fixed
: 자기 자리에 고정되어서 스크롤과 무관해지게 함
ex. #me {
      position: fixed;
      right: 0;
      top: 0;
      height: 30px;
    }//위쪽아래에붙음
ex. body {
      padding-top: 30px;
    }//이렇게 하면 body 부분 중 가려지는 곳이 없게 됨!





#### media query
#### float
- usually 이미지 삽입, 레이아웃에 많이 쓰임!
ex. img {
      float: left;
      width: 200px;
      margin: 20px;
      }
      //하면, 이미지 오른쪽으로 다른 콘텐츠들이 옴

ex. <img src="...">
      <p>...</p>
      <p style="clear:both;" > ~ </p>
      //이러면 두 번째 paragraph는 이미지를 피해가지 않음!

#### 다단
ex. <style>
        .column{
              text-align: justify;
              /*column-count: 2;*/
              column-width: 200px;
              column-rule-style: dashed;
              column-rule-width: 5px;
              column-rule-color: powderblue;
              column-gap: 5px;
        }

        h1 {
              column-span:all;
        }
        //다단에 구애받지 않고 자기 자리 차지할 수 있음
    
    </style>

    <div class="column">
            <h1>...</h1>
            <p>..</p>
    </div>

## 그래픽
#### 배경
ex. div {
      background-repeat: repeat-y;


      background-attachment: fixed;
      background-size:200px 100px;
      background-size: cover / contain;


      background-position:center center;
      /*축약형도 가능 */
}

#### 필터
ex. img {
      
      -webkit-filter: grayscale(30%); //크롬, 사파리
      -o-filter: grayscale(30%) blur(2px); //오페라 
      filter: graysclae(30%); //제네럴

}
ex. h1 {
      -webkit-filter: blur(1px);
      -o-filter: blur(1px);
      filter: grascale(1px);
      }
- CSS Filter playground
#### blend
ex. div {
      height: 400px;
      background-color: green;
      background-image:url(".");
      background-blend-mode: color, ...
}

- mix-blend-mode
: 컨텐트 & 배경 사이의 블렌드 효과다!
ex. body {
      background-image: url(".");
      }
      .blend {
            font-size: 2rem;
            font-weight: bold;
            font-color: green;


            mix-blend-mode: screen;  
      }


#### transform
ex. transform: scaleX(0.5);
- codepen ~> css transform

- http://elrumordelaluz.github.io/csshake/#1
- https://www.minimamente.com/project/magic/

- CSS Transform Library

#### 유지보수
- link, import: 둘의 차이는 없음


- minify
: http://adamburgess.github.io/clean-css-online/
: Editor - Extension

#### 뛰어넘자 CSS (Pre-Processor!)
- CSS에 편리한 기능을 더한 새로운 언어를 만든 후, 이 언어에 따라서 작성한 코드를 어떤 프로그램으로 실행시키면, 결과적으로 CSS 만들어 줌
ex. http://lesscss.org/
ex. https://sass-lang.com/
ex. http://stylus-lang.com/

ex. https://csspre.com/compile/

- CSS는 "표준화"가 된 언어
~> 위원회가 고심을 하여 업데이트 하고, 브라우저들이 그 변화를 받아들이고, 유저들이 잘 써야지 새로운 문법 도입이 가능

=> 에디터 extension 찾아보기!
=> 터미널에서 명령어로 할 수 있기에 굳이 extension설친 안 해도 됨!





### Library
#### Fontello
- fontello는 딩벳이나 아이콘을 폰트로 제공하는 여러 서비스를 모아둔 곳
- 딩벳 - 폰트 대신 어떤 문자 해당하는 이미지로 이루어진 폰트

- 폰텔로 CSS 연결!
ex.<link rel="stylesheet" href="fontello.css">
ex. <style>
      body{
            font-family: "fontello";
      }
      </style>
      ...
      &#xe811
      혹은
      <i class="icon-inbox">
      //이렇게 하면 font-family설정 필요 x!

- 왜냐하면 class 설정하면 :before로 문자가 추가되고, 태그 i에 자동으로 font-family가 설정되어 보이기 때문

- animation 도 설정 가능!

- thenounproject!!
=> svg다운로드 가능!


~> fontello에서 custom icon을 만들 수 있음!

- config.json을 연장 아이콘을 이용해 선택하면 기존에 선택했던 아이콘 기록을 불러올 수 있음!

#### buttons library!

#### Semantic UI
- UI?
: 사용자가 시스템을 조작하는데 사용하는 장치들!
- Library?
: 자주 사용되는 기능들을 재사용하기 위해 쉽게 잘 정리해 놓은 부품들을 의미함. 프레임웍(framework)이라는 말도 있는데, 거의 비슷한 의미로 사용됨.


- UI Library?
~> 자주 사용되는 UI를 미리 구현해서 쉽게 사용할 수 있도록 정리해 놓은 부품들! 대표적 UI library로는 **Bootstrap**이있음

- 강의 듣고 싶으면 듣기!






    


# HTML
# WEB > WEB1 -HTML & Internet
- head tag
: https://opentutorials.org/course/3084/18409
- anchor tag에서 tooltip ~> <a title="tooptip">

- 웹 역사
: https://opentutorials.org/course/3084/18889

- 서버와 클라이언트
: https://opentutorials.org/course/3084/18890




- 웹 호스팅 (github pages)
: https://opentutorials.org/course/3084/18891

: (free static)web hosting

- 웹 서버
: Apache, IIS, Nginx등
: "How to install Apache http server on ${os}!"

- 웹 서버 운영: 윈도우
=> Apache web page

- http://127.0.0.1/index.html
=> 127.0.0.1은 웹 브라우저가 설치되어 있는 컴퓨터 웹 서버를 가리키는 universal IP address
~> 따라서 웹 브라우저에서 127.0.0.1을 치는 것은 자기 자신을 refer하는 것을 의미.

- 웹 서버에서 여는 것 (http)과 파일로 여는 것 (file)의 차이
: http ~> 브라우저에서 서버에 요청하고, 서버가 index.html을 찾아 다시 브라우저에 보내는 형식
: file ~> 서버는 개입 x.브라우저가 직접 index.html을 찾아서 읽어주는 것.

=> 서로 다른 컴퓨터들 통신 위해서는 반드시 http가 사용되어야 함.

- Network &Sharing Center
=> Connections ~> details : IP주소 확인

=> 같은 네트워크 연결 상태일 때 (ex. on the same wifi connection), IP 주소 이용해서 다른 컴퓨터 접속 가능.

EX. 컴퓨터에서 Apache 이용 서버 띄움 (htdoc 폴더에 index.html포함 파일들 올려놓음). 핸드폰에서 http://<ip address> 넣었을 때 해당 웹사이트 접속 가능

- 동영상 추가: embed tag 넣기
- 댓글 추가: disqus, liveRe 등

: "canonical 뜻" - https://myseolabo.com/seo/canonical-tag/


- 라이브챗 추가: tawk
~> script

- 여러 웹사이트 분석기 있음
~> 그 중 Google Analytics 사용해보자!

~> Settings에서 tag복사하고 head 안에 붙여넣음
~> Google Analytics에 굉장히 많은 정보 있음
~> 특히 RealTime에 정보 담김





# JAVASCRIPT
# 웹브라우저 JS
### Intro
- https://opentutorials.org/course/48
- DOM: 자바스크립트의 고유 요소
- jQuery: 자바스크립트 라이브러리

- Javascript - Web browser, Node.js, Google App Script 등 host 환경을 제어하기 위해 쓰일 수 있음


- 구분 키 포인뜨!

: HTML - 정보
: CSS- 디자인
: JavaScript - 웹브라우저, html 제어

- 크롬 개발자 도구 수업: https://opentutorials.org/course/580

### 자바스크립트 HTML에서 로드하기
- inline
: 태그에 직접 JS 기술. 하지만 정보와 제어가 섞여서 정보로서의 가치가 떨어짐
ex. input type="button" onclick="alert('Hello world')" value="Hello world"

- Script
: <script></script>태그를 만들어 안에다 JS코드 삽입. html, js 코드의 분리가 가능해서 좋음

- 외부파일로 분리
: 보다 엄격하게 html과 js를 분리
: 재활용 용이함
: 캐쉬를 통해서 속도의 향상, 전송량의 경량화 도모 가능함

- Script 파일은 하단에 위치시키는 것이 좋음
: or window.onload = function(){ ... }넣기! so that 코드가 모든 요소가 로드된 이후 실행 가능토록!

## 객체화

- Object Model
- 웹브라우저의 구성요소들은 하나 하나 객체화되어있다. 자바스크립트로 이 객체를 제어해서 웹브라우저를 개발할 수 있게 된다. 이 객체들은 서로 계층적인 관계로 구조화되어있다. BOM과 DOM은 이 구조를 구성하고 있는 가장 큰 틀의 분류라고 할 수 있다.

- window 객체 밑에 properties...(note.window는 전역 객체!)
1. DOM - 웹페이지의 내용을 제어. window의 프로퍼티인 document프로퍼티에 할당된 document 객체가 이러한 작업을 담당. - document, ...
2. BOM (Browser Object Model) - 현재 웹페이지의 내용을 제외한 브라우저의 각종 요소들을 객체화시킨 것. 전역객체 Window의 프로퍼티에 속한 객체들이 이에 속한다. - navigator, screen, location, frames, history, XMLHttpRequest
3. Javascript Core - JS언어 자체에 정의되어 있는 객체들. - Object, Array, Function, ...

### BOM
- BOM (Browswer Object Model)이란 웹브라우저의 창이나 프레임을 추상화하여, 프로그래밍적으로 제어할 수 있도록 제공하는 수단.BOM은 전역객체인 Window의 프로퍼티와 메소드들을 통해서 제어할 수 있다. Window 객체의 프로퍼티와 메소드의 사용법을 배우는 것이 목표.

#### Window
- 전역 객체
ex. window.document

ex. alert("Hello World!"); <=>window.alert("Hello World!");
~> 만드는 함수들 그리고 built-in functions들도 다 window의 property!

#### 사용자와 커뮤니케이션!
- alert
: 경고창. user에게 정보를 제공하거나 debugging 용도로 많이 씀.
: alert 실행 후 코드는 실행 x

#### confirm
- 확인을 누르면 true 취소를 누르면 false를 리턴한다.
ex. confirm("OK?"); //창이 뜸!
ex. <input type="button" value="confirm"onclick="func_confirm()"/>
<script>
      function func_confirm(){
            if(confirm("y?")){
                  alert("OK");
            }
            else{
                  alert("cancel");
            }
      }
</script>

#### prompt
- 사용자로부터 입력을 받는 것


### Location
- 문서의 주소와 관련된 객체로 Window객체의 프로퍼티다. 이 객체를 이용해서 윈도우의 문서 URL을 변경할 수 있고, 문서의 위치 관련 여러 정보를 얻을 수 있다.

ex. console.log(location.toString,location.href);

- location.protocol, host, port, pathname, search, hash
=> URL Parsing. Location 객체는 URL을 의미에 따라 별도의 프로퍼티로 제공.

- URL 변경하기
: 현재 문서를 다른 주소로 이동

ex. location.href = "https://google.com";

: 리로드
ex. location.reload();

#### Navigator
- 브라우저 정보를 제공. 주로 호환성 문제등을 위해 사용


- 모든 브라우저들은 W3C가 정한 HTML CSS ECMA(for JS) 스펙에 따라서 만들어져 있음. 따라서 스펙에 따르는 것은 비슷하게 구성하지만, 정의되지 않은 부분은 각자 개성에 맞게 설계됨

- Cross-browsing issue - 브라우저마다 다르게 작동하는 경우

- 역사적으로...
: 최초의 Web Browser는 팀 버너스가 만들었지만
: 상업적 Web Browser는 넷스케이프 회사에서 만듦.
: 자바스크립트는 넷스케이프 회사서 경쟁력 높이려 추가한 부분.
: 그 후에 Microsoft가 IE를 만들어 bundle에 추가해 배포함
: 웹 브라우저 전쟁 시작!

: 기능 경쟁도 무질서하게 일어남!

: 개발자들의 불만이 고조되었고, 이를 해결하기 위해 웹표준 등장.


- 따라서 예전에 웹표준 등장 전에는 Navigator가 Cross-browsing issue를 해결하기 위해 많이 쓰임
- 요즘에도 오래된 브라우저 사용자가 많아서 여전히 필요함

- console.dir(navigator)를 이용해서 모든 객체의 프로퍼티 열람이 가능하다.


1. appName
: 웹 브라우저의 이름이다. IE는 Microsoft Internet Explorer, 파이어폭스 / 크롬 등은 Netscape로 표시한다.

2. appVersion
: 브라우저 버전을 의미.
ex. console.dir(navigator.appVersion)
//5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36



3. userAgent
: 브라우저가 서버측으로 전송하는 USER-AGENT HTTP 헤더의 내용. appVersion과 비슷하다
ex. console.dir(navigator.userAgent)
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36

4. platform
: 브라우저가 동작하고 있는 운영체제
ex. console.dir(navigator.platform)
//Win32


5. ...

- Navigator 객체는 브라우저 호환성을 위해서 주로 사용하지만 모든 브라우저에 대응하는 것은 쉬운 일이 아니므로 기능 테스트 사용하면 좋다

: 코드를 추가해서 사용
: ex. Object.keys가 없으면, 코드 추가
: (Note. Object.keys는 객체의 키값을 배열로 반환)

#### 창 제어
- window.open()

- onkeypress
ex.  <input type="button" value="open" onclick="winopen();" />
    <input type="text" onkeypress="winmessage(this.value)" />
    <input type="button" value="close" onclick="winclose()" />
    <script>
    function winopen(){
        win = window.open('demo2.html', 'ot', 'width=300px, height=500px');
    }
    function winmessage(msg){
        win.document.getElementById('message').innerText=msg;
    }
    function winclose(){
          win.close();
    }
    </script>
    ...
    //같은 도메인인 경우에만 이 코드가 실행됨 b/c 보안목적
    //사용자의 인터렉션이 없이 창을 열려 하면 팝업이 차단됨

- 예를 들어 사용자가 버튼을 클릭해 window.open()을 한다면 차단 안 되지만, 자동으로 window.open()이 실행되는 경우엔 차단됨

### DOM
- Document Object Model, 웹페이지를 자바스크립트로 제어하기 위한 객체 모델을 의미
- window.document 통해 사용 가능
- Window 객체가 창을 의미한다면 Document 객체는 윈도우에 로드된 문서를 의미함

#### 제어 대상을 찾기
- 문서를 자바스크립트로 제어하려면 제어의 대상이 되는 객체를 찾는 것이 제일 먼저 할 일. 문서 내에서 객체를 찾는 방법은 document 객체의 메소드를 이용
- document.getElementsByTagName
: 인자로 전달된 태그명에 해당하는 객체들 찾아서 그 리스트를 NodeList라는 유사 배열에 담아 반환.NodeLIst는 배열은 아니지만 배열의 method를 갖고 있음

ex. var ul = document.getElementsByTagName('ul');
ex. var li = ul.getElementsByTagName ("li");

- document.getElementsByClassName


- document.getElementById
: id 값을 기준으로 객체를 조회. 성능 가장 좋음


- document.querySelector
: CSS 선택자 문법 사용하여 객체 조회 가능.

- jQuerye


~> JS 라이브러리. DOM을 안에 감추고 보다 쉽게 웹페이지 조작할 수 있도록 돕는 도구

- jQuery를 사용하기 위해선 HTML로 로드해야 함
ex. <script src = "//code.jquery.com/jquery-1.11.0.min.js"></script>
      <script>
            jQuery(document).ready(function ($) {
                  $('body').prepend('<h1>Hello World</h1>');
            });
            </script>
            ..

- jQuery를 이용하면 DOM을 사용하는 것보다 훨씬 효율적으로 필요한 객체를 조회할 수 있음!
- jQuery는 객체 조회 시 CSS 선택자를 이용한다.


ex. $('li').css('color','red');
~> $는 jQuery 함수
~> 'li'는 CSS선택자

~> jQuery함수에 의해 return된 객체에
~> .css메소드 이용

- jQuery 사용 예제

ex. $('.active').css('color','blu').css('text-decoration','underline');

#### HTML Element
- "constructor.name" ~> 그 객체의 이름을 알 수있다.
ex. var li = document.getElementById('active');
ex. console.log(li.constructor.name); //HTMLLIElement
ex. var lis = document.getElementsById('active');
ex. console.log(lis.constructorname); //HTMLCollection

~> HTMLCollection : 유사 배열!


- W3C ~> 각 요소에 대한 속성들 리스트해주고 있음!





- **DOM Tree!**

: 모든 엘리먼트는 HTML Element의 자식.
: 따라서 HTMLElement의 프로퍼티를 가지고있다.

: Node > Document > HTMLDocument
      > CharacterData > Text, Comment

      > Element > HTMLElement > HTMLHeadElement, HTMLBodyElement, HTMLTitleElement, ...
      > Attr


#### HTML Collection
- 참고!
EX. console.group('before');//'before'는 이름
ex. ...
EX. console.groupEnd();
: 하면 로그 그룹화 할 수 있음!

#### jQuery객체

- jQuery 함수의 리턴값으로 jQuery 함수를 이용해서 선택한 엘리먼트에 대해서 처리할 작업을 프로퍼티로 가지고 있는 객체


- jQuery객체의 가장 중요한 특성은 암시적인 반복 수행이다.
- DOM과 다르게 jQuery 객체으ㅟ 메소드를 실행하면 선택된 엘리먼트 전체에 대해 동시에 작업이 처리
- 암시적 반복은 값을 설정할 때만 동작한다. 값을 가져올 때는 선택된 엘리먼트 중 첫번째에 대한 값만을 반환한다. 이에 대한 내용은 아래에서 살펴본다.

- 체이닝
: chaining이란 선택된 엘리먼트에 대해서 연속적으로 작업을 처리할 수있는 방법


- jQuery 요소는 .map이라는 메소드를 갖고 있다. 요소의 하나 하나를 순회하면서 함수를 적용시키는 것
ex. var li = $('li');
      li.map(function(index, elem) {
            console.log(index, elem);
            $(elem).css('color','red');
      })

- jQuery 객체 API
: jQuery documentation잘 보기

- Element 객체
: Element 객체는 엘리먼트를 추상화한 객체다.
: HTMLElement 객체와의 관계를 이해하기 위해서는 DOM의 취지에 대한 이해가 선행되야 한다.
: DOM은 HTML만을 제어하기 위한 모델이 아니다.
: HTML이나 XML, SVG, XUL과 같이 마크업 형태의 언어를 제어하기 위한 규격이기 때문에 Element는 마크업 언어의 일반적인 규격에 대한 속성을 정의하고 있고,
: 각각의 구체적인 언어(HTML,XML,SVG)를 위한 기능은 HTMLElement, SVGElement, XULElement와 같은 객체를 통해서 추가해서 사용하고 있다

- 식별자
: 문서내에서 특정한 엘리먼트를 식별하기 위한 용도로 사용되는 API
: Element.tagName ~> 해당 엘리먼트의 태그 이름을 찾아낸다.태그 이름을 변경하지는 못한다.
: Element.id ~> 아이디 값을 읽고 변경할 수 있다
: Element.className ~> 클래스 값을 읽고 변경할 수 있다.
~> active.className += " readed" : 클래스 추가도 가능함.
: Element.classList ~> DOMTokenList(List of classes유사배열) 반환.
~> ex. active.classList.add/remove/toggle

- 조회
: 엘리먼트의 하위 엘리먼트를 조회하는 API

: Element.getElementById / getElementByClass
~> document.에 대해서도, 하위 요소에 대해서도 적용 가능

- 속성
: 엘리먼트의 속성을 알아내고 변경하는 API

: CF. 속성은 HTML에서 태그명으로는 부족한 부가적인 정보라고 할 수 있다.
: Element.getAttribute(name) / setAttribute(name, value) / hasAttribute(name), removeAttribute(name)

: setAttribute('class', 'important')와 className = 'important'는 같은 결과를 만든다.
: 하지만 전자는 attribute 방식(속성이라고 부르겠다)이고 후자는 property 방식이다.
: property 방식은 좀 더 간편하고 속도도 빠르지만 실제 html 속성의 이름과 다른 이름을 갖는 경우가 있다. 그것은 자바스크립트의 이름 규칙 때문이다
ex. class - className
ex. readonly - readOnly
ex. rowspan -rowSpan
ex. colspan - colSpan
ex. usermap - userMap
ex. frameborder - frameBorder
ex. for - htmlFor
ex. maxlength - maxLength

- 지금까지 살펴본 Element의 API에 해당하는 기능을 jQuery에서는 어떻게 구현하는 지?

- jQuery:속성 제어
: setAttribute, getAttribute에 해당하는 메소드는 attr
ex. t.attr('href',"https://opentutorials.org)
: removeAttribute에 해당하는 메소드는 removeAttr.

: DOM과 마찬가지로 jQuery도 속성(attribute)과 프로퍼티를 구분. attr, prop 메소드 구분이 있다!!
ex. t.attr('href'); 
ex. t.prop('href');

~> jQuery를 이용하면 프로퍼티의 이름으로 어떤 것을 써도 자동적으로 올바른 것으로 고쳐준다


- jQuery:조회 범위를 제한
: selector context - 조회할 때 조회 범위를 제한하는 것






ex. $("#active .marked").css("background-color","blue");
ex. $("#active").find(".marked").css("background-color","blue");
: find는 체인을 끊지 않고 작업의 대상을 변경하고 싶을 때 유용

### Node
: Node객체는 DOM에서 시조와 같은 역할을 한다
: 다시 말해 모든 객체는 Node 객체를 상속받는다.


: Node객체의 주요 임무는 아래와 같다.
1. 관계
: 엘리먼트는 서로 부모, 자식, 혹은 형제자매 관계로 연결되어 있다.
: 각각의 Node가 다른 Node와 연결된 정보를 보여주는 API를 통해서 문서 탐색 가능
: Node.childNodes / firstChild / lastChild /nextSibling / previousSibling / contains() / hasChildNodes()

: 주의 - 아무것도 없어보여도 \n가 있기 때문에 구하려던 요소말고 #text가 구해질 수도 있음

2. 노드의 종류
: Node 객체는 모든 구성요소를 대표하는 객체이기 때문,
: 각각의 구성요소가 어떤 카테고리에 속하는 것인지 알려주는 식별자를 사용한다
: Node.nodeType(노드의 타입) / nodeName(노드의 이름 - 태그명)

ex. for (var name in Node){
      console.log(name, Node[name])
      }
      // ELEMENT_NODE 1 
      ATTRIBUTE_NODE 2 
      TEXT_NODE 3 
      CDATA_SECTION_NODE 4 
      ENTITY_REFERENCE_NODE 5  ...

: 예제 - 노드 종류 API를 이용해 노드를 재귀함수로 처리하는 예제

ex. <script>
      function traverse(target, callback){
            if (target.nodeType === 1){//body에서 출력
                  callback(target);
                  var c = target.childNodes;
                  for (var i = 0;i<c.length;i++){
                        traverse(c[i],callback);
                  }}
      }
      traverse(document.getElementById('start'),function(elem){
            console.log(elem);
      });


3. 값
: Node 객체의 값을 제공
: Node.nodeValue / textContetn

4. 자식관리
: Node 객체의 자식을 추가하는 방법
: Node.appendChild() / removeChild()

- 노드변경 API

1. 노드 추가
: 노드 추가
: appendChild(child)- 노드의 마지막 자식으로 주어진 엘리먼트 추가
: insertBefore(newElement, referenceElement) - appendChild와 동작방법은 같으나 두번째 인자로 엘리먼트를 전달 했을 때 이것 앞에 엘리먼트가 추가된다.
- 노드를 추가하기 위해서는 추가할 엘리먼트를 생성해야 하는데 이것은 document 객체의 기능이다. 아래 API는 노드를 생성하는 API이다.
: document.createElement(tagname) - 엘리먼트 노드를 추가한다.
: document.createTextNode(data) - 텍스트 노드를 추가한다. 

2. 노드 제거
: 노드 제거를 위해서는 아래 API를 사용한다. 이 때 메소드는 삭제 대상의 부모 노드 객체의 것을 실행해야 한다는 점에 유의하자
: removeChild(child) 

3. 노드 바꾸기
: replaceChild(newChild, child)

- jQuery 노드 변경 API
: jQuery에서 노드를 제어하는 기능은 주로 Manipulation 카테고리에 속해 있다.

: ex. $('.target').before('<div>before</div>');
    $('.target').after('<div>after</div>');
    $('.target').prepend('<div>prepend</div>');
    $('.target').append('<div>append</div>');
    //위치 잘 보기!

- jQuery 노드 삭제 API
: remove - 선택된 엘리먼트 제거
: empty - 선택된 엘리먼트 텍스트 노드를 제거
ex.  $('#btn1').click(function(){
        $('#target1').remove();
    })
    $('#btn2').click(function(){
        $('#target2').empty();
    })

- jQuery 노드 변경
: replaceWith - 제어 대상을 먼저 지정
: repalceAll - 제어 대상을 인자로 전달
ex.  $('#btn1').click(function(){
        $('<div>replaceAll</div>').replaceAll('#target1');
    })
    $('#btn2').click(function(){
        $('#target2').replaceWith('<div>replaceWith</div>');
    })

- jQuery 노드 복사
: ex.  $('#btn1').click(function(){
        $('#source').clone().replaceAll('#target1');
    })

- jQuery 노드 이동
: dom manipulation API 인자로 특정 노드 지정시 이동의 효과가 난다
ex. $('#btn1').click(function(){
        $('#target1').append($('#source')); })




#### 문자열로 노드제어
- 노드 변경 API에서는 여러 메소드를 이용해서 노드를 제어하는 방법에 대해서 알아봤다. 그런데 이 방식은 복잡하고 장황하다
~> introducing more convenient ways!!

: innerHTML
~> 문자열로 자식 노드를 읽거나 만들수 있다

: outerHTML
~> inner-와 같되 본인 노드도 포함!

: innerText
~> 자식 노드들 문자열만!

: outerText
~> innerText + 본인 노드 문자열도!

: insertAdjacnetHTML(option, StringToAdd)
~> 좀 더 정교하게 문자열 이용 노드 변경하고 싶을 때
ex. <input type="button" onclick ="beforebegin();" value="beforebegin" />
ex. <script>
      function beforebegin() {
            var target = document.getElementById('target');
            target.insertAdjacentHTML('beforebegin', '<h1>Client Side</h1>')
      }
~> beforebegin과 afterbegin, beforeend와 afterend

### Document 객체
- DOM의 스팩이고 이것이 웹브라우저에서는 HTMLDocument 객체로 사용됨
: HTMLDocument객첸 문서 전체를 대표하는 객체라고 할 수 있다
ex. <script>
      //document 객체는 window 객체의 소속이다.
      console.log(window.document);
      //document 객체의 자식으로는 Doctype과 html이 있다. 
      console.log(window.document.childNodes[0]);
      console.log(window.document.childNodes[1]);
      </script>

- 주요 API
1. 노드 생성 API
: createElement(), createTextNode()
2. 문서 정보 API
: title, URL
: referrer, lastModified 

### Text객체
- 텍스트 노드에 대한 DOM 객체로 CharacterData를 상속받음
- 공백이나 줄바꿈도 Text Element

- 값
: 텍스트 노드의 값 부르는 API - data, nodeValue

- 조작
: appendData(), deleteData(), insertData(), replaceData(), subStringData()

- 생성
: document.createTextNode()

### 문서의 기하학적 특성
- 요소의 위치와 크기
: getBoundingClientRect, offsetParent
: ClientWidth, ClientHeight

- Viewport는 문서의 내용 중 사용자에게 보여주는 영역. 이에 따라 문서의 좌표가 있고 viewport의 좌표가 있다. getBoundingClientRect는 viewport좌표 이용.
: 스크롤 정도 알고 싶으면 pageYOffset (or 오래된 브라우저에서는 scrollTop) 이용

- 스크롤
ex. window.scrollTo(0, 1000);
    //(x,y)
    => 스크롤 제어 가능

- 스크린의 크기
~> 모니터의 크기 : screen.*
~> 브라우저 뷰포트 크기 :window.inner*



### 이벤트
- js 개발자는 어떤 일이 발생했을 때 실행 되어야 하는 코드를 등록하고, 브라우저는 그 일이 발생했을 때 등록된 코드를 실행하게 된다. "이벤트 프로그래밍"

- event target
: target은 이벤트가 일어날 객체를 의미한다. 아래 코드에서 타겟은 버튼 태그에 대한 객체가 됨.

- event type
: 이벤트의 종류를 의미한다. (ex. click / scroll / mousemove)
(https://developer.mozilla.org/en-US/docs/Web/Events)

- event handler
: 이벤트가 발생했을 때 동작하는 코드

#### 이벤트 등록
1. 인라인 방식
- 이벤트를 이벤트 대상의 속성으로 지정
ex. <input type="button" onclick="alert('Hello world, '+this.value);" value="button">
- 장점 : 이벤트의 소재를 파악하는 것이 편리
- 단점 : 정보인 HTML과 제어인 JavaScript가 혼재된 형태. 그리고 복잡한 거는 쓰기가 어렵다.

2. 프로퍼티 리스너 방식
- 인라인 방식에 비해서 HTML과 JavaScript를 분리할 수 있다는 점에서 선호되는 방식이지만 뒤에서 배울 addEventListener 방식을 추천

ex. t.onclick = function(){alert ("Hello World!");}

3. addEventListener
- 이벤트를 등록하는 가장 권장되는 방식
- 여러 이벤트 추가 가능
- 복수의 엘리먼트에 하나의 리스너를 등록해서 재사용
: ie8이하에서는 호환되지 않는다. ie에서는 attachEvent 메소드를 사용


### 이벤트 전파 : 버블링 &캡쳐링
- Capturing: 부모 -> 자식 이벤트 발생
- Bubbling: 자식 -> 부모 이벤트 발생
ex. document.getElementById('target').addEventListener('click', handler, false);
document.querySelector('fieldset').addEventListener('click', handler, false);
document.querySelector('body').addEventListener('click', handler, false);
document.querySelector('html').addEventListener('click', handler, false)
//Bubbling, true일 때는 Capturing

ex. function stophandler(event){
    var phases = ['capturing', 'target', 'bubbling']
    console.log(event.target.nodeName, this.nodeName, phases[event.eventPhase-1]);
    event.stopPropagation();
}
//document.querySelector('body').addEventListener('click', stophandler, false); 하면 이벤트 멈춤

#### 기본 동작의 취소
- 웹 브라우저의 구성요소들은 각각 기본적인 동작 방법을 갖고 있음
: 텍스트 필드에 포커스를 준 상태에서 키보드를 입력하면 텍스트가 입력된다.
: 폼에서 submit 버튼을 누르면 데이터가 전송된다.
: a 태그를 클릭하면 href 속성의 URL로 이동한다
1. inline
: return = false이면 기본 동작 취소
ex. <a href="http://opentutorials.org" onclick="if(document.getElementById('prevent').checked) return false;">opentutorials</a>

2. Property
: return = false이면 기본동작 취소!
ex. document.querySelector('a').onclick = function(event){
        if(document.getElementById('prevent').checked)
            return false;
    };

3. addEventListener
ex. document.querySelector('a').addEventListener('click', function(event) {
      if (document.getElementById('prevent').checked){
            event.preventDefault();
      }
});

### 이벤트 타입
#### 폼
- Submit - 폼의 정보를 서버로 전송
ex. var t = document.getElementById('target');
      t.addEventListener('submit', function(event){
      if(document.getElementById('name').value.length === 0){
            alert('Name 필드의 값이 누락 되었습니다');
            event.preventDefault();
      }
      });

- Change - 폼 컨트롤 값이 변경되었을 떄 발생
ex. var t = document.getElementById('target');
t.addEventListener('change', function(event){
    document.getElementById('result').innerHTML = event.target.value;
});

- Blur - 엘리먼트에서 포커스가 사라졌을 때
- Focus - 엘리먼트에 포커스가 생겼을 때

#### 문서 로딩
- 웹페이지를 programming적으로 제어하기 위해서는 웹페이지의 모든 요소에 대한 처리가 끝나야 함. 이것을 알려주는 이벤트가 load, DOMContentLoaded이다

- script태그를 head에 넣었을 떄, 
ex. window.addEventListener('load', function(){
      var t = document.getElementById('target');
      console.log(t);
      })

- load 이벤트는 문서내의 모든 리소스(이미지, 스크립트)의 다운로드가 끝난 후에 실행된다. 이것을 에플리케이션의 구동이 너무 지연되는 부작용을 초래할 수 있음
ex. window.addEventListener('DOMContentLoaded', function(){
                console.log('DOMContentLoaded');
            })
//DOMContentLoaded는 문서에서 스크립트 작업을 할 수 있을 때 실행되기 때문에 이미지 다운로드를 기다릴 필요가 없다.


#### 마우스 이벤트
- click
- dblclick
- mousedown: 마우스 누를 때
- mouseup: 마우스 뗄 때
- mousemove: 마우스 움직일 때
- mouseover: 마우스에 엘리먼트에 진입할 때
- mouseout: 마우스가 엘리먼트에서 빠져나갈 때
- contextmenu: 컨텍스트 메뉴(오른쪽 clk)가 실행될 때

- 키보드 조함 (특수키 눌러진 상태 감지해야 하면)
ex. event.shiftKey
ex. event.altKey
ex. event.ctrlKey

- 마우스 포인터 위치
ex. event.clientX
ex. event.clientY

ex. function Mouse_handler(event){
            var info = document.getElementById('elm'+event.type);
            var time = new Date();
            var timestr = time.getMilliseconds();
            info.innerHTML = (timestr);
            if(event.altKey){
                document.getElementById('elmaltkey').innerHTML = timestr;
            }
            if(event.ctrlKey){
                document.getElementById('elmctrlkey').innerHTML = timestr;
            }
            if(event.shiftKey){
                document.getElementById('elmshiftKey').innerHTML = timestr;
            }
            document.getElementById('elemclientx').innerHTML = event.clientX;
            document.getElementById('elemclienty').innerHTML = event.clientY;
};

#### jQuery 이벤트
- pure JS VS. jQuery
ex. var target = document.getElementById('pure');
    if(target.addEventListener){
        target.addEventListener('click', function(event){
            alert('pure');
        });
    } else {
        target.attachEvent('onclick', function(event){
            alert('pure');
        });
        //Vanilla JS
      

ex. $('#jquery').on('click', function(event){
        alert('jQuery');
    })
    //jQuery 사용 시

- 코드 분량에 큰 차이 있음!
: jQuery는 크로스 브라우징 알아서 해주고
: 이벤트를 보다 적은 코드로 구현 가능케 함

#### jQuery - 'ON'
- on API는 jQuery에서 가장 중요한 이벤트
- documentation 참고
ex. .on(events [,selector][, data], handler(eventObject))
~> event는 등록하고자 하는 이벤트 타입 지정 - ex.'click'
~> selector는 이벤트가 설치된 엘리먼트의 하위 엘리먼트를 이벤트 대상으로 필터링함
~> data는 이벤트가 실행될 때 핸들러로 전달될 데이터를 설정함
~> handler는 이벤트 핸들러 함수

- selector파라미터는 이벤트 대상을 필터링
ex. $('ul').on('click','a, li', function(event){
        console.log(this.tagName); });

- late binding - 아직 존재하지 않는 element에 대해 이벤트 등록
ex.  $('body').on('click','a, li', function(event){
        console.log(this.tagName); });

- 다중 바인딩
ex . $('#target').on('focus blur', function(e){
        $('#status').html(e.type); })

ex. $('#target').on({
        'focus' : function(e){ ...},
        'blur': function(e){...}{)}

- 이벤트 제거
ex. $('#target').on('focus blur', handler)
  $('#remove').on('click' , function(e){
    $('#target').off('focus blur', handler);


### 네트워크통신
#### AJAX!!
: 웹브라우저는 대단히 정적인 시스템이었다. 내용이 바뀌면 페이지 새로고침을 해서 내용을 새롭게 변경해야 했다. 이것은 웹이 전자 문서를 염두에 두고 고안된 시스템이기 때문에 당연하게 생각 되었다

: 그러나 AJAX 도입되면서 바뀜. AJAX는 웹 브라우저와 웹 서버가 내부적으로 데이터 통신을 하게 하여 변경된 결과를 웹페이지에 리로딩 없이 반영

: Asynchronouse JavaScript and XML = 비동기적 자바스크립트 & XML! '자바스크립트 이용, 비동기적으로 서버와 브라우저가 데이터를 주고 받는 형식을 의미.' 이 때 사용하는 API가 XMLHttpRequest인데, 요즘은 JSON 더 많이 사용함

#### JSON
- JSON(JavaScript Object Notation)이란 JS에서 객체를 만들 때 사용하는 표현식. 이 방식은 사람도 기계도 이해하기 쉽고 용량도 적은것이다.최근엔 XML을 대체해 설정의 저장이나 데이터 전송 등에 많이 쓰인다.

: ECMAScript5에는 JSON 공식적으로 지원하는 API포함
: JSON.parse()
~> 인자로 전달된 문자열을 자바스크립트 데이터로 변환
: JSON.stringify()
~> 인자로 전달된 자바스크립트의 데이터를 문자열로 변환

- AJAX & JSON
: JSON의 진가는 서버와 통신을 할 떄 드러난다.
: AJAX의 수업을 조금 개조해서 타임라인의 항목을 리스트로 표현하는 앱을 만들어보자

ex. var _tzs = xhr.responseText;
var tzs = _tzs.split(',');
var _str = '';
//예전 방식 ~> 변환을 해줘야했음 왜냐하면 서버<->JS에서 배열 전송 불가했기에

//(PHP의 배열을 클라이언트로 전송하기 위해서 콤마로 구분된 문자열을 만들었다. 자바스크립트에서는 이를 받아서 콤마를 구분자로 다시 배열로 만들었다. )

~> 이 예제를 JSON화 시켜보자





#### AJAX - jQuery
- 다큐멘테이션 ~> jQuery ajax
ex. jQuery.ajax(url [,settings])

- http://api.jquery.com/jQuery.ajax

- 옵션
: data - 서버로 데이터를 전송할 때 사용
: dataType - 서버측에서 전송한 데이터를 어떤 형식의 데이터로 해석할 것인가를 지정. xml, json, script, html. 형식을 지정하지 않으면 jQuery가 알아서 판단
: success - 성공했을 때 호출할 콜백을 지정
ex. Function( PlainObject data, String textStatus, jqXHR jqXHR )
: type - 데이터를 전송하는 방법을 지정. get, post를 사용할 수 있음

- 복습 원하면 https://opentutorials.org/course/1375/6851


#### 예제
1. 유투브 재생목록 총 재생 시간 계산
- HTML 읽어서 계산하기

2. WordCounter.js
- Javascript 코드를 raw로 열어서 ctrl+a해서 전체선택한 후, copy를 하고, ctrl+d로 북마크 추가
- 북마크 URL에 js코드를 붙여넣으면 됨

- note. url에 javascript:<JS Code>하면 JS실행됨
ex. javascript:alert('Hello World!!')
ex. javascript:document.body.remove()

- "Bookmarklet" - 주소창에 javascript:입력시 자바스크립트를 실행할 수 있는 원리를 이용, 현재 페이지에 대한 다양한 기능을 처리
: various sites which make those for you









