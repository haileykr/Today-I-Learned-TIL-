## Section 2: Python Setup

#### 7\. Installing Python (Step by Step)

-   Python: 1991, Guido Van Rosssum
-   Advantages:

1.  easy
2.  typically involves less codes
3.  syntax is easier to read (ex. Python uses "White Space" or indentation, instead of curly braces)
4.  utilized by every major technology company
5.  huge amount of additional open-source libraries (already has a lot - "batteries included" + on top of that, additional libaries available)

-   Anaconda + Jupyter  
    

#### 8\. Running Python Code

-   Several ways to run Python code
    
-   3 Main Types of Environments
    

1.  Text Editors
    -   General editors for any text file
    -   Work with many file types (ex. .py, .html)
    -   Can be customized with _plug-ins_ and _add-ons_
    -   Most are not designed with only Python in mind (ex. Python-specific functions, etc. need to be downloaded as add-ons)
    -   Most popular: **Sublime Text, Atom**
2.  Full IDEs
    -   Development Environments designed specifically for Python
    -   Larger programs (i.e. larger size vs. text editors - light, and gets heavy as more plug-ins)
    -   Only community editions are free (vs. Pro version)
    -   Designed specifically for Python, lots of extra functionality
    -   Most popular: **PyCharm, Spyder**
3.  Notebook Environments
    -   Great for learning
    -   See **Input & Output** next to each other (-> Good for learning!)
    -   Support **in-line markdown notes**, visualizations, videos, and more
    -   Special file format, not .py (.ipynb)
    -   Most popular: **Jupyter Notebook**

\->> **Note**: DE is a personal choice!!

-   We will make a .py file in Sublime Text, and run the same codes in Jupyter

_Using Sublime Text and CMD_

1.  Create a .py file
2.  Open CMD
3.  Change directory to where the file is saved
4.  In Command Line, type _python hello.py_

_Using Jupyter_

1.  Launch Anaconda Navigator and select Jupyter  
    (Note that Jupyter opens up locally and does not require Internet connection)
2.  We will use the **NOTEBOOK** system!
3.  File - New - Notebook // Python  
    Note: Notebook is a cell-based system

#### 9\. Getting the Course Materials

-   Use the link

#### 10\. Git and GitHub Flow

-   Git: A free & open source distributed version control system. - git-scm.com
-   GitHub: A webpage where you can publish your Git repositories and collaborate with others
-   Check  
    git-scm.com  
    guides.github.com  
    gitimmersion.com

## Section 3
#### 11. Introduction to Pyton Data Types
- Integers [int] : Whole numbers ex. 3
- Floating Points [float] : Numbers with a decimal point ex. 2.3
- Strings [str] : Ordered sequence of characters ex. "hello",'Sammy'
- Lists [list] : Ordered sequence of objects ex. [10, "hello"]
- Dictionaries [dict] : Unordered Key:Value pairs ex. {"mykey": "myvalue"}
- Tuples [tup] : Ordered immutable sequence of objects ex. (10,"hello",200.3)
- Sets [set] : Unordered collection of unique objects ex. {"a", "b"}
- Booleans [bool]: Logical value indicating True or False

#### 12. Python Numbers
 - Integers and Floating Points
 - Note that floaing points fundamentally can yield rounding errors
 (binary fraction vs. decimal fraction)

 #### 14. Variable Assignments
 - Best Practice (According to **PEP8**) - lowercase except for constants, no words with significant meaning in Python ex. "list", "str"