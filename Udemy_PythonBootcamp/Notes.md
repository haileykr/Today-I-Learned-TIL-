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

#### RESOURCES FOR PRACTICES
1. **Basic Practice**
http://codingbat.com/python

2. **More Mathematical (and Harder) Practice**
https://projecteuler.net/archives

3. **List of Practice Problems**
http://www.codeabbey.com/index/task_list

4. **A SubReddit Devoted to Daily Practice Problems**
https://www.reddit.com/r/dailyprogrammer

5. **Very Tricky with very few hints and touch (not for beginners but still interesting!!)**
www.pythonchallenge.com
<br>



## Section 4 -  Python Comparison Operators
#### 32. Comparison Operators in Python
ex. 2 == 2 ~> True
ex. 'hello' == 'bye' ~> False
- **case-sensitive**!
ex. 'hello' == 'Hello' ~> False
ex. 2.0 == 2 ~> True
ex. 2 != 2.1 ~> True
<br>


#### 33. Chaining Comparison Operators in Python with Logical Operators
- **and, or, not**
ex. 1< 2 and 2< 3
ex. 1 < 2 < 3
ex. not 1==1 ~> False
asking for an opposite boolean!
<br>

## Section 5 - Python Statements
#### 34. If Elif and Else Statements in python
- **control flow** - when we want certain codes to execute only when a condition is met
- Control Flow syntax makes use of colons and indentation (whitespace)
- if some_condition:
    #execute some code
elif some_other_condition:
    #do something different
else:
    #do something else
<br>

#### 35. For Loops
- Syntax
my_iterable = [1,2,3]
for item_name in my_iterable:
    print(item_name )
ex. mystring = 'Hello'
for letter in mystring:
    print(letter)
<br>
- **'_'** as a variable name
ex. for _ in mystring:
    print(letter)

- for *Tuple*
ex. tup=(1, 2, 3)
for item in tup:
    print(item)
- for a List of Tuple
mylist = [(1,2), (3,4), (5,6), (7,8)]
len(mylist) ~> 4
ex. for item in mylist:
    print(item)
    ~> (1,2)
    (3,4)
    (5,6)
    (7,8)

*Tuple Unpacking*
ex. for a,b in mylist:
    print(a)
    print(b)
    ~> 1
    2
    3
    4
    5
    6
    7
    8


<br>

- For **Dictionaries**
ex. d = {'k1':1, 'k2':2, 'k3':3}
for item in d:
    print(item)
~> k1
k2
k3
~> only gettinng *KEYS!!*

for item in d.items():
    print(item)
~> ('k1', 1)
('k2', 2)
('k3', 3)
~> iterating through items

for key, value in d.items():
    print(value)
~> 1
2
3

for value in d.values():
    print(value)
~> 1
2
3
- Remember again that dictionaries are **unordered**
<br>

#### 36. While Loops
- Useful tools with Loops
- **break, continue, pass**
1. break
: Breaks out of the current closest enclosing loop.
2. continue
: Goes to the top of the closest enclosing loop.
3. pass
: Does nothing at all

ex. x = [1, 2, 3]

for item in x:
    #comment - placeholder
    pass

ex. mystring = 'Sammy'
for letter in mystring:
    if letter == 'a':
        continue
    print(letter)

for letter in mystring:
    if letter == 'a':
        break
    print(letter)
<br>

#### 37. Useful Operators
- range()
ex. for num in range(3):
        print(num)
    ~> 0
    1
    2

ex. for num in range(1,3):
        print(num)
    ~> 1
    2

ex. for num in range(1,3,2):
        print(num)
    ~> 1

ex. list(range(1,3,2)) to make it a List!!

- Enumerate
ex. index_count=0
word = 'abcde'
for letter in word:
    print(word[index_count])
    index_count += 1

ex. for item in enumerate(word):
        print(item)
    ~> Tuples!
    (0, 'a')
    (1, 'b')
    (2, 'c')
    (3, 'd')
    (4, 'e')

ex. for index, letter in enumerate(word):
        print(letter)
    ~> a
    b
    c
    d
    e

- Zip
ex.mylist1 = [1, 2, 3], 0, -1, -2]
mylist2 = ['a', 'b', 'c']

for item in zip(mylist1, mylist2):
    print(item)

~> (1, 'a')
(2, 'b')
(3, 'c')

ex. list(zip(mylist1, mylist2))
~> list of tuples

- Boolean
ex. 'x' in ['x', 'y', 'z']
~> True

ex. 'a' in 'apple'
~> True

ex. 'mykey' in {'mykey': 358}
~> True

ex. d = {'mykey': 358}
358 in d.keys()
~> True

- Min and Max
ex. mylist = [10,20,30,40,1001]
ex. max(mylist)
~> 1001

- Random
ex. from random import shuffle
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
shuffle(mylist)
~> mylist is shuffled!

- Random Integer
ex. from random import randint
ex. randint(0, 100)

- Input
Note. always receives as STRING!
ex. result = input('Enter a number here: '_)

#### 38. List Comprehension
- Unique way of quickly creating a List
ex. mystring = 'hello'

for letter in mystring:
    mylist.append(letter)


ex. mylist = [letter for letter in mystring]

ex. mylist = [num+1 for num in range(0,2 ]

ex. mylist = [x for x in range(0,2) if x%2 ==0]

ex. results = [x if x%2==0 else 'ODD' for x in range(0,2) ]

ex. mylist = [x*y for x in [2,4,6] for y in [1,10,1000] ]

- though READABILITY   first
<br>

## 6. Methods and 
#### 41. Methods and Python Documentation
- help(function)
- docs.python.org
<br>

#### 42. Function
- functions allow us to create blocks of code that can be easily executed many times, without needing to constantly rewrite the entire block of code
<br>

#### 43. Def Keyword
- def name_of_function():
        ''' //three quotation marks indicate docstring
        Docstring explains function
        '''
        print("Hello")
- snake casing - all lowercase with underscores
<br>

#### 44. Basics of Functions
ex. def say_hello(name='Default'):
        print(f'Hello {name}')
ex. say_hello('Jose'), say_hello()
ex. def add_num(num1, num2):
        return num1+num2
<br>

#### 45. Functions with Logics
- ex. #return true if any number is even inside a list
<br>

#### 46. Tuple Unpacking
ex. stock_prices = [('A',200),('G',100),('M',300)]
ex. def stock_check(price):
current_max = 0
stock=''

for a, b in stock_prices:
    if current_max < b:
        current_max = 0
        stock = a
#return
return (stock, current_max)

#### 47. Interactions between Functions
- 'Three Cup Monte' Game
ex. example = ['', '0', '']

from random import shuffle
shuffle(example)

def shuffle_list(mylist):
    shuffle(mylist)
    return mylist

shuffle_list(example)

def player_guess():
    guess=''
    
    while guess not in ['0','1','2']
    guess = input("Pick a number: 0, 1, or 2") //because input takes values as strings
<br>

#### 49. *args and **kwargs in Python
- *args: arguments
**kwargs: keyword arguments
~> a dictionary [of key-value pairs]

ex. def myfunc(*args):
        //*args is treated as a tuple
        return sum(args) * 0.05
    ~>can enter as many arguments as wanted

ex. def myfunc(**kwargs):
        if 'fruit' in kwargs:
            print('My fruit of choice is {}'.format(kwargs['fruit']))
        else:
            print('no fruit')

    myfunc(fruit='apple')
    ~> My fruit of choice is apple

    
ex. def myfunc(*args, **kwargs):
        print('I would like {} {}'.format(args[0], kwargs['food']))
    
    myfunc(10,20,30,veggies = 'celery', food='eggs')

- **EULER PROJECT**

<br>

#### 55. Lambda Expressions, Map, and Filter Functions
- Lambda expressions: ananymous, one-time-use function!

- map function: built-in
map(function, iterables)
ex. def square(qwerty):
        return qwerty**2
    my_nums = [1,2,3,4,5]
    for element in map(square, my_nums):
        print(element)
    list(map(square,my_nums))

- filter function: built-in
ex. def check_odd(qwerty):
        return qwerty%2 == 0
    my_nums = [1,2,3,4,5,6]
    list(filter(check_odd, my_nums))
    ~> [2,4,6]
    for n in filter(check_odd,my_nums): print(n)

- lambda function: built-in
ex. def square(qwerty): return qwerty**2
~> lambda qwerty: qwerty**2
ex. list(map( lambda qwerty:qwerty**2,my_nums))


<br>

#### 56. Nested Statements and Scope
- **LEGB RULE FORMAT**
- 1. Local: Names assigned in any way within a function (def or lambda)and not declared global in that fn
2. Enclosing function locals: Names in the local scope of any and all enclosing functions (def or lambda), from inner to outer
3. Global (module): Names assigned at the top-level of a module file, or declared global in a def within the file
4. Built-in (Python): Names preassigned in the built-in names module: open, range, SyntaxError, ...

ex. name = 'Abe'

def greet():
    name = 'Sammy' // (a)

    def hello():
        print('Hello ' + name + '!')
    hello()

greet()
:Hello Sammy!

- but with (a) commented out, we get Hello Abe

- ex. x = 10
def func(x):
    print(f'X is {x}')

    #Local Reassignment
    x = 20
    print(f'I just locally  changed x to {x})

ex. func(x)
~> x is 10
I just locally  changed x to 20
ex. print(X)
~> 10

- but with
def func( ):
    **global x** ~> grabbing the global!

local reassignment will affect the global variable


#### 58. Homework
- Useful Links
1. string module - (https://stackoverflow.com/questions/16060899/alphabet-range-in-python)[https://stackoverflow.com/questions/16060899/alphabet-range-in-python]
2. set comparison - (https://medium.com/better-programming/a-visual-guide-to-set-comparisons-in-python-6ab7edb9ec41)[https://medium.com/better-programming/a-visual-guide-to-set-comparisons-in-python-6ab7edb9ec41]


## 7. Milestone Project 1 - Tic Tac Toe
#### 62. Validate User Input
Validating User Input: ex. isdigit()
1. https://stackoverflow.com/questions/5424716/how-to-check-if-string-input-is-a-number
2. https://stackoverflow.com/questions/1265665/how-can-i-check-if-a-string-represents-an-int-without-using-try-except

#### 63. Simple Interaction
1. Display a list
2. Have a user choose an index position and an input value
3. Replace value at index position with user's chosen input value
<br>

#### 64. Actual Tic Tac Toe game!
- Some rules:
~ the board should be printed out every time a player makes a move
~ accept input of the player position & then place a symbol on the board
~ "numpad" to match numbers to the grid
7 8 9
4 5 6
1 2 3
~ to clear the screen between moves:
*from IPython.display import clear_output
clear_output()*
~> only works in Jupyter
~ in other IDE's, consider
*print('\n'*100)

1. Write a function that can print out a board
Set up your board as a list, where each index 1-9 corresponds with a number on a number pad
2. Ask the first player if he/she wants 'X' or 'O'
3. Write a function that takes in the board list object, a marker ('X'or 'O'), and a desired position (1-9)
4. Write a function that takes in a board and a mark (X or O) and then checks to see if that mark has won
5. Write a function that uses the random module to randomly decide which player goes first. 
Use random.randint()
6. Write a function which returns a boolean showing whether a space on the board is freely available
7. Write a function that checks if the board is full (True) and returns a boolean value
8. Write a function that asks for a player's next position (1-9) and then uses the function from Step 6 ot check if it's a free position. If it is, then return the position for later use.
9. Write a functino that asks the player if they wanna play again and returns a boolean True if they want to so.
10. Use the while loops and the functions to complete the program!
<br>

## 8. Object-Oriented Programming
#### 68. Object-Oriented Programming - Introduction
- OOP allows programmers to create their own objects which have methods & attributes
- Methods act as Functions
- OOP allows us to create code that is repeatable and organized
- Objects <-> Class

- Basic Syntax
class NameOfClass():
# Note. Class name is capitalized 
# vs. Function name was lower-case
#   __init__ allows you to create an instance of the actual object
    def __init__(self, param1, param2):
        self.param1 = param1
        self.param2 = param2
#   self is passed in to note that this isn't just a function, but is a method connected to the class
    def some_method(self):
        # perform some action
        print(self.param1)
<br>

#### 69. Attributes and Class Keyword
ex. mylist =[1, 2, 3]
ex. class Dog()):
        def __init__(self, breed, name, spots):

            # Attributes
            ## Convention to use the same name for All
            self.breed = breed

            self.name = name

            # Expect boolean T/F
            self.spots = spots


<br>
#### 70. OOP - Class Object Attributes and Methods
- class Dog():
    ## CLASS OBJECT ATTRIBUTE
    ## SAME FOR ANY INSTANCE OF A CLASS
    ## NO SELF
    species = 'mammal'

    def __init__(self, breed = 'Default!', name):
        self.breed = breed
        self.name = name

    #OPERATIONS / ACTIONS -- METHODS
    def bark(self, number):
        print("WOOF! My name is {} and the number is {}".format(self.name, number))
        
        
ex. my_sample = Dog(breed='Lab')
ex. type(my_sample) ~> __main__.Dog

ex. my_sample.breed ~> 'Lab'



ex. class Circle():
        pi = 3.14

        def __init__(self, radius = 1):
            self.radius = radius
            self.area = radius * radius * Circle.pi
        
        def get_circumference(self):
            return self.radius * self.pi * 2

        
<br>

#### 71. Inheritance and Polymorphism
- Inheritance: a way to make a new class using a class that is already defined
ex. Base Class
class Animal():
    def __init__(self):
        print("ANIMAL CREATED")
    
    def who_am_i(self):
        print("I am an animal")
    
    def drink_water(self):
        print("I am drinking water")
    


ex. #Derived Class
class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
        print("Dog Created")
    
    # to override
    def who_am_i(self):
        print("I am doggy!")


- Polymorphism
: different object classes sharing the same method name
ex. class Dog():
        def __init__(self, name):
            self.name = name
        def speak(self):
            return self.name + "says woof!"

ex. class Cat():
        def __init__(self, name):
            self.name = name
        def speak(self):
            return self.name + "says meow!"
            
ex. niko = Dog("niko")
    felix = Cat("felix")
    print(niko.speak())
    print(felix.speak())
    

ex. for pet in [niko, felix]:
        print(type(pet))
        print(type(pet.speak()))
    ~> <class '__main__.Dog'>
    ~> <class 'str'>
    ~> <class '__main__.Cat'>
    ~> <class 'str'>