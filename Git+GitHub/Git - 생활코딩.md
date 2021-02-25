- 생활코딩 - 지옥에서 온 
## 1. Intro - GIT1!!

: GIT목적
1. 버전관리
2. 백업
3. 협업

- GIT 제품들

: GitHub  Desktop!
: Tortoise Git
: SourceTree

: git ~> original program

- Next Steps
~> Git2 (Version), Git3 (Backup), Git4 (Collaboration) in
Option 1. GIT CLI
Option 2. Github Desktop 
Option 3. TortoiseGit !

# GIT2 - CLI - 버전관리
opentutorials.org/module/3762

- cf. POSIX CLI 1 ~> opentutorials.org/module/3747 

- 설치

- Git Bash 사용 가능!

- 버전 관리 시작
ex. mkdir git/hello-git-cli
ex. git init . //현재 디렉토리 이니셜라이즈
~> .git 디렉토리 생김
~> 여기엔 버전 정보들이 담김
~> .git을 지우면 안 됨

- 버전 생성
: git init - initialize
: .git - git repository
: git status- working tree status
: git add - add to staging area
: git commit - create version
: git log - show version
: git log --stat
: git diff

- 예시
: nano hello1.txt ~> 1 넣음
: cat hello1.txt //1
: **git status**
// no commits yet
// untracked files: hello1.txt
~> 이 hello1.txt를 버전관리 하기 위해서는
~> stating area에 올려야 함
: git add hello1.txt
: git status

: git commit
(혹은 git commit -m "Message 1")

: git status
: git log

: nano hello1.txt
: cat hello1.txt //1\n2
: git status

: git add hello1.txt
: git status
: git commit -m "Message 2"

- Working tree - Staging Area - Repository

- 버전간 차이 보기
: nano hello1.txt //3 추가
: git diff
: git reset --hard //예전 버전 이후로 작업했던 내용들 다 리셋
: git log -p //자세히 보여줌
//디버깅에 유용함!

- Checkout과 시간여행
: git log //HEAD -> MASTER
: nano hello2.txt

: git add, git commit

: 여기서 이전 버전 commit id를 복사해
: git checkout <commit_id>하면
: hello1.txt만 있었던 예전 버전으로 회귀
~> HEAD가 이전 버전으로 돌아간 것을 알 수 있음

: git checkout master //최신상태로 회귀

- 보충수업
: git add . //현재 디렉토리 안 모든 파일 애드
: git add src //src라는 디렉토리 안 모든 파일 애드
: git commit -am "4" //add와 commit을 한번에(단 이미 tracked되는 파일들만)

: git config --global core.editor "vim" //default editor를 "vim"으로 변환

- git 버전 삭제 - git reset
: git reset --hard - 버전도 회귀하고 수정하고 있던 것도 지움
: git reset --soft - 버전은 회귀하되 수정하고 있던 건 그래도 둠
: there are other options too!

- git 버전 되돌리기 - git revert
: git revert할 때에는, 이젠 더이상 사용하지 않을 버전의 id (회귀할 버전 id가 아닌)을 넣어줌
: git revert id_of_3
// 버전 1, 2, 3이 있었다고 하고,
// git revert id_of_3을 했을 때
// git log를 하면
// Revert '3', '3', '2', '1'
// 이런식으로 revert했었던 기록까지 뜨고,
// 현재 우린 버전2 로 가 있는 것을 볼 수 있음



- .gitignore - 무시하고 싶은 목록을 적음
- branch
- tag를 이용하면 복잡한 commit id를 몰라도 됨

## GIT3 - CLI branch & conflict




