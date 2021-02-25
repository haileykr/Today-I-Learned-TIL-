# **W3Schools.com ** #
- https://www.w3schools.com

# Javascript
#### JS Versions
- https://www.w3schools.com/js/js_es6.asp
- JS 2015 (ES6)
: ECMAScript 2015 - ES6

- let: variable with block scope
- const: unchangeable variable
=> before these, JS only had GLOBAL and FUNCTION scopes

- Global Scope: declared outside any function
- Function Scope: declared inside a function (locally)

- "Redeclaring a variable inside a block **with let** will not redeclare the variable outside the block"

- Global Scope
: w/ JS => JS Environment
: w/ HTML => Window Object

- Note.
ex. var carName = 'Volvo'
// global vars defined w/ *var* belong to the window object
// window.carName

~> with let, cannot

- Hoisting
: variables defined w/ **var** are hoisted at the top
(i.e. can be used before they are declared)
: with **let**, you have to initialize first
ex. carName = "Volvo";
    alert(carName);
    var carName;
    //ok

ex. carName = "Volvo";
    let carName;
    //not ok., ReferenceError

- CONST
: similar to let
: should be initialized with declaration

: it's not a constant value, but rather it is a **constant reference** to the value
~> can change the properties of *constant objects*


- Arrow Functions
: do not have "this"
: not suited for defining *object methods*
: must be defined *before* they're used (*not hoisted*)
: Using *const* is safer than *var*, as a function expression is always a constant value

- For/Of Loop
ex. for (variable of iterable) {
        //code block
    }

// iterable - Arrays, Strings, Maps, NodeLists, etc.

- JavaScript Classes
: templates for JS Objects
: use the keyword *class* to create a class
: always add a method named *constructor()*

ex. class ClassName {
        constructor() {...}
    }
ex. class Car {
        constructor(name, year){
            this.name = name;
            this.year = year;
        }
    }
=> JS class it NOT an object
=> it is a TEMPLATE for JavaScript objects

ex. let myCar1 = new Car('Ford', 2014);
    //Object created


- JS Promises
: a JS object that links **Producing Code ** and **Consuming Code**

ex. let myPromise = new Promise(function(myResolve, myReject)){
        //Producing Code (May take some time)

        myResolve(); //when successful
        myReject(); //when error
    }

    //"Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
        function(value){/* code if successful */},
        function(error){/* code if some error */}
    );

ex. let myPromise = new Promise(function(myResolve, myReject){
        setTimeout(function() {myResolve('I love you!');}, 3000);
    });

    myPromise.then(function(value){
        document.getElementById("demo").innerHTML = value;
    });

- Symbol
: unique "hideen" identifier that no other code can accidentally access

- Default Parameter Values
ex. function(x, y=10){...}

- Function Rest Parameter
: treat an indefinite number of arguments as an array
ex. function sum(...args){
        let sum = 0;
        for (let arg of args) sum += arg;
        return sum;
    }
    let x = sum(1,2,3,4,5);

- Array.find(), Array.findIndex()
=> takes value, index, array

ex. var numbers = [1,2,3,4,5];
    var first = numbers.find(myFunction);
    function myFunction(value, index, array){
        return value>2;
    }

- New Number Properties and Methods
: Number.EPSILION
: Number.MIN_SAFE_INTEGER
: Number.MAX_SAFE_INTEGER

: Number.isInteger(n)
: Number.isSafeInteger(n)
//can be exactly represented as a double precision number

- New Global Methods
: isFinite(10/0);//false
//false when Infinity of NaN

: isNaN("Hello"); //true
