# Youtube - TypeScript Course for Beginners 2021 - Academind (up to Chapter 3)

# Udemy - TypeScript Course for Beginners 2021 - Academind (up to Chapter 16)

- 06/29/2021
- 07/08/2021 회사

### What is TypeScript?

- a JavaScript superset

  - Adds new Features + Advantages to JavaSciprt
  - Browser CAN'T execute it! (Node.js also CAN'T execute it!)
  - Compiled to JavaScript

    - (New - on top of regular JS) Features are compiled to JS 'workarounds' possible errors are thrown

### Why TypeScript?

- TypeScript is a "Tool" that helps developers write better codes!

<br/>

### Installing & Using TypeScript

- Form ~> takes inputs as string
- for example,

```javascript
function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    //extra validation process NEEDED!!
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}
```

- Installing TypeScript!
  - `npm install -g typescript`
  - What we installed in the end are...
    - Compiler
    - Everything we need to have to convert TS into JS
    - Now we can Invoke the compiler by executing `tsc`
- add a file "using-ts.ts"
- input.value already gives you a warning, as most inputs would not have "value" and it may cause error
  - ~> TS requires you to be more specific!

```javascript
const input1 = document.getElementById("num1")! as HTMLInputElement;
```

- "!" means that the value will definitely be there! (the line will never yield null)

```javascript
function add(num1: number, num2: number) {
...
}
```

```javascript
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
```

- Once you run tsc filename.ts, you see a JavaScript file ~> link to html!

### TypeScript Overview!

- TypeScript adds...

1. Types!
2. Next-gen JS features, compiled down for older browsers!
3. Non-JS features like Interfaces or Generics
4. Meta-programming features like Decorators
5. Rich Configuration Options
6. Modern Tooling that helps even in non-TypeScript Projects

### Course Outline

1. Getting Started
2. TypeScript Basics
3. Compiler & Configuration Deep Dive
4. Working with Next-gen JS Code
5. Classes & Interfaces
6. Advanced Types & TS features
7. Generics
8. Decorators
9. Time to Practice - Full Project
10. Working with Namespaces & Modules
11. Webpack & TypeScript
12. Third-party Libraries & TypeScript
13. React + TypeScript & NodeJS + TypeScript

### How to Get the Most out of the Course!

1. Watch videos
2. Code Along
3. Practice
4. Debug & Search
5. Ask & Answer
   <br/>

### Course Project Setup

- In order not to compile and reload every time there is a change, install

  - `npm init`, `npm install --save-dev lite-server`

- in package.json, "scripts": "start": "lite-server"

- now npm start then it will save the time to re-run the server! you still need to re-compiletho
  <br/>

### Working With Types - Core Syntax & Features

- Core Types

1. number (ex. 1, 5.3,-10) ~ all numbers, no differentiation between integers and floats
2. string (ex. 'Hi', "Hi", `Hi`) ~ all text
3. boolean (ex. true, false) ~ just these two, no 'truthy'/'falsey' values

- NOTE. TS's **type system only helps you while you are in a development mode!** (i.e. before the code gets compiled)

- Javascipt is _dynamically_ typed ~> type is assgiend at runtime
  vs. Typescript is _statically_ typed ~> we define the types during the development

<br>

### Object Types

4. object (ex. {notes: 'abc'}) ~ Any JavaSciprt object, more specific types (type of object) are possible

```javascript
const person: {
  name: string,
  age: 30,
} = {
  name: "Maximilian",
  age: 30,
};
// unnecessary
// better to let TS decide

const person = {
  name: "Maximilian",
  age: 30,
};
```

<br/>

### Array Types

5. Array (ex.[1, 2, 3]) ~ Any JS array, type can be flexible or strict (regarding the element types)

```javascript
let favorites = string[];
favorites = ['Sports', 'Read'];

```

<br/>

### Tuple Types

6. Tuple (ex. [1, 2]) ~ Added by TS - Fixed-length array

```javascript
const person = {
  hobbies: ['Sports', 'Read'];
  role: [2, 'author'] //(string | number) []

}

person.role.push('admin');
person.role[1] = 10; //both work! against our will

//if we dont want this behavior
// specify types!
const person : {
  hobbies: string[],
  role: [number, string] //SPECIFY TUPLE
} = {
  hobbies: ['Sports', 'Read'];
  role: [2, 'author'] //(string | number) []

};

//while PUSH still works
```

<br/>

### Enum Types

7. Enum (ex. enum {NEW, OLD}) ~ Added by TS: Automatically enumerated global constant identifiers

```javascript
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  role: ADMIN, //downside - inferred as just "number" ~ could be any number technically
};
```

- introduce enum to easily infer what val it should be!

```javascript
enum Role {ADMIN = 0, READ_ONLY, AUTHOR = 2, EXTRA = 'EXTRA'};

const person = {
  role: role.ADMIN)
};

```

<br/>

### Any Type

8. Any (ex. \*) ~ Any kind of value, no specific type assignment
   ~> avoid anywhere possible!

<br/>

### Union Types

- A or B or C or..

```javascript
number | string;
```

<br/>

### Literal Type

- 'A' or 'B' or 'C' or..
  ~> especially useful working with the union type

```javascript
function combine (
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text '
) {
  let result;

  ..

}
```

<br/>

### Type Aliases / Custom Types

- making a custom type!

```javascript
type Combinable = number | string;

function combine (
  input1: Combinable,
  input2: Combinable,
  ..
)


type User = {name:string, age:number}
```

<br/>

### Function Return Types & "Void"

```javascript
function add(n1: number, n2: number) {
  return n1 + n2;
}
//best to let TS infer the return type
```

- void type
- undefined type (do not use it as a return type of functions)
  ~> undefined is still something, so you're expected to STILL return sth in the function
  <br/>

### Functions as Types

```javascript
let combineValues: Function;

combineValues = printRes;

// combineValue2 should take any function which takes two numbers as inputs and returns a number
let combineValues2: (a: number, b: number) => number;
```

<br/>

### Function Types & Callbacks

```javascript
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
// but even if cb is set to return VOID,
// it can still return a value and won't cause error
```

<br/>

### "unknown" type

- similar to any ~> can store any type

```javascript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
//userName =userInput;//causes an error! ("unknown" needs some kind of type-checking before assigning)

if (typeof userInput === "string") {
  userName = userInput; // works!!
}
```

- it's good when you aren't sure which type a variable will get
- but knows what you want to do eventually ~ with some type-checking

<br/>

### "never" type

- when developers know the function will "never" return something
- relatively newer syntax

```javascript
function generateError(message: string, code: number): never {
  //void is assumed and it's fine to leave it like that, but never can be specified if you want to be very specific!
  throw { message: message, errorCode: code };

  //while(true){}
}

generateError("Error occured!", 500);
```

# The TypeScript Compiler and its Config

<br/>

### Using "Watch Mode"

- ctrl + c if you want to quit
- `tsc app.ts --watch (or -w)`

<br/>

### Compiling the Entire Project

- `tsc --init`
- tsconfig.json created!
- now this manages how the entire project is compiled
  <br/>

### Including & Excluding Files

- exclude : node_modules ~> default
- include: once you specify sth, you need to specify ALL THE FILES which you want to be included
- files: individual projects spcified~> not used often

<br/>

### Setting a CompilationTarget

- target : which target JavaScript version you'd like to have
  <br/>

### Understanding TypeScript Core Libs

- "lib": [
  "dom",
  "es6",
  "dom.iterable",
  "scripthost"
  ]//default!
  <br/>

### Working with Source Maps

- also shows .ts files on browser

- can use breakpoints and whatnot on browser

- super useful for debugging!

<br/>

### rootDir and outDir

- can specify where to store compiled javascript files + location of srcFiles
  <br/>

### Strict Compilation!

- "strict": true turns on all the following options!

- "strictNullChecks" ~> checks for the possibility of NULL VALUES!!

```javascript
const button = document.querySelector(button); //error, as it might be null - no button may be found
const button = document.querySelector(button)!; //! implies that we know that there will be a button for sure

//if you're not sure
const button = document.querySelector(button);

if (button){
  button.addEventListener('click', () => {
    console.log('initiated!');
  })
}

```

<br/>

# Next-Gen JavaScript & TypeScript

<br/>

### Rest

- rest params make inputs into an array!

- useful when you dont know how many parameters you will get

```javascript
const add = (...numbers: number[]) => {
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3, 7);
```

# Classes & Interfaces

<br/>

### What are Classes?

- What is Object-Oriented Programming, or OOP?

  - Work with (real-life) entities in your code

- Objects
  - "the things you work with in code"
  - **Instances** of classes (=based on classes)
  - class-based creation is an alternative to using object literals!
- Classes

  - "blueprints for objects" (theoretical definition)
  - define how objects look like, which properties and methods they have

  - classes make creation of multiple, similar objects much easier

<br />

### Creating a First Class

- constructor runs when the object is created! thus allows some initialization!
- EX.

```javascript
class Department {
  name: string; //field of the class!
  //name: string = 'mee'; //can have default!

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department("Accounting");
```

<br/>

### Constructor Functions & The "this" Keyword

### "private" and "public" Access Modifiers

- properties and methods can be private
- only accessible within the class

- EX.

```javascript
class Department {
  name: string;
  //employees: string[] = [];
  private employees : string[] = [];

  constructor(n: string){
    this.name = n;
  }
  describe(this: Department) { //
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// CAN ACCESS FROM OUTISDE TOO!!
// use 'private' to prevent this behavior!
accounting.employees[2]='Anna';

accounting.describe();
accounting.printEmployeesInformation();

const accountingCopy = {name: 'DUMMY', describe: accounting.describe};

acountingCopy.describe();
```

<br/>

### Shorthand Initialization!

- EX.

```javascript
private id: string;
public n: string; //public is default actually
consturcotr(id: string, n: string){
  this.id = id;
  this.name = n;
}

constructor(public n: string) {  // public / private명시
  this.id = 'id';
}
```

<br/>

### "readonly" Properties

- EX.

```javascript
constructor(private readonly id: string )
```

- can only initialize once then cannot modify

<br/>

### Inheritance

- EX.

```javascript
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]){
    super(id, 'IT');//always needed to inherit from the parent class

    this. ..
  }
}

const accounting = new ITDepartment('d1');
```

<br/>

### Overriding Properties & The "protected" Modifier

- can override class

- "protected"~> like private, but accessible also in classes that inherit
  <br/>

### Getters & Setters

- GETTER ~ a property where you execute a method, where you retrieve a value that allows developers to add more complex logic
  - has to return something
- EX.

```javascript
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    // can store any logic to set
    if(!value){
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name: string){

  }
}

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = '';//set
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport); //get-can call like a property and does not need to "run with ()"
```

<br/>

### Static Methods & Properties: **GROUPING MECHANISM**

- stacis properties and methods

  - ~ allow you to add properties and methods to classes which are not accessed on an instance of the class
  - ~ no need to call "new"
  - ~ but you access directly on the class
  - ~ often used for "utility funcs"
    - which you want to group or map to the class logically
  - ~ or global contants that you also want to store in a class

- ex. Math.PI ~> no need to call like new Math()

```javascript

class Department {

  static snack = true;
  ...

  static createEmployee(name: string) {
    return {name: name};
  }

}

const employee1 = Department.createEmployee('Max');
console.log(employee1);

console.log(Department.snack); //true
```

- you cannot access static properties or methods in side **constructor**!!
- BECAUSE: as inside consturctor, _this_ will refer to an instance that is created
- but static properties or methods do not rely on instances

- so to access static property inside a class, just use a (class name).(property name)

- call the method on the class without "new" so we use the class as more of a grouping mechanism!

<br/>

### Abstract Classes

- when you have 1+ abtract method, the class has to be abstract too.

- `abstract describe(this: Department): void;`//specifying how the structure of this method should look like

- abstract method has to be declared and used in any class based on The Abstract Class.

- Abstract Class

  - useful when you want to set up a blueprint for how instances of it should look like
  - but do not want to provide the concrete implementation
  - lets the Instances of this (class ITDepartment extends Department))complete the implementations!

  - cannot be instantiated on its own

  - it's just a boilerplate
    <br />

### Singletons & Private Constructors

- "SINGLETONS PATTERN": a pattern in OOP where you ensure that there is ONLY ONE instance of a certain class. Can be useful in scenarios when you somehow can't use static properties/but you still want to make only one object/instance of the class
  - sometimes useful, not always used!
- Ex.

```javascript
abstract class Department {
  static fiscal Year = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id:string, public name: string) {

  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }
}
```

<br/>

### Intro to Interface

- explains the structure of an object
- ex.

```javascript
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;
user1 = {
  name: "Max",
  age: 3,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet();
```

<br/>

### Using Interfaces with Classes

- Inteface is ONLY used to define structure of Objects

  - can use type as well but using interface will be clearer
  - plus, classes can **implement!!** interfaces
  - ex.

  ```javascript
  class Pseron implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
      this.name = n;
    }

    greet() {
      console.log(phrase + " " + this.name);
    }
  }
  ```

- therefore, interfaces are often used to share functionalities[structure-wise] among classes

- useful in that for exmaple, if any variable is assigned the interface of Greetable, we know that the variable has the method greet for sure!

<br/>

### Readonly Interface

- cannot set things like abstract, public, private, but can set readonly

  - that variable can only be set once then read only

- ex.

```javascript
interface Greetable {
  readonly name: string;
  ..

}

let user1 = new Person('Max');
user1.name ='Manu';//ERROR
```

<br/>

### Extending Interfaces

- you can also extend interfaces, even multiple
  - recall. you can only extend one class
- ex.

```javascript
interface Greetable extends Named, Another {
  greet(phrase: string): void;
}
```

<br/>

### Interfaces as Function Types

- recall. with type, we could define how the function should look like
- ex. `type AddFn = (a: number, b: number) => number;`
- ex. `let add: AddFn;`
- ex. `add = (n1: number, n2: number) => {
  return n1 + n2;
  }

- interfaces are there to define objects
- but objects are just functions
- thus as an "exception" interfaces can be used to define function types

```javascript
interface AddFn {
  (a: number, b: number): number;
}
```

<br/>

### OPtional Parameters & Properties

- optional: ex. `outputName ?: string;`
- for methods!

  - ex.

  ```javascript
  optional!=> myMethod?(){..}

  ```

- optional parameters are okay too ex. n?: string, or n:string = '' ~fallbackValue!

- NOTE. interfaces are TypeScript-Only features

  - cannot be instantiated and compiled (to js)
    vs. classes can be instantiated and compiled

  <br/>

  # Some Advanced Types

  ### Intersection Types

  - combining different interfaces
  - ex.

  ```javascript
  type Admin = {
    name: string,
    privileges: string[],
  };
  type Employee = {
    name: string,
    startDate: Date,
  };
  type ElevatedEmployee = Admin & Employee;

  const el: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
  };
  ```

  - the following results in the same indeed

  ```javascript
  interface Admin {
    name: string;
    privileges: string[];
  }

  interface Employee {
    name: string;
    startDate: Date;
  }

  interface ElevatedEmployee extends Admin, Employee {}

  type ElevateEmployee = Admin & Employee;
  ```

  - intersection types can be useful for other types as well

  ```javascript
  type Combinable = string | number;
  type Numberic = number | boolean;

  type Universal = Combinable & Numeric;
  ```

<br/>

### Type Guard

- with if check!

```javascript
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    // if (emp instanceof Admin) does not work
    //~ only if Admin  was a class not an interface and emp was an instanec of it i.e. const emp = new Admin()
    //~ it would've worked b/c class is understood by vanilla js

    // if (emp.privileges) also does not work

    // if (typeof == 'Admin') does not work as this typeof check runs in javascript runtime
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Startdate: " + emp.startDate);
  }
}
```

<br/>

### Discriminated Unions

- when you know that a certain property exists in both union-ed interfaces for sure
- can use that for a check

```javascript
interface Play {
  type: 'verb'
}

interface Aut {
  type: 'adjective'
}

type Company = Play | Aut;
...
switch (company.type){

  case 'verb':
    ..
  case 'adjective':
    ..
```

- no error and useful + no need to mis-type
  <br/>

### Type Casting

- Two ways to achieve Type Casting

1. ex. <HTMLInputElement>document.getElementById('#input')!;
2. ex. document.getElementById('#input')! as HTMLElement ;

- ! notes that the selected element will never be null
- useful especially when selecting
  - the dom elements!!

  <br/>

### Index Properties

- when you are not sure what the key value will be
  - but know its type!
  - restriction ~ ALL the key-value types should follow that format

```javascript
interface Login {
  [props: string]: string;
}
```
