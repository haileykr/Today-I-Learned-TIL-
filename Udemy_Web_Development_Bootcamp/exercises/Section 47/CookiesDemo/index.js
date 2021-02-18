const express = require('express')

const app = express();

const cookieParser = require('cookie-parser')

app.use(cookieParser("thisismysecret"))


app.get('/greet', (req, res) => {
    //console.log(req.cookies)
    const {name = "No-name"}=req.cookies;
    res.send(`Hi ${name}!`)
})

app.get('/setname', (req, res) =>{
    res.cookie('name', 'stevie chicks')
    //sending it as a part of response
    res.send('OK SENT YOU A COOKIE')
})

app.get('/getsignedcookie',(req,res) => {

    res.cookie('fruit','grape', {signed: true})
    res.send("signed your cookie!")
})










app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies)
})

app.listen(3000, ()=>{
    console.log("serving")
})