// 232 - Default Params

// The Old Way
function multiply1(a,b) {
    b = typeof b !== 'undefined'?b:1;
    return a*b;
}

console.log(`multiply1(1,2): ${multiply1(1,2)}`) 

// Another Old Way
function multiply2(a,b) {
    if (b === undefined) {
        b = 2;
    }
    return a*b;
}

console.log(`multiply2(1,): ${multiply2(1,)}`)

// The New Way
function multiply3(a,b=2){
    return a*b;
}

console.log(`multiply3(1,): ${multiply3(1,)}`)

// Order matters
function multiply4(a=2,b){
    return a*b;
}
// multiply4(,1) does not work! Thus exchange the locations of a and b


//233 - Spread in Function Calls
const nums = [13,4,5,21,3]
console.log(Math.max(nums))  //NaN
console.log(Math.max(...nums)) //21

console.log(nums)
console.log(...nums)

console.log("hello")
console.log(... "hello")

//234 - Spread with Array Literals
const cats = ['Blue','Scout','Rocket'];
const dogs = ['Rusty','Wyatt']
console.log([...cats,'Nikos',...dogs])

//235 - Spread with Objects!
const canine = {legs:4, family:'Caninae'};
const feline = {family: 'Felidae',isfurry:true};

console.log({...feline,...canine})

//236 - Rest Params
function summation(...nums){
    return nums.reduce((total,element)=>total+element)
}
//note again that 'arguments' do not work for arrow functions

console.log(summation(1,3,6,10));

function raceResults(gold,...nums){
    console.log(`gold: ${gold} + others:${nums}`)
}

raceResults('a','b','c')


// 237-Destructuring Arrays
const scores = [10923812094821,39081390581,19023480,134780,19430,9810,1848];

const gold = scores[0];
const silver = scores[1];

const [first, second] = scores;

console.log(`scores[0]: ${gold}, scores[1]: ${silver}, and destructuring - first: ${first}, second: ${second}`)


// 238 -Destructuring Objects
const ads = {
    firstt: "wow",
    second: "nimble",
    third: "kona!!",
    fourth: "i like that",
    fifth: "nimble",
    sixth: "nimble"
}


const {firstt,third} = ads;

console.log(`destructuring objects - first: ${firstt}, third: ${third}` );

// if you wanna rename,
const {firstt: first2} = ads;
console.log(`renamed first - ${first2}`)

// and to set the default value
const {fifth, punc='&'} = ads;
console.log(fifth, punc)

// 239 - Destructuring Params

const singer = {firstName:  "Jieun ", lastName: "Lee "};

function fullName(user){
    return `${user.firstName} ${user.lastName}`
}
console.log(fullName(singer))

function fullNameParam(user){
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`
}
console.log(fullNameParam(singer))

function fullNameParamEasy({firstName, lastName}){
    return `${firstName} ${lastName}`
}
console.log(fullNameParamEasy(singer))
