# POSIX CLI 1
opentutorials.org/module/3747

- POSIX는 서로 다른 운영체제를 같은 방법으로 조작하기 할 수 있도록 만들어진 표준입니다. 이 표준을 준수하는 운영체제로는 unix, macos가 있습니다. linux는 posix를 100% 따르고 있지는 않지만 거의 호환된다고 보시면 됩니다. 윈도우나 모바일 운영체제는 posix를 따르고 있지 않습니다. 

- 이 수업에서는 posix를 따르는 운영체제들을 Command Line Interface를 이용해서 다루는 방법을 살펴봄.

- GUI vs. CLI
- Portable Operating System Interface
=> POSIX
=> Unix, Linux, MacOS

=> cf. Windows ~> CMD / PowerShell이라는 독자적인 방법
~> 호환이 되지 않음
~> 하지만 emulator를 통해 윈도우도 POSIX와 동일한 방법으로 제어 가능

- 명령어 실행 환경준비
1. POSIX 기반
: 준비 x
: terminal 켜면 됨
2. Windows / Android / iOS
(1) Emulator 설치
(a) Windows
: Google "POSIX emulator"
~> Cygwin 유명
~> Git Bash (Git설치 시 생김)

(b) Android
: Termux를 구글플레이 통해서 설치!
: hacker's keyboard 설치해서 Ctrl+# 할수도 있음

(2) POSIX server을 구성하고 그 서버에 원격으로 접속함 (Secure Shell 혹은 ssh)이용

- 수업의 목적

: File,Directory에 대한 CRUD


- 디렉토리 사용
: pwd - print working directory
: / - root directory
: ~ - home directory
: cd - change directory
: ls - list
: --help - simple manual
: man command - manual
: ls - l - list in long format
: touch - make empty file
: .filename - hidden file (in POSIX)
: ls -a - show all files(incl. Hidden)
: ls -al (both -a and -l options used!)
: mkdir - make a directory
: ./ - current dir
: mv - move (rename)
: rm -r - remove dir
: ../ - parent dir

- CLI에서 파일 편집하는 프로그램 중 인기있는 것 - nano

ex. $ nano
ex. $ nano hello.txt
ex. $ cat hello.txt
    hello world!

- 순서대로 실행하기!

ex. mkdir dummy
ex. cd dummy
ex. touch hello.txt
ex. cd ..
ex. ls -R (하위 파일까지 보여줌)

: 이걸 순서대로 시키려면
ex. mkdir dummy;cd dummy;touch hello.txt;cd ..;ls -R

- 자동화 - 실패하면 멈추기
: 선행 명령어가 수행됐을 때만 그 이후 명령어를 실행
ex. mkdir dummy&&cd dummy&&touch hello.txt&&cd ..&&ls -R

- 수업을 마치며..

1. 쉘 스크립트 공부하면 자동화 가능

2. package manager: 다른 사람이 만든 package[program]을 설치하는 것

~> UNIX: apt-get,yum
~> MacOS: homebrew
~> Windows: chocolatey 등 사용

3. Maintain
: 컴퓨터가 무엇으로 이루어졌는 지 공부
~> data (storage, memory) +processor
~> storage: hard disk, ssd 등 : 용량 크고 비휘발성 but 느림
~> memory: RAM(특성 반대)
~> processor: CPU

=> 이 두 가지가 어떻게 효율적으로 사용되고 있는 지 보여주는 것이 "top"
~> 이를 더 보기 좋게 만든 것이 "htop"

- 컴퓨터 관리 파악 시 computer architecture study!

4. Network


