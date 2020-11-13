# References
- [https://guides.github.com/]https://guides.github.com/
- [https://lab.github.com/]https://lab.github.com/
- [git-scm.com]git-scm.com
- [gitimmersion.com]gitimmersion.com

# GitHub Guides
### (1) Hello World
: What is GitHub? / Create a Repository / Create a Branch / Make a Commit / Open a Pull Request / Merge Pull Request
: **Repository** - usually used to organize a single project! Can contain folders, files, images, videos, spreadsheets, data sets, etc [anything your project needs].
: **Branching** - is the way to work on different versions of a repository at one time.
: **Commit** - saved changes
: **Pull Requests** - proposing your changes and asking that someone will review and pull in your contribution and merge them into their branch.

### (2) Understanding the GitHub Flow
**a. Create a Branch**
: Main is Main.
: A branch name should be descriptive

**b. Add commits**
: "Commit" messages have to be clear!

**c. Open a Pull Request**
: at any required phase of the development
: @"mention" system
: Pull requests initiate discussion on your commit
: Useful for Open Source Projects
     -> if using **Fork & Pull Model**...
         : provides a way to notify project maintainers about the changes you'd like them to consider
     -> if using **Shared Repository Model**...
         : helps start a code review & conversation on proposed changes before they are merged into the main

**d. Discuss and Review your code**
: You can continue to push to incorporate your feedback to the reviewers' comments.
: Pull Request comments are written in Markdown (ex. embedding images & emojis, using pre-formmated texts, and other lightweight formatting easier)

**e. Deploy**
: You can deploy from a branch for final testing in production before merging to main.

**f. Merge**
: After the changes are verified in production, they can be merged to the main branch.
: Pull Requests keep a record of the historical changes
: Incorporate certain keywords are relevant

### (3) Forking Projects
: **Fork** - Process of contributing to someone else's project or using someone else's project as the starting point of your own
: **"Creating a fork"** - making a personal copy of someone else's project
: **Clone / Download** - to actually work on it. Clone with the command line or using GitHub Desktop.
: Make changes, then Stage, Commit, & Push.
: Pull Request!


### (4) Getting Started with GitHub Pages
: **Public webpages** hosted and published through GitHub.
<br>

1. Create Your Website
- Create a New Repository, named **username.github.io**
- Go to Setting - GitHub Pages.
- Click "Choose a Theme"
(Use the *Jekyll Theme Chooser* to load a pre-made theme)
- Write your own content
- Click "Commit changes"
<br>

2. Modify the content and style 
- Ex. Edit the title of your index page ~> Code - **_config.yml**

### (5) Git Handbook
1. Version Control System (VCS)
: tracks history of changes ~> which changes, by who, when and why?
<br>

2. Distributed Version Control System
: DVCSs allow full access to every file, branch, and iteration of a project, and allows every user access to history of changes
: no need for a constant connection to the central repository
<br>

3. Why Git?
: 2017 Survey @Stack Overflow ~> More than 70% of developers use Git
: Git shows the entire timeline of changes from the inception of a project
: Collaboration can happen in every time zone
: Changes are safely proposed using branches
<br>

4. What's a Repository?
: Repository (Git Project) ~> encompasses the entire collection of files & folders associated with a project, and each file's revision history (appearing as *commits*)
: allows ~> interaction with history, cloning, creating branches, committing, merging, comparing changes, etc.
<br>

5. Basic Git Commands
- *git init*: initializes a new repository
- *git clone*: creates a local copy of an existing project
- *git add*: stages a change (part 1/2)
- *git commit*: takes a snapshot and adds to the project history (part 2/2)
- *git status*: shows the status of changes [modified / untracked / staged]
- *git branch*: shows the branches being worked on locally
- *git merge*: merges lines of development together
- *git pull*: updates the local line of development with updates from its remote counterpart.
- *git upsh*: updates the remote repository with any commits made locally to a branch.

- More: [https://git-scm.com/docs](https://git-scm.com/docs)

- Working locally: *git clone* // *git remote -v*
- Saved Changes: *git add* // *git commit* // *git diff*
- Remote to Local: *git pull* = *git fetch* + *git merge* //  Local to Remote: *git push*
<br>

6. How GitHub fits in
: GitHub is a Git hosting repository
: provides tools for better codes through *command line features, issues (threaded discussions), pull requests, code reviews, use of a collection of apps
<br>

7. Models of Collaboration
- Shared Repository
- Fork & Pull
<br>