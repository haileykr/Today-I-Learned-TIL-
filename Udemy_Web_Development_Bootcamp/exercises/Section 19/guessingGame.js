let randomNumber = Math.floor(Math.random()*100)+1;
let attempts = 0;

let userInput =  parseInt(prompt("Welcome! Enter your guess (1-100): "));
while (parseInt(userInput) !== randomNumber) {
    if (userInput === 'q') break;
    attempts++;
    if (userInput >randomNumber) {
        userInput =  prompt("Too high! Guess another number: ");
    }
    else {
        userInput =  prompt("Too Low! Guess another number:");
    }
}
if (userInput === 'q') {
    alert("okay you quit!");
}
else {
    alert(`you won - it took ${attempts} attempts to guess the random number ${randomNumber}.`);
}
