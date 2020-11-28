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



- Abstract class: is not expected to be made of an instance
: only E as a base class
ex. class Animal():
        def __init__(self, name):
            self.name = name
        
        def speak(self): 
            raise NotImplementedError("Subclass must implement this abstract method")
        ~> when instance is made of Animal and speak() is called, return error

    class Dog(Animal):
        def speak(self):
            return self.name + "says woof"

<br>


#### 72. OOP - Special (Magic / Dunder) Method
- allows us to use some built-in funcitons
ex. len, print
- Special i.e. Magic i.e. Dunder Methods
ex. class Book():
      def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
      def __str__(self):
        return f"{self.title} by {self.author}"
      ~> made the "string representation function"

      def __len__(self):
        return self.pages
    
      def __del__(self):

        print("A book object has been deleted")

ex. b = Book('Python rocks', 'Jose', 200)
ex. print(b)
    ~> asks the string representation of b
ex. del b

<br>


#### 72. Challenge Example
ex. Account function
ex. class Account:
    
        def __init__(self, owner, balance):
            self.owner = owner
            self.balance = balance
        
        def __str__(self):
            return f"Account owner: {self.owner}\nAccount balance: ${self.balance}"
        
        def deposit(self, value):
            self.balance += value
            print(self)
        
        def withdraw(self, value):
            if value > balance:
                print("Not enough balance)
            else:
                self.balance -= value
                print(self)

<br>

## 9. Modules and Packages

#### 77. Pip Install AND PyPi
- Using PyPi with pip install
: PyPi is a repository for open-source third-party Python packages
: similar to RubyGems in the Ruby world, PHP's Packagist, CPAN for Perl, and NPM for Node.js
- So far we've only used the standard library
- "pip install" at CLI to install open-sourced packages on 
- By installing Python from python.org or through the Anaconda distribution, you also installed **pip**
- **pip** is a simple way to download packages at your command line, directly from the PyPi repository

- how to install the external packages
: Windows Users ~ Command Prompt
: MacOS / Linux Users ~ Terminal

ex. pip install requests 
ex. pip install colorama
ex. python
ex. from colorama import init
ex. init()
ex. from colorama import Fore
ex. print(Fore.GREEN + "qwerty")
ex. quit()


- ex. Google "Python Package for Excel"
ex. python-excel.org

<br>

#### 78. Modules AND Packages
- How to create our own modules and packages?
- Modules are just .py scripts that you call in another .py script
- Packages are a collection of modules
- Jupyter cannot be used here
- In a program, a module is called in!
  ex. from mymodule import my_func
        my_func()
    
- New folder called MyMainPackage, and SubPackage inside it
- in order for the computer to know that these are packages not just regular folders, we have to have a file titled "__init__.py" in both of them

- "some_main_script.py" in the main package, and "mysubscript.py" in the SubPackage

- To import a package,
"from MyMainPackage import some_main_script"
"from MyMainPackage.SubPackage import mysubscript"

<br>

#### 79. __name__ and "__main__"
- An often confusing part of Python is a mysterious line of code.
ex. if __name__ == "__main__"
- Sometimes, when you are importing from a module, you'd like to know whether a module function is being used as an import, or if you are using the original .py file of that module.
- ex. one.py
ex. two.py

- when a python script is run, all the commands @indentation level 0 are called
- __name__: built-in variable
- back of the hood, when
python one.py
a python script is directly run,
this built-in variable is assigned "__main__"
~> __name__ = "__main__"

- thus, when a python script is directly run  it is true that
__name__ == "__main__"
vs. being imported

- cf. one.py

- it is a very common structure
~> to define a bunch of functions then at the bottom under "if __name__ == '__main__': " run the functions in order

<br>

## 10. Error Handling
#### 80. Errors and Exception Handling
- Currently if there is any type of error in the code, the entire script will stop.
- We can use Error Handling to let the script continue with other code, even if there is an error.
- Three Keywords:
1. **try**: a block of code to be attempted (may lead to an error)
2. **except**: block of code will execute in case there is an error in **try** block
3. **finally**: a final block of code to be executed, regardless of an error

- ex. try:
        result = 10 + 10
      except:
        print("Hey it looks like you aren't adding numbers")
      else:
        print('Add went well!')
        print(result)


- ex. try:
        f = open('testfile', 'w')
        f.write("Write a test line")
    
      except TypeError:
        print("There was a type error")
    
      except OSError:
        print("Hey you have OSError")
      finally:
        print("always run")


- ex. def ask_for_int():
        while True:
            try:
                result = int(input("Enter a number"))
            except:
                print("Please enter number")
                continue
            else:
                print("Yes thank you")
                break
            finally:
                print('end of try/except/finally example')
<br>

#### 84. Pylint Overview
- there are severl testing tools and we will focus on two:
1. pylint ~> a library that looks at your code and reports possible issues!
2. unittest ~> built-in library will allow to test your own programs and check you are getting desired outputs
- pylint myexample.py -r y (report yes)

- how to use pylint to check your code for possible errors and styling
- Python as a set of style convention rules known as PEP 8
- afterwards we will explore how to test our code with the built-in unittest library
- for this lecture we will be creating .py scripts in sublime
- you can still use the associated notebook for code using the %%writefile jupyter command!

- in cmd, "pip install pylint"

- in text editor
ex. simple1.py

- **pylint**: rates your code, useful when working with others to keep up to the recommended coding formats&styles

<br>

#### 85. Running Tests with the Unittest Library

- when writing a test function,
it is always the best to go from simple to complex as the functions will run in order

- ex. cap.py
      def cap_text(text):
        return text.capitalize()

- ex. import unittest
      import cap #just created

      class TestCap(unittest.TestCase): #inheriting
        def test_one_word(self):
            text = 'python'
            result =  cap.cap_text(text)
            self.assertEqual(result,'Python')
        def test_multiple_words(self):
            text = 'monty python'
            result = cap.cap_text(text)
            self.assertEqual(result,'Monty python')
    
      if __name__=='__main__':
        unittest.main()
<br>

## 11. Milestone Project-2
#### 86. Warmup Project - "War"Card Game
- To contruct this game these are required:
1. Card Class
2. Deck Class
3. Player Class
4. Game Logic
- the "war" process can be repeted in this case of back to back ties

<br>

#### 87. Card Class
# CARD
# SUIT, RANK, VALUE
class Card:
    def __init__(self,suit,rank):
        self.suit = suit
        self.rank = rank
        self.value = values[rank]
        
    def __str__(self):
        return self.rank + "" of " self.suit

- to compare values in string, we will introduce a dictionary containing those
~> values = {'Two':2, 'Three':3, 'Four':4, 'Five':5, 'Six':6, 'Seven':7, 'Eight':8, 'Nine':9, 'Ten':10, 'Jack':11, 'Queen':12, 'King':13,'Ace':14}
~> put it at the top

ex. two_hearts = Card("Hearts","Two")
values[two_hearts.rank]
~>2 

- also include
these:
import random
suits = ('Hearts','Diamonds','Spades','Clubs')
ranks = ('Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace')

<br>


#### 88. Deck Class
1. Instantiate a new deck
~> Create all 52 Card objects
~> Hold as a list of Card objects
2. Shuffle a Deck through a method call
~> Random library shuffle() function
3. Deal cards from the Deck object
~>Pop method from cards list

- we will see that the Deck class has a list of Card objects
- This means that the Deck class will return Card class object instances, not just normal python data types

- ex. class Deck:
        def __init__(self):
            
            self.all_cards = []
            
            for suit in suits:
                for rank in ranks:
                    #Create the Card Object

                    created_card = Card(suit,rank)
                    self.all_cards.append(created_card)
        def shuffle(self):
            random.shuffle(self.all_cards)
            # shuffle method of the built-in random module
            # from random import shuffle
            then just call shuffle
            is also possible
            
            
        def deal_one(self):
            return self.all_cards.pop()
                    
- ex. new_deck = Deck()
  ex. for card_object in new_deck.all_cards:
        print(card_object)


<br>

#### 89. Player Class
~ this class to be used to hold a player's current cards list
~ a player should be able to add or remove cards from their "hand"
~ able to add a single card or multiple cards
~ Translating a Deck / Hand of cards with top and bottom to a Python list?

~ Player Class will have a self.all_cards list
~ A player "plays" a card from the top
  i.e.  player_cards.pop(0)
~ players will add card to the "bottom"
  i.e. card.append("new_card")
~ player adding multiple card using extend()
  i.e. new_cards = ["X","Z"]
  cards.extend(new_cards)
  ~> extend() merges two lists
  ~> don't use append here! it will mess up the list (["B","C", ["X","Z"]])


<br>

#### 90. Game Logic - Part1
~ there are lots of ways to implement the game logic
~ check out the notebook file
~ there r 3 situations:
1. Player One > Player Two
2. Player One < Player Two
3. Player One == Player Two

~ the way we will write this is with an if / elif / else within a while loop that assumes that a "war" has happened

~ at_war = False if the players resolve the match-up on the first drawn card, otherwise we will add card to the current cards on the table


<br>

#### 93. Milestone Project 2 Overview
- Black Jack Game
- For our version, we will have a computer dealer and a human player
1. Player places a bet
2. - Dealer starts with 1 card face up and 1 card face down
- Player starts with 2 cards face up
4. - Player goes first in game play.
- Player goal: Get closer to 21 than the dealer does
- Possible Actions: (1) HIT (Receive another card from DECK)
(2) STAY (Stop Receiving Cards)
- We will ignore actions like Insurance, Split, or Double Down
5. After PLAYER TURN, (1) if player is under 21, dealer then hits until they either beat the player or the dealer busts
(2) if player keeps hitting goes over 21,they bust and lost the bet! The game is over then and dealer collects the money
- Special Rules:
(1) Face Cards (Jack, Queen, King) count as a value of 10
(2) Aces can count as either 1 or 11 whichever value is preferable to the player
<br>

## 12. Python Decorators 
#### 98. Decorator Overview
- ex. Imagine you created a function:
def simple_func():
    # Do simple stuff
    # return something
- ex. Now you want to add some new capabilities to the function:
def simple_func():
    # Want to do more stuff!
    # Do simple stuff, return something
- you have now two options:(1)Add that extra code (functionality) to your old function
(2) Create a brand new function that contains the old code, and then add new code to that

- Python has __decorators__that allow you to tack on extra functionality to an already  _existing_ function

- They use the @ operator and are then placed on top of the original function

ex. @some_decorator
def simple_func():
    # Do simple stuff
    return something

- Function inside a function
ex. def hello(name='Jose'):
    print('The hello() function has been executed!')
    
        def greet():
            return '\t This is the greet() func inside hello!'
        
    return greet
~> we will use this concept as a building block for decorators

- Having a function as an argument
~> another building block!

ex. def hello():
        return 'Hello, World!'
    
    def other(some_other_func):
        print('Other code runs here!')
        print(some_other_func())


    other(hello)


- Now to decorator...
ex. def new_decorator(original_func):
        def wrap func():
            print('Some extra code, before the original function!')

            original_func()

            print('Some extra code, after the original function!')
        
        return wrap_func


ex. def needing_decorator():
        print('wanna be decorated!')
    
ex. decorated_func = new_decorator(needing_decorator)
    decorated_func()

OR
ex. @new_decorator
    def needing_decorator():
        print('wanna be decorated!')

=> THUS, @new_decorator is a switch to implement the decorator function or not!! (leave it there or comment it)

<br>

#### 99. Decorators Homework
- **FLASK** : web development framework with Python
~> uses decorators a lot
- check out their website
- check out 'view decorator'

- **DJANGO** : another popular web development FW

<br>



## 13. Python Generators
#### 100. Generators with Python
- Generator functions
: allow us to write a function that can send back a value and then later resume to pick up where it left off 
: this type of function is a generator in Python, allowing us to generate a sequence of values over time
: the main difference in syntax will be the use of a yield statement
: when a generator function's compiled, they become an object that supports an iteration protocol
: that means when they are called in your code, they don't actually return a value and then exit
: generator functions will automatically suspend and resume their execution and state around the last point of value generation
: the advantage is that instead of having to compute an entire series of values upfront, the generator computes one value and waits until the next value is calledfor.
: ex. range() function ~> doesn't produce an list in memory for all the values from start to stop. instead, it just keeps track of the last number and the step size, to provide a list of #'s.
~> if a user did need the list, they need to transform the generator to a list by list(range(0,10))
~> let's explore how to create our own generators!

: **thus, advantage with generators is that you don't waste the memory as much by 'generating' numbers one by one, not storing all of them at the same time**

- ex. def create_cubes(n):
        result = []
        for x in range(n):
            yield x**3

- ex. def simple_gen():
        for x in range(3):
            yield x
    
      for number in simple_gen():
        print(number)
    
      g = simple_gen()
      print(next(g))


- ex. for letter in s:
            print(letter)

      but next(s) does not work
    
      instead, s_iter = iter(s)
      next(s_iter) works cuz iter function makes a variable an iterable item

- **Generator Comprehension!!**
ex. my_list = [1,2,3,4,5]

gencomp = (item for item in my_list if item >3)

for item in gencomp:
    print(item)

~> 4, 5
vs. listcomp
= [~]

<br>

## 14. Advanced Python Modules
#### 103. Introduction to Advanced Python Modules
- Modules Covered:
1. Collections
2. OS module and Datetime
3. Math and Random
4. Python Debugger
5. Timeit
6. Regular Expressions
7. Unzipping and Zipping Modules

<br>

#### 104. Python Collections Module
- built-in, container of special data types
- ex. **Counter Class**
ex. **from collections import Counter**
ex. mylist = [1,1,1,2,2,3,3,3,3,3]
ex. Counter(mylist) ~> Counter({1:5, 2:4 ,3:7})
ex. Counter('Mississippi')
- ex. **Default Dictionary**
: when a WRONG key is called, it will automaticallya assign a default value instead of yielding a KeyError

ex. **from collections import defaultdict**
ex. d = defaultdict(lambda: 0) # 0 is the default
ex. d['correct'] = 100, works as a normal dictionary
ex. d['WRONG KEY'] ~> returns the value of 0 

- ex. **Named Tuple**
mytuple = (10, 20, 30)
mytuple[0] ~> 10
~> Named Tuple will have a "NAME" indices as well

ex. **from collections import namedtuple**
ex. Dog = namedtuple(#typename, #fieldname as a list)
ex. Dog = namedtuple('Dog', ['age','breed','name'])
ex. sammy = Dog(age=5, breed='Husky', name='Sam')
ex. type(sammy) ~> __main__.Dog
ex. sammy ~> Dog(age=5, breed='Husky', name='Sam')
ex. sammy.age ~> 5
ex. sammy.breed ~> 'Huskey'
ex. sammy.name ~> 'Sam'
ex. sammy[0] ~> 5

<br>

#### 105. Opening and Reading Files and Folders (Python OS Module)
- **Python's OS Module and shutil**
- ex. f = open('practice.txt', 'w+')
f.write('This is a test string')
f.close()

- **import os**
ex. os.getcwd()
~> reports back the current working directory
ex. os.listdir()
ex. os.listdir('C:\\Users')

- **import shutil**
: move files
ex. shutil.move(#src, #dst)
ex. shutil.move('practice.txt','C:\\Users)

- deleting files: suggesting **send2trash**module for reversability
- **pip install send2trash**
- ex. **import send2trash**
ex.  send2trash.send2trash('practice.txt')  

- **os.walk()**
~> make tree
ex. for folder, sub_folders, files in os.walk(file_path):
        print(f"Currently looking at {folder}\n")
        print('The subfolders are: ')
        for sub_fold in sub_folders:
            print(f'Subfolder: {sub_fold}')
        
        print('\n')
        print("the files are: ")
        for f in files:
            print(f"File: {f}")
        print('\n')

<br>

#### 106. Python Datetime Module
- **import datetime**
ex. mytime = datetime.time(2,20) #2am, 20 minutes past 2am
ex. mytime.minute ~> 20
ex. print(mytime) ~> 02:20:00

ex. today = datetime.date.today()
ex. today.ctime()


- **from datetime import datetime**
ex. datetime(2021, 10, 3, 14, 20, 1)
ex. mydatetime= mydatetime.replace(year=2020)

- # DATE
**from dateimte import date**
ex. date1 = date(2021, 11, 3)
ex. date2 = date(2020, 11, 3

ex. result= date1 - date2
~> \datetime.timedelta(365),result.day
ex. datetime1 = datetime(2021, 11, 3, 22, 0)
ex. datetime2 = dateimte(2020, 11, 3, 12, 0)

ex. result = datetime1 - datetime2
~> datetime.timedelta(365,36000)

<br>

#### 107. Python Math and Random Modules
- import math
ex. help(math)
cf. round(4.5) ~> 4,
    round(5.5) ~> 6
ex. math.pi
    math.e
- Note. **NUMPY** ~> geared towards arithmetic calculations
ex. math.log(math.e)
ex. math.log(100,10)

- **import random**
ex. random.randint(0,100)

ex. random.seed(42)
    random.randint(0,100)
    ~> *seed* lets you get the  same sequence of random numbers
    
ex. mylist = list(range(0,20))
    random.choice(mylist)
    
    # SAMPLE WITH REPLACEMENT
    random.choices(population=mylist, k=10)
    ~> randomly picking up 10 numbers including duplicates

    # SAMPLE WITHOUT REPLACEMENT!
    random.sample(population=mylist, k=10)

    random.shuffle(mylist)

ex. random.uniform(a=0, b=100)
    ~> uniform distribution (Same likelyhood among numbers)
ex. random.gauss(mu=0, sigma=1)
    ~> Gaussian or Normal distribution
    ~> mean and std dev

<br>

#### 108. Python Debugger
- Python comes with a built-in debugger tool that allows you to interactively explore variables within mid-operation of your Python code!
~> can use it instead of print() and finding errors manually

- **import pdb** #Python debugger
ex. x = [1, 2, 3]
    y = 2
    z = 3

    result1 = y + z
    
    pdb.set_trace()

    result2 = y + x

    ~> can pause and explore the codes

<br>

#### 109. Python Regular Expressions Part 1
- ex. "dog" in "my dog is great" ~> True
  ~>while the punctuation, spellings, and lower/uppercases and whatnot have to be exact!
- On the other hand,
  Regular Expressions (regex) allow us to search for general patterns in text data!
  ex. user@email.com
        ~> pattern "text" + "@" + "text"+ ".com"

- The **re** libary allows us to create specialized pattern strings and then search for matches within text

- ex. Phone Number:
    (555) - 555 - 5555
  ex. Regex Pattern:
    r"(\d\d\d) - \d\d\d - \d\d\d\d
    r"(\d{3}) - \d{3} - \d{4}

- ex. **import re**
    text = "my phone once, my phone twice"
    pattern = 'phone'

  ex. match = re.search(pattern, text)
    ~> returns back the first match
  ex. matches = re.findall(pattern, text)
    ~> returns back all the matches
  ex. for match in re.finditer(pattern,text):
        print(match.span())
        print("found")

<br>

#### 110. Python Regular Expressions Part 2
- Character Identifiers:
: Character: Description
: \d : A digit
: \w : Alphanumeric
: \s : white space
: \D : a non-digit
: \W : Non-alphanumeric
: \S : non-white space

- Quantifiers:
: Character : Description
: + : Occurs one or more times
: {3} : occurs exactly 3 times
: {2, 4} : occurs 2 to 4 times
: {3,} : occurs 3 or more
: * : occurs zero or more times
: ? : Once or none
ex. text = "My phone number is 408-555-1234'
ex. phone = re.search(r'\d{3}-\d{3}-\d{4}', text)
ex. phone.group()
    ~> '408-555-7777'

- *compile* function
: compiles together different regular expression pattern codes
ex. phone_pattern = re.compile (r'(\d{3})-(\d{3})-(\d{4})')
~> parentheses mean that patterns are compiled

ex. results = re.search(phone_pattern, text)
ex. results.group()
    ~> '408-555-7777'
    results.group(1) ~>'408'

<br>

#### 111. Python Regular Expressions Part 3
- **or** operator
ex. re.search(r'cat|dog', 'The cat is here')
- **wildcard** operator
ex. re.findall(r'.at', 'The cat in the hat sat there')
ex. r'^\d' : starts with a digit
ex. pattern = r'[^\d]+': excludes number
~> used a lot to remove punctuations
ex. test_phrase = 'This is a string! How can I remove punctuations?'
ex. re.findall(r'[^!?]+', test_phrase)
~> ['This is a string', 'How can I remove punctuations']
ex. re.search(r'ca(tfish|rbonated)', text)

<br>

#### 112. Timing Your Python Code
- For efficiency testing, timing might be useful!
1. Simply tracking time elapsed
2. Using the timeit module
3. Special *%%timeit* "magic" for Jupyter Notebooks

~ ex. def func_one(n):
            return [str(num) for num in range(n)]
      def func_two(n):
            return list(map(str, range(n)))
            
1. ex.
    # CURRENT TIME BEFORE
    start_time = time.time()
    # RUN CODE
    result = fun_one(10000)
    # CURRENT TIME AFTER RUNNING CODE
    end_time = time.time()
    # ELAPSED TIME
    elapsed_time = end_time - start_time
    print(elapsed_time)

2. ex.
    import timeit
    timeit.timeit(#statement, setup, number, etc)
    ~> stmt (statement): to be called over and over again
    ~> setup: called once for the statement to run multiple times

ex. stmt = ''' #triple-quote for multi-line strings
    func_one(100)
    '''
    setup = '''
    def func_one(n):
        return [str(num) for num in range(n)]
    '''

    timeit.timeit(stmt, setup, number=1000000)

    AND COMPARE WITH THE ONES FOR FUNC_TWO
    
3. in Jupyter Notebook
    only,
    ex. %%timeit
    func_one(100)

    ex. %%timeit
    func_two(100)

<br>

#### 113. Zipping and Unzipping files with Python
- ex. f = open('fileone.txt', 'w+')
f.write('ONE FILE')
f.close()

ex. f = open('filetwo.txt', 'w+')
f.write('TWO FILE')
f.close()

ex. **import zipfile** 
# Zipping
comp_file = zipfile.ZipFile('comp_file.zip','w') # Create the file
comp_file.write('fileone.txt',compress_type=zipfile.ZIP_DEFLATED)
comp_file.write('filetwo.txt',compress_type=zipfile.ZIP_DEFLATED)
comp_file.close()

ex.
# Unzipping
zip_obj = zipfile.ZipFile('comp_file.zip', 'r')
zip_obj.extractall('extracted_content')
pwd

- when zipping several at once, **shutil** is better
ex. import shutil
dir_to_zip = 'C:\\Users\\.....'
output_filename = 'example'
shutil.make_archive(output_filename,'zip',dir_to_zip)

ex. shutil.unpack_archive('example.zip','final_unzip','zip')

<br>


#### 115. Advanced Python Module Puzzle - Solution
ex. import shutil
    shutil.unpack_archive('unzip_me_for_instructions.zip','','zip)

    with open('extracted_content/Instructions.txt') as f:
        print(f.read())
    
ex. import re
    pattern = r'(\d{3})-(\d{3})-(\d{4})

ex. def search(file,pattern = r'(\d{3})-(\d{3})-(\d{4})):
        f = open(file, 'r')
        text = f.read()
        
        if re.search(pattern, text):
            return re.search(pattern, text)
        else:
            return ''

ex. import os
    results = []
    for folders, sub_folders, files in os.walk(os.getcwd()+'\\extracted_content'):
        for f in files:
            full_path = folder + '\\' + 
            results.append(search(full_path))
    
ex. for r in results:
        if  r  != '':
            print(r.group())

<br>

## 15. Web Scraping with Python
#### 116. Web Scraping Introduction Using Python
- **Web Scraping** is a general term  for techniques involving automating the gathering of data from a website

~ we first need to understand the basic concept of how a website works
~ when a browser loads a website, the user gets to see what is known as the "front-end" of the website.

~ Many things to understand first:
1. Rules of Web Scraping
2. Limitations of Web Scraping
3. Basic HTML and CSS

~>
1. **Rules of Web Scraping!**
: Always try to get permission before scraping
: If you make too many scraping attempts or requests your IP Address could get blocked
: Some sites automatically block scraping software

2. **Limitations of Web Scraping!**
: In general every website is unique which means that every web scraping script is unique
: A slight change or update to a website may completely break your web scraping script

3. **Basics of Front-End**
: Main front end components of a website =HTML+CSS+JS
: **HTML** is used to create the basic structure and content of a webpage
: **CSS** is used for the design and style of a web page, where elements are placed and how it looks
: **JavaScript** is used to define the interactive elements of a webpage

~ Python can view these HTML and CSS elements programmatically, and extract info from the website
~ Let's explore HTML and CSS in more depths.

~ quick overview:
: **HTML** contains the information
: **CSS** contains the styling
: We can use **HTML** and **CSS** tags to locate specific info

~ To web scrape with Python,
: **BeautifulSoup** and **requests libraris** can be used
: these are external
: directly at your command line for installation...
~> pip install requests
~> pip install lxml
~> pip install bs4
: or for Anaconda distributions,
: use conda install instead of pip install

<br>

#### 117. Web Scraping Libraries
~ Install the necessary libraries
~ Explore how to inspect elements and view source of a webpage
~ Chrome is recommended

~ import requests
    import bs4

~ On Chrome,
    right click- View page source 
    ~> however, usually this contains TOO MUCH info and it's hard to scrape info from here
    ~> instead, we want to narrow down
    ~> ex. want to get the image
    ~> right click on the image and 'inspect'

<br>

#### 118. Python Web Scraping - Grabbing A Title
- ex. import requests
ex. result = requests.get("http://www.example.com")
ex. result.text

ex. import bs4
ex. soup = bs4.BeautifulSoup(result.text, "lxml")
ex. soup

ex. soup.select('title')
ex. soup.select('title')[0].getText()

<br>

#### 119. Python Web Scraping - Class
- A big part of web scraping with BeautifulSoup is to figure out what string syntax to pass into the soup.select() method.
- ex.
: soup.select('div') ~> all with 'div' tag
: soup.select('#some_id') ~> elements containing id = 'some_id'
: soup.select('.some_class') ~> elements containing 'some_class'
: soup.select('div span') ~> any elements named span within a div element
: soup.select('div>span') ~> any elements named span directly within a div element, with nothing in between 

ex. res = requests.get('https://en.wikipedia.org/wiki/Grace_Hopper)
ex. soup = bs4.BeautifulSoup(res.text,"lxml")
ex. soup.select('.toctext')

ex. first_item = soup.select('.toctext')[0]
ex. first_item.text

ex. for item in soup.select('.toctext'):
        print(item.text)


<br>


#### 120. Python Web Scraping - Image
- images on a website typ. have their own URL link (ending in .jpg or .png)
- Beautiful Soup can scan a page, locate the <img> tags and grab the URL's
- then we can downlaod the URL's as images and write them to the computer
- Note: always check the copyright permission

    
- ex. import requests
      import bs4
ex. source = requests.get("https://en.wikipedia.org/wiki/Arduino")
ex. suppi = bs4.BeautifulSoup(source.text,"lxml")
ex. suppi.select('.thumbinner img')
ex. comp = suppi.select('.thuminner img')[0]
ex. comp['src']
~> copy the URL
ex. link_image =   requests.get(URL) while URL has to include https:// at the beginning
ex. f = open('Wiki_imagE.jpg','wb') #wb ~> write binary
ex. f.write(link_image.content)
ex. f.close()

<br>

#### 121. Python Web Scraping - Book Examples Part 1
- Grabbing info from multiple pages
- We will use a site specifically designed to practice web scraping: *www.toscrape.com*

- *#GOAL: Get Title of Every Book with a 2-Star Rating

ex. import requests
    import bs4
    
    base_url = "http://books.toscrape.com/catalogue/page-{}.html"

    res = requests.get"(base_url.format(1))
    soup = bs4.BeautifulSoup(res.text,"lxml")
    products = soup.select(".product_pod")

    example = products[0]

- Then there are tons of ways to complete the job. Out of these, to find the books with two-star rating,
1. Quick and Dirty Way

ex. 'star-rating Two' in str(example)

2. Using BS4 method

ex. example.select(".star-rating.Three")
~> note . instead of space

ex. example. select('a')[1]['title']
~> 'A Light in the Attic'

ex. # We can check if something is 2 starts (either by string call in, or example.select)
ex. # example.select('a')[1]['title'] to grab the book title

ex. import requests
ex. import rs4

ex. base_url = "http://books.toscrape.com/catalogue/page-{}.html"
ex. two_star_titles = []

ex. for i in range(1,51):
        scrape_url = base_url.format(i)
        res = requests.get(scrape_url)

        soup = bs4.BeautifulSoup(res.text,"lxml")
        books = soup.select(".product_pod")

        for book in books:
            if len(books.select('.star-rating.Two'))!= 0:
                title = book.select('a')[1] ['title']
                
                two_star_titles.append(title)



<br>

#### 125. Python Web Scraping - Exercise!

- Note that there are MANY ways to complete the jobs! And these are My Ways...

    <!-- TASK: Import any libraries you think you'll need to scrape a website -->
    import requests
    import bs4


    <!-- TASK: Use reqeusts library and BeautifulSoup to connect to https://quotes.toscrape.com/ and get the HTML text from the homepage.
     -->
    res = requests.get("http://quotes.toscrape.com/")
    soup = bs4.BeautifulSoup(res.text,"lxml")

    <!-- TASK: Get the names of all the authors on the first page -->
    authors = soup.select('.author')
    author_firstpage = set()

    for i in range(len(authors)):
        author_firstpage.add(authors[i].text)

    
    <!-- TASK: Create a list of all the quotes on the first page -->
    quotes = soup.select('.text')
    quote_firstpage = []

    <!-- TASK: Create a list of all the quotes on the first page -->
    quotes = soup.select('.text')
    quote_firstpage = []

    for j in range(len(quotes)):
        quote_firstpage.append(quotes[j].text)
    

    <!-- TASK: Inspect the site and use Beautiful Soup to extract the top 10 tags from the requests text shown on the top right from the homepage
    HINT: Try to find a class only present in the top right tags perhaps SPAN -->
    ttags = soup.select('.tag-item')
    top_ten_tags = []

    for k in range(len(ttags)):
        top_ten_tags.append(ttags[k].text[1:-1])


- big task!
    TASK: Notice how there is more than one page, and subsequent pages look like this "http://quotes.toscrape.com/page/2"
    Use Loop and String concat. to loop through All the pages and get All the unique Authors on the website!

    base_url = 'https://quotes.toscrape.com/page/{}'
    unique_author_set = set()
    counter = 1

    while True:
        resource = requests.get(base_url.format(counter))
        soup = bs4.BeautifulSoup(resource.text, "lxml")
        
        
        if 'No quotes found' in str(soup):
            break
        else:
            authors = soup.select('.author')

            
            for i in range(len(authors)):
                unique_author_set.add(authors[i].text)
            counter += 1
        
        
        print(unique_author_set)


    
    


<br>

#### 124. Python Web Scraping - Exercise SOLUTIONS!! Now!! Yay!!
ex. url = 'http://quotes.toscrape.com/page/'

page_still_valid = True
authors = set()
page = 1

while page_still_valid:
    page_url = url + str(page)
    
    res = requests.get(page_url)
    
    if "No quotes found!" in res.text:
        break

    soup = bs4.BeautifulSoup(res.text,"lxml")
    
    for name in soup.select(".author"):
        authors.add(name.text)
    



    page = page  + 1
    

<br>

## 16. Working with Images
#### 125. Introduction to Images with Python
- Interact with images
- Using pip install pillow

<br>

#### 126. Wokring with images
- Pillow library, which is a fork of the PIL(Python Image Library) with easy to use function calls.

- official documentaion at *pillow.readthedocs.io*

ex. from PIL import Image
ex. computer_image = Image.open('my_computer_image.jpg')
ex. computer_image.show()

- cropping image
ex. x = 0
    y = 0
    w = 100
    h = 100

ex. computer_image. crop((x,y,w,h))

- copying and pasting
ex. computer = computer_image.crop( (x,y,w,h) )
ex. computer.paste(im = computer, box = (0,0))



- resizing
ex. computer_image.resize( (3000,500))

- rotating
ex. computer_image.rotate(10)

- Color Transparency
~> RGBA - Red, Green, Blue, Alpha
~> 0 to 255
~> alpha value decides the transparency in general
ex. computer_image.putalpha(100)
ex. red.putalpha(100), blue.putalpha(100)
ex. blue.paste(im = red, box = (0,0),mask = red)
~> purple
ex. blue.save('purple.png')
