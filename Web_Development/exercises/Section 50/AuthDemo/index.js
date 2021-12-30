const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const session =require('express-session')
const bcrypt = require('bcrypt')
const User = require('./models/user')







mongoose.connect('mongodb://localhost:27017/authDemo',{useNewUrlParser:true, useUnifiedTopology:true})
    .then( () => {
        console.log("Mongo Connection Open!")
    })
    .catch( (err) => {
        console.log("Mongo Connection err!")

        console.log(err)
    })

app.set('view engine', 'ejs')




app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))
//parsing the req.body
app.use(session({secret: 'notagoodsecret'}))

app.get('/', (req, res) => {
    res.send('This is the Home Page')
})

app.get('/register',(req,res) =>{
    
    res.render('register')
})

app.post('/register',async (req, res)=>{


    const {username, password} = req.body;
    //  const hash = await bcrypt.hash(password,12)
    const user=new User({username, hashedPassword:password })
    


    await user.save()
    req.session.user_id = user._id
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})



const requireLogin = (req,res, next) =>{
    if (!req.session.user_id){
        return res.redirect('/login')
    }
    next();
}

app.post('/login', async (req,res) => {
    const {username, password} = req.body
    // const user = await User.findOne({username: username})
    
    // const validPassword = await bcrypt.compare(password, user.hashedPassword)
    
    const findUser = await User.findByUserIdAndCompare(username, password)
    
    // if (validPassword){
    //     req.session.user_id = user._id;
    if (findUser){
        req.session.user_id =findUser._id
        res.redirect('/secret')
    }
    else {
        
        res.redirect('/login')
    }
    
})

app.post('/logout', (req, res) => {
    //req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

    
app.get('/secret',requireLogin, (req,res)=>{

    // if(!req.session.user_id){
    //     return res.redirect('/login')
    // }
    res.render('secret')
})

app.get('/topsecret', requireLogin, (req, res)=>{
    res.send('TOP SECRET!')
})

app.listen(3000,() =>{
    console.log("SERVING YOUR APP!")
})