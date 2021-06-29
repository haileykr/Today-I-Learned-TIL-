# Youtube - TypeScript Course for Beginners 2021 - Academind

* 06/29/2021

### What is TypeScript?

- a JavaScript superset
  * Adds new Features + Advantages to JavaSciprt
  * Browser CAN'T execute it! (Node.js also CAN'T execute it!)
  * Compiled to JavaScript

    * (New - on top of regular JS) Features are compiled to JS 'workarounds' possible errors are thrown


### Why TypeScript?
- TypeScript is a "Tool" that helps developers write better codes!

<br/>

### Installing & Using TypeScript
- Form ~> takes inputs as string
- for example,
```javascript
function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") { //extra validation process NEEDED!!
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

```

- Installing TypeScript!
    * `npm install -g typescript`
    * What we installed in the  end are...
      * Compiler
      * Everything we need to have to convert TS into JS
      * Now we can Invoke the compiler by executing `tsc`
  
- add a file "using-ts.ts"
- input.value already gives you a warning, as most inputs would not have "value" and it may cause error
  * ~> TS requires you to be more specific!

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
    * `npm init`, `npm install --save-dev lite-server`

- in package.json, "scripts": "start": "lite-server"




- now npm start then it will save the time to re-run the server! you still need to re-compiletho
<br/>

### Working With Types - Core Syntax & Features 

- Core Types
1. number (ex. 1, 5.3,-10) ~ all numbers, no differentiation between integers and floats
2. string (ex. 'Hi', "Hi", `Hi`) ~ all text
3. boolean (ex. true, false) ~ just these two, no 'truthy'/'falsey' values

- NOTE. TS's **type system only helps you while you are in a development mode!** (i.e. before the code gets compiled)

- Javascipt is *dynamically* typed ~> type is assgiend at runtime
  vs. Typescript is *statically* typed ~> we define the types during the development

