opentutorials.org/module/2398/16117

# 겁나 빠른 웹 레시피

## 1. github를 웹호스팅으로 이용하기
#### 1. 인트로
- https://opentutorials.org/module/2398/16117

- github 이용 웹사이트 운영하기 1
- domain은 보통 돈을 냄
: but freenom같은 것은 무료로도 가능

#### 2. git을 이용해서 코드관리하기 2
- github desktop

#### 3. github.com으로 소스 코드 공유
- on github, create a new repository
- repository setting (on github desktop)에 유알엘 복사함
- publish눌러서 remote repository에 저장 (혹은 push!!)

#### 4. github page기능을 이용한 웹사이트 운영
- Github.com => Settings => Source => Master Branch
: published as a webpage!

#### 5. github page에 각자의 도메인 설정
- Google Free Domain Name
: Freenom

~> Services -> My Domain

- In Github.com, settings > custom domain
=> set up the part where "when the usre accesses the custom domain, lets Github know to send back the specific file contents back to the user" [Github => User]

- Settings > Custom Domain > Learn More: Specific DNS
~> add them to DNS Management on Freenom
=> set up "where the users access the specific DNS when they reach the custom domain"[User => GITHUB]


# 2. masonry 스타일 레이아웃 만들기
- columns{ column-count: 3 (or column-width: 300px;)}

# 3. 자바스크립트 없이 tree 만들기
- using checkbox, ul
- input[type="checkbox"]:checked~ul{
    display: none;
    }
- fontello
- icon size standardization

# 4. 링크를 버튼으로
- CSS사용
# 5. thumbnails
- background-size: cover / contain
- background-repeat: no-repeat;
- background-position: center center;

# 6. 사진 중심의 webpage 만들기
- templated.co!
- masonry_layout.html 에 합침

# 7. 사용자의 정보 전송 받기 - Typeform
- form 대신 사용

# 8. Parallex (시차를 이용한 효과)
: 입체감 위함
: 가장 쉬운 방법
~> background-attachment: fixed;

# 9. 위지윅 에디터(CKeditor)
: 사용자가 직접 tag입력 없이 text를 쉽게 추가할 수 있게 돕는 것
: 여러 가지 open source가 있지만
: 우리는 CKeditor를 쓴다!

# 10. 댓글 서비스(disqus)
- 댓글을 직접 구현 x, 위젯 형태로 서비스에 삽입 가능케 하는 댓글 전문 서비스.

- 국내 서비스로는 https://www.livere.com/

# 11. 랜덤 이미지 생성기
- unsplash.com
- loremflickr.com
- pipsum.com
- unsplash.it

# 12. mojs - motion graphic lib
- mojs.io
- shape & burst
~> our basis!

- script inside body

- 변수는 {}
ex. radius: {0:50}
~> 반지름이 0에서 50까지 변화! 애니메이션 효과

- c1.play()
  c1.replay() => 애니메이션 실행 중에도 replay가능
  c1.generate().replay() => 리로드 안 해도 새롭게 generate됨

- parent: first.el 속성으로 종속 만들어줌

- 이외에 수많은 기능이 있으니 쳌!

# 13. 리로딩 없이 url 바꾸기(음악앱)
- 링크를 누르면 페이지 reloading 일어남
- 이를 완화하기 위하여 AJAX 등장
- 하지만 AJAX로 변경된 정보에는 url로 접근하는 것이 어려웠음
- HTML5에서는 이런 문제 해결 위해 history.pushState, history.replaceState라는 기능 추가

=> 페이지를 부분적으로 변경하면서 URL을 변경할 수 있는 방법에 대해 알아봄

- history
: 페이지 이동 역사를 담고 있는 객체
ex. history.back() ~> 이전에 있었던 page로 감

- history.pushState(state,title[,url])
~> adds an entry to the browser's session history stack
ex.history.pushState(null, null,'afjsdkf.html')

- jQuery

- pushState
: security 상 local file로 작동하면 안 됨
: bracket이용 서버로 오픈할 수 있음

- ex. $(document).ready(function () {
        //jQuery
        $(document).on('click', '.control nav a', function (e) {

            //url은 바뀌지만 실제로 페이지로는 가지 않게
            //history에 현재 url을 push
            //누른 이벤트 타겟에서 .html추출
            history.pushState(null, null, e.target.href)

            //e.target.href 중에 아티클 포함 결과를 현재 아티클에 로드
            $(article).load(e.target.href + 'article.content')
            e.preventDefault();
        })
        $(window).on("popstate", function (e) {

            //location.href는 현재 url을 반환
            $(article).load(location.href + 'article>.content')
        })
    })

- audiotool.com

- .pushState은 file://로는 securiy 문제로 안 됨
~> 'live server' extension 다운로드 후 함

# 14. 보편적이지 않은 코딩
- opentutorials.org/module/2503 다음에 확인!

# 15. 구글 API를 통해서 배우는 인증 (oauth 2.0)




