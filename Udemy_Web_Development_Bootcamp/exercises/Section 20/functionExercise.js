function greet(firstName, number) {
    for (let x=0;x < number; x++){
    console.log(`Hello ${firstName}`);
    }

}

let name = prompt("what's your name?");
let number = prompt("how many times to repeat?");

greet(name,number);

