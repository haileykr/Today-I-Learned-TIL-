const jokes = require('give-me-a-joke')
const colors = require('colors')
const cowsay = require('cowsay') 
console.dir(jokes)


jokes.getRandomDadJoke(function (joke) {
    console.log (joke.rainbow);
});