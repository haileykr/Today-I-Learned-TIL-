const franc = require ("franc");
const langs = require("langs")
const colors = require("colors")



const input = process.argv[2];

const langCode =franc (input) 


if (langCode === "und") {
    console.log("Sorry, couldnt figure it out! Try with more samples!".green)
} else {
    const language = langs.where("3",langCode)

    console.log(language.name.green)
}