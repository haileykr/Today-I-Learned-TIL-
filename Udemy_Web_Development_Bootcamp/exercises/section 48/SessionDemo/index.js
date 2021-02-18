const express = require('express');
const app = express();
const sessions = require('express-session')


const sessionoptions = {secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false}
app.use(sessions(sessionoptions))

app.get('/viewcounts', (req, res) => {
    //res.send("YOU HAVE VIEWED THIS PAGE x times!")

    if (req.session.count){
        req.session.count+=1
    } else {
        req.session.count = 1
    } res.send(`You have viewed this page ${req.session.count}times`)
})

app.get('/register', (req, res) => {
    const {username='Anonymous'} = req.query;
    
    req.session.username = username

    res.redirect('/greet')

    //fake register tool!
})

app.get('/greet', (req, res) => {
    const {username}  = req.session;
    res.send(`Welcome back ${username}`)
})

app.listen(3000  , () => {
    console.log('listening on port 3000')
})