# script async vs. defer
1. head + script
: 단점 - 유저가 페이지를 볼 때까지 오래 걸림!

2. body + script
: 단점 - JS에 크게 의존적인 페이지라면, 제대로 동작할 때까지 오래 걸림

3. head + script async
: 장점 - body 끝에 사용하는 것보단 download 시간을 절약 가능
: 단점 - JS가 html이 parsing되기 전부터 실행되기 때문에 에러 발생 가능, blocked 구간 때문에 페이지 로드 느릴 수 있음, 여러 js파일 불러올 때 순서 상관 없이 먼저 로드된 것 부터 실행되어 에러 발생할 수 있음

4. head + script defer
: 가장 좋은 옵션!

# 'use strict';

```javascript
// JavaScript is very flexible
// flexible === dangerous
// Whole-script strict mode syntax!!
'use strict'; //ES5
```
=> 에러도 줄여주고 더 빨리 효율적으로 작동 가능함!

# var
: var은 쓰지 마세요!
: var hoisting을 해주기 때문..
: 선언도 전에 호출이 가능하다!

: 또한 block scope이 없다 - 블록을 철저히무시!


# hoisting
: 어디에 써있든지 간에 선언을 제일 위로 끌어올려주는 것!
: var, function
: move declaration form bottom to top

# Variables
: let

# Constants
: const
: "favor immutable data type always" for a few reasons
- security // 해커들이 변경 못하도록
- thread safety
- reduce human mistakes!

# Variable Types
1. primitive, single item
: number, string, boolean, null, undefined, symbol
2. object, box container
: single item을 묶어서 관리
3. function, first-class function! // 함수도 데이터 타입으로 여겨지고
// 다른 타입과 마찬가지로 변수에 할당이 가능하다는 말임!
// 함수에 인자로도 전달 가능하고, return type으로도 쓰일 수 있다는 말

# Other Types
```javascript
const infinity = 1 / 0; //Infinity
const negativeInfinity = -1 / 0;  // -Infinity
const nAn = 'not a number' / 2; //NaN
const bigInt = 123109284902389023849012n; //bigint

//Boolean
// false: 0, null, undefined, NaN, ''
// true: any other value!

//null
let nothing = null;

//undefined
let x;
let x = undefined;

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false-동일한문자열도
                                    //다르게 처리
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true-동일한문자열을
                                    //같다고 처리
console.log(${symbol1.description});//symbol은 .description으로 바꿔줘야 출력이 가능함!
```

# Dynamic Typing: dynamically typed language!
* 타입이 runtime 중에  결정됨

* 오류 발생 가능

# Parameters
* EXAMPLE!
```javascript
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);

```

# Default Parameters - Added in ES6
```javascript
function showMessage(message, from = 'Brandon'){
    console.log(`${message} by ${from})`);
}
showMessage('Hello');
```

# Rest Parameters - Added in ES6  !!
```javascript
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');
```
=> ...args가 배열로 전달됨!

# Local Scope
=> 밖에서는 창문 안을 볼 수 없지만 안에선 밖을 볼수가 있다아!

```javascript
let globalMsg = 'global'; // global variable!
function printMsg(){
    let msg = 'hello';
    console.log(msg); //local variable
    console.log(globalMsg);
    function printAnother(){
        console.log(msg);
        let childMsg = 'hello';
    }
    console.log(childMsg); //에러남! Error
}
printMsg();
```

# Early Return, Early Exit
```javascript
// Example


// bad
function upgradeUser(user){
    if (user.point > 10){
        //long logic..
    }
}

// good
function upgradeUser(user){
    if (user.point <=10){
        return;
    }
    //long logic..
}
```

# First-Class Function
* Functions are treated like any other variable
* can be assigned as a value to variable
* can be passed as an argument to other functions
* can be returned by another function

1. Function Expression
* a  function declaration can be called earlier than it is defined (hoisted)
* a function expression is created when the execution reaches it
```javascript
const print = function() { //anonymous function
    console.log('print');
};
print();

const printAgain = print;
printAgain();

function sum(a, b){ //Function declaration - Hoisted!
    return a+b;
}

const sumAgain = sum;
console.log(sumAgain(1,3));
```

=> named function은 better for debugging in stack traces!
=> also used when recursion is used

# Arrow Functions
* always anonymous
```javascript

const summation = (a, b) => a+b;

// block 안에서 더 많은 일이 필요하면
const summation = (a, b) => {
    // do something more
    return a+b;
}
```
# IIFE : Immediately Invoked Function Expression
```javascript
function hello(){
    console.log('IIFE');
}
hello();
```
=> typical function!

```javascript
(function hello(){
    console.log('IIFE');
})();
```

~> IIFE는 바로 실행가능, 많이 쓰진 않음





# ES6
: IE빼고 지원함 - IE는 1%도 안 씀!
: 하지만 정말로 IE에도 배포가 필요하다면, ES6로 작성 후 Babel 이용해 ES5로 내려서 배포해도 됨!

# Class
```javascript
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name} : hello!`);
    }
}

const ellie = new Person('ellie', 20);
```

# Getter and Setter
* 에러 방지 위함!
```javascript
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0 ){
        //     throw Error('age cannot be negative!');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Huggh', 'Grant', -1);
console.log(user1.age);
```

# Fields (public, private)
* Too soon!
```javascript
class Experiement {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
```

# Static Properties and Methods
```javascript
class Article{
    static publisher = 'Dream Coding'
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);

```

# Inheritance
* A way for one class to extend aNother!

```javascript
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!!!!! `);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('heyoo a triangle!!');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20,  'blue');

triangle.draw();

console.log(triangle.getArea());
```

# Class Checking : InstanceOf
```javascript
console.log(rectangle instanceOf Rectangle); //true
console.log(triangle instanceOf Rectangle); //false
console.log(triangle instanceOf  Triangle); //true
console.log(triangle instanceOf Shape); //true
console.log(triangle instanceOf  Object); //true

```


# Objects
* One of the JavaScript's data types
* a collection of related data and/or functionality
* Nearly all objects in JavaScript are instances of Object

## Literals and Properties
```javascript
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'elli', age: 4};
print(ellie);

ellie.hasJob = true; //자바스크립트 특성 때문에 이렇게 뒤늦게 추가하는것도 가능하다
// but not desired
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);
```

* Javascript는 "dynamically-typed language"!!!
=> 동적으로 type이 runtime - 프로그램이 동작 중일 때 - 때 결정되는 언어!!


## Computed Properties
* Key should always be string
```javascript
console.log(ellie.name);
console.log(ellie['name']);
```

=> 언제 무엇을 쓰나?
=> 동적으로 value값이 결정되어야 할 때 computed properties를 쓴다!!

* EX.
```javascript
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'name');
```

## Property value shorthand 
## Constructor Function 
```javascript
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};

function Person(name, age){
    // this = {}; 생략
    this.name = name;
    this.age = age;
    // return this;
}

const person4 = new Person('ellie', 30);
```

## in operator - property existence check
```javascript
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

```

## for ..in vs. for ..of
```javascript

console.claer();
// for (key in obj)
for (key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++){
    conosle.log(array[i]);
}

for (value of array){
    console.log(value);
}
```

## Fun cloning
* Object.assign(dest, [ojb1, obj2, obj3, ...])
```javascript
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);
```

- deep copy
```javascript
// old way!
const user3 = {}
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// another way!
const user4 =  Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);//'blue'
console.log(mixed.size);//big

```

# Array
```javascript
const arr1 = new Array();
const arr2 =[1];

for (let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit, index) => console.log(fruit, 1+index));

fruits.push('a');
fruits.pop();
fruits.unshift('b');
fruits.shift();
fruits.splice(1); //1부터 다 
fruits.splice(1, 2); //1부터 두 개만 지움!
fruits.splice(1, 3, 'c', 'de', 'fgh'); //1부터 3개 지우고 뒤의 세 요소를 추가함
const fruits2 = fruits.concat(['q','w']);

console.log(fruits.indexOf('c'));

console.log(fruits.includes('w')) //-1 or the Index !!

console.log(fruits.lastIndexOf('a'));
```

# Array - More APIs!!

```javascript
const fruits = ['a', 'b', 'c'];
// to string
fruits.join() // 'a,b,c'

// string to array
const fruits2 = 'a, b, c, d';
const result = fruits2.split(','); //['a','b','c,'d']
const result2 = fruits2.split(',',2); //['a','b']

// reverse
const result3 = fruits.reverse(); //fruits자체도 바뀜

// make new array without the first two elements
let array = [1, 2, 3, 4, 5];
let result4 = array.splice(0,2);
console.log(result4); //[1,2]
console.log(array); // [3,4,5]

array = [1,2,3,4,5];
result4 = array.slice(2, 5);
console.log(array);

// manipulating object
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;

        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Studnet('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// find a student with the score 90
const result = students.find((student) => student.score === 90);

// make an array of enrolled students
const result = students.filter((student) => student.enrolled);

// make an array with only the students' scores
const result = student.map((student) => student.score);

// check if there is a student with the score lower than 50
const result = students.some((student) => student.score < 50);

// check if all students have scores lower than 50 !
const result = students.every((student) => student.score < 50);



// compute students' average score
const result = students.reduce((prev, current) => {

    //console.log('===');
    //console.log(prev);
    //console.log(current);
    return prev+current.score

}, 0); //0은 초기값

const result = students.reduceRight((prev, current)=>{
    return prev+current.score
}, 0); //뒤에서 부터!!


const answer = result /  students.length;

// make a string containing all the scores, greater than 50
const result = students
.map(student => student.score)
.filter((score) => score >= 50)
.join();

// sort in ascending order
const result = students
.map(student => student.score)
.sort((a, b) => a - b).join();

```
# JSON
## Object to JSON
```javascript
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple','banana']);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {console.log(`${name} can jump@`);}
}
json = JSON.stringify(rabbit);
console.log(json); //함수는 obj안에 있지 않아 JSON에 포함 안 됨
                    // {"name":"tori", "color":"white",..}
json = JSON.stringify(rabbit,["name"]);
console.log(json);//{"name":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'ellie' : value;
})

```

## JSON to Object
```javascript
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj)
rabbit.jump();

obj.jump(); //에러!

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); //에러!

const object = JSON.parse(json, (key, value) => {
    return key ==='birthDate' ? new Date(value) : value;
}
);
console.log(object.birthDate.getDate()); //에러 안 남!

```

* JSON 관련 유용한 사이트들!
1. JSON diff
2. JSON beautifier
3. JSON parser
4. JSON validator
5. JSON minifier


# 비동기 처리의 시작!

## CallBack
* JavaScript is synchronous.
* Execute the code block by order after hoisting.
* hoisting: var, function declaration 이 자동으로  제일 위로 올라감

* Callback 함수 : 전달한 함수를 나중에 불러줘

```javascript
console.log('1');   
setTimeout(function() {
    console.log('2');
}, 1000); //async
console.log('3');

// Synchronous Callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous Callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback!'), 2000);

//Callback Hell Example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);

    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie'){
                onSuccess({name: 'ellie', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = promt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user, 
            (userWithRole) => {
                alert('Logged In!');
            },
            (error) => {
                console.log(error)
            }
        );
    }, 
    (error) => {
        console.log(error);
    }
);

```

## Promise
* Promise is a JavaScript object for asynchronous operation.
1. State : pending -> fulfilled or rejected 
2. Producer (정보 제공) vs. Consumer(정보 사용) 

1. Producer
```javascript
// when new Promise is created, the executor runs immediately.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    // Promise 를 만듦과 동시에 우리가 전달한 executor라는
    // Callback함수가 실행됨
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});
```
=> 2 sec 이따가 (서버와 통신 mimicking) 'ellie'라는 값을 잘 전달하는 ( / 에러 전달하는) 프로미스 만듦

2. Consumer: then, catch, finally를 이용해 값을 받아올 수 있다.
```javascript
promise
.then((value) => {
    console.log(value); //ellie
}) //then도 Promise를 리턴하기에 .catch로 체이닝할 수 있는 것임
.catch(error => {
    console.log(error);
})
.finally(() => {console.log('finally')}); //실패했든 성공했든 호출됨
```

3. Promise Chaining
```javascript
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    }
}) //다른 서버와 통신 mimicking
// then은 값을 전달해도 되고, 또 다른 Promise를 전달해도 됨
.then(num => console.log(num));
```

4. Error Handling
```javascript
const getHen = () =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve('hen'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() =>reject(new Error("error!"), 1000));
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cooked`), 1000);
    }); 

getHen()
//.then(hen => getEgg(hen))
.then(getEgg) //위와 같은 뜻!
.then(egg => cook(egg))
.then(meal => console.log(meal));

getHen()
.then(getEgg)
.catch(error => {
    return 'bread';
}) //중간에 에러나면 다른 값 전달함
.then(cook)
.then(console.log)
.catch(console.log);
```

5. Callback Hell to Promise!!
```javascript
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie'){
                    resolve({name: 'ellie', role:'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
    });
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = promt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(alert('Logged In!'))
.catch(console.log);
```

3. Async, Await
: syntatic sugar=> clear style of using promise

: 무조건 둘 중 어떤 것이 더 좋다고 할 수는 없다!




### 1. async
```javascript
function fetchUser(){
    // do network request in 10 secs...
    return 'ellie';
}
const user = fetchUser();
console.log(user);
```

=> 오래 걸리는 일을 비동기적으로 처리하지 않으면
=> 그 뒤에 있는 코드들도 실행이 안 되어, 10초동안 유저는 빈 페이지만 볼 수 있다

=> Promise로 처리 시
```javascript
function fetchUser(){
    return new Promise((resolve, reject) =>{
        // do network request in 10 secs...
        resolve('ellie');
    })
}

const user = fetchUser();
user.then(console.log);
```

=> async로 처리 시 : 저절로 Promise로 바뀜!!
```javascript
async function fetchUser(){
    //do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);

```
### 2. await
=> async 함수 안에서만 쓸 수 있음
```javascript
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(3000); //3초 이따 resolve 반환
    return 'apple'; //  후에 'apple' return하는 Promise생성 (async)
}

async function getBanana(){
    await delay(3000);
    //throw 'error';
    return 'banana';
}

function getBanana(){
    return delay(3000)
    .then(() => 'banana');
} //위와 같은 함수

// 프로미스도 너무 많이 사용하면 콜백지옥 처럼 되버린다!
function pickFruits(){
    return getApple().then(apple =>{
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}
pickFruits().then(console.log);

//async 이용!
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 병렬 처리 - apple하고 banana는 서로 연관 없으니
async function pickFruits(){
    const applePromise = getApple();
    // 프로미스 만들면 프로미스 안의 블록이 바로 실행됨
    const bananaPromise = getBanana();
    const apple = await applePromise();
    const banana = await bananaPromise();
    return `${apple} + ${banana}`;
}

// 하지만 위에 처럼 더럽게! 안 해도 됨
// Promise API 중에 .all을 쓰면 됨!! - 모든 Promise를 병렬적으로 받을 때까지 모아주는 아이!
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// Promise API 중에 .race는
// 가장 먼저 리턴하는 프로미스만 처리
function pickOneFruit(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);












