console.log("Hello from our first JS file!!!");



let random = Math.random();
if (random < 0.6) {
    console.log("it's working!")
}


// nesting_conditionals
const password = prompt("enter your password");
if (password.length >=6) {
    if (password.indexOf(' ') === -1) {
        console.log("Great! Your password meets requirements");
    }
    else {
        console.log("Your password cannot contain spaces");
    }
}
else {
    console.log("Your password should be at least 6 characters!");
}