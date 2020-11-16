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

 - Python : **"Dynamic Typing"** ~> i.e. you can reassign variables to different data types
 vs. "Statically-Typed"
 ex. my_dogs = 2
 my_dogs = ["Sammy", "Frankie"]
 - type(variable) : to check data type
 
 #### 15. Introduction to String
 - Strings are "ordered sequence"
 ~> can use indexing and slicing
 - h  e  l  l  o
   0  1  2  3  4 (Index)
   0 -4 -3 -2 -1 (Reverse Indexing)
- ex. print('hello \n world')
    \n for a new line
  ex. print ('hello \t world')
    \t for a tab
- Slicing : [start:stop:step]
ex. mystring = "Hello World"
mystring[-1] ~> 'd'
mystring[0] ~> 'H'

mystring[2:] ~> 'llo World'
mystring[:3] ~> 'Hel'
mystring[0:3:2] ~> 'Hl'
mystring[::3] ~> 'HlWl'
mystring[::-1] ~> 'dlroW olleH'

#### 17. String Properties and Methods
- Immutability
ex. name = "Sam"
name[0] = 'P' ~> does not work
instead,
last_letters = name[1:]
'P' **+** last_letters ~> works! *String Concatenation*
- x.upper()
ex. x = x.upper()
- x.split() : split string based on white space or assigned letter
ex. x = 'Hello this is a string'
x.split() ~> ['Hello', 'this', 'is', 'a', 'string']
x.split('i') ~> ['Hello th', 's', 's']

#### 19. String Formatting for Printing
- *String Interpolation*: formatting strings for printing variables  in them
1. .format() method
ex. print('This is a string {}'.format('INSERTED'))
~> This is a string INSERTED
ex. print('The {} {} {}'.format('fox', 'brown', 'quick'))
~> The fox brown quick
ex. print('The {2} {1} {0}'.format('fox', 'brown', 'quick'))
~> The quick brown fox
ex. print('The {q} {b} {f}'.format(f='fox',b='brown',q='quick'))
~> The quick brown fox


- Float formatting follows "{value:width.precision f}"
ex. result = 100 / 777 = 0.1287001287001287
print("Result: {r:1.3f}".format(r=result))
~> Result: 0.129
<br>
2. f-strings (formatted string literals)
ex. name = 'Jose'
print('Hello, his name is {}'.format(name))
print(f'Hello, his name is {name})

#### 21. Lists in Python
- Ordered sequences that can hold a variety of object types
ex. [1, 2, 3, 4, 5]
ex. mylist = ['STRING', 100, 23.2]
<br>

**len()**
ex. len(mylist) ~> 3
ex. mylist[0] ~> 'STRING'
ex. mylist[1:] ~> [100, 23.2]
<br>

**+**
ex. anotherlist = ['three', 'eleven']
mylist + anotherlist ~> ['STRING', 100, 23.2, 'three', 'eleven']
ex. mylist[0] = 'string'
mylist ~> ['string', 100, 23.2]
<br>

**append() AND pop()**
ex. mylist.append('six')
~> ['string', 100, 23.2, 'six']
ex. mylist.pop()
~> 'six'
ex. mylist
~> ['string', 100, 23.2]
ex. mylist.pop(0)
~> 'string'
ex. mylist
~> [100, 23.2]
<br>

**sort() AND reverse()**
ex. newlist = ['a', 'c', 'b']
numlist = [3, 6, 2]
ex. newlist.sort()
~> ['a', 'b', 'c']
~> **note that it does not return anything though!**
~> therefore, sorted_list = newlist.sort()
then sorted_list is **None**
~> newlist.sort()
sorted_list = newlist

ex. numlist.reverse()
~> [6, 3, 2]

#### 23. Dictionaries in Python
- Unordered mappings for storing objects
- Key-value paring
- this allows grabbing objects w/o needing to know the index location
- {'key1':'value1',
'key2':'value2'}
- **Dictionaries**: Objects retrieved by key name. Unordered and cannot be sorted
vs. **Lists**: Objects retrieved by location. Ordered Sequence and can be indexed and sliced
<br>
- ex. my_dict = {'a':'b', 'c':2}
my_dict ['c'] ~> 2
- Nested values are okay too!
ex. example = {'k1':123, 'k2':[0,1,2], 'k3':{'insideKey':100}}
ex. example['k2'] ~> [0,1,2]
ex. example['k3']['insideKey'] ~> 100
ex. example['k2'][1] ~> 1
<br>
- Addition is simple
ex. my_dict['k3'] = 100
my_dict ~> {'a':'b','c':2,'k3':100}

ex. my_dict['c']=211
my_dict ~> {'a':'b','c':211,'k3':100}

ex. my_dict.keys()
~> dict_keys(['a','c','k3'])
my_dict.values()
~> dict_values(['b',211,100])

my_dict.items()
~> dict_items([('a','b'), ('c',211), ('k3', 100)])
<br>

#### 25. Tuples in Python
- Similar to lists, but these are **IMMUTABLE**
ex. t1 = (1, 2, 3)
ex. t2 = ('one', 2.215)
ex. t2[0] ~> 'one'
ex. t3 = ('a','a','b')
ex. t3.count('a') ~> 2
ex. t3.index('a') ~> 0

- Good for maintaining _Data Integrity_
<br>

#### 26. Sets in Python
- Unordered Collections of **unique** elements
- there can only be one representative of the same object
ex. myset = set()
ex. myset ~> set()
ex. myset.add(1)
ex. myset ~> {1}
ex. myset.add(1)
ex. myset ~> {1}

- Useful to **Cast a list to a Set** for unique values
ex. mylist = [1,1,1]
ex. set(mylist)
~> {1}

#### 27. Booleans in Python
- Operators that allow you to convey **True** or **False** statements

#### 28. I/O w/ basic files in Python
- NOTE. the following code only works in Jupyter
ex. %%writefile myfile.txt
Hello this is a text file
ex. myfile = open('myfile.txt')
ex. myfile.read()
- Then, if myfile.read() again, **''** is returned
~> b/c the cursor is pointing at the end of the file now
- Reset the curser to be at the beginning!
ex. myfile.seek(0)
ex. contents = myfile.read()

ex. myfile.readlines()
~> reads *line by line*

- **pwd**: current loc

- **File Locations**
*Windows*
ex. myfile = open("C:\\Users\\UserName\\Folder\\test.txt"
- tip!! double slashes so that Python does not confuse it with \n, \t, and so on.
<br>

_MacOS_ or _Linux_
ex. myfile = open("/Users/YourUserName/Folder/myfile.txt")

- don't forget to **close** the file afterwards though!
ex. myfile.close()

- or you can use **with**
ex. with open('myfile.txt') as my_new_file:
        contents = my_new_file.read()


- **Write** or **Overwrite**
: NOTE. in Jupyter, *shift + tab* shows you instructions
ex. with open('myfile.txt', mode = 'r') as myfile:
        contents = myfile.read()
ex. myfile.write('~~~')

- mode = 'r': read only
= 'w': write only (overwrites or creates new!)
= 'a': append only
= 'r+': reading and writing
= 'w+': writing and reading (overwrites or creates new!)



