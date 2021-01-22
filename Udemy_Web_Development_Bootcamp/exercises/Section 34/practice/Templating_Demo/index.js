const express = require ('express');
const app = express() 
const path = require('path');
//executing express
const redditData = require('./data.json')


app.use(express.static (path.join(__dirname,'public')))


// Key (property) - value
app.set("view engine", "ejs");
app.set('views',path.join(__dirname,'/views'))

//simple routing
app.get('/',  (req, res) => {
    //res.send("HI");

    res.render('home.ejs')
})

app.get('/r/:subreddit',  (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if (data){
        res.render('subreddit',  {...data});
    }
    else {
        res.render('notfound', {subreddit})
    }
})

app.get('/rand' ,  (req, res) =>  {
    const num = Math.floor(Math.random()*10)+1;
    res.render('rand' , {rand: num});
})



app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Monty', 'Winston', 'Rocket', 'Stephanie'
    ]
    res.render('cats', {cats})
})

app.listen(3000, () =>{
    console.log("Listening On Port 3000..!")
})