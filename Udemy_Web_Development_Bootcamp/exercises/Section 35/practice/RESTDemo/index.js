const express = require('express')
const app = express();
const path = require('path')
const {v4: uuid} = require ('uuid');
const methodOverride = require  ('method-override')



app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//fake comments as an array
let comments = [
    {  
        id: uuid(),
        username:'Todd',
        comment: 'lol thatis so funnny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})


app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments' , (req, res) => {
    const {username,  comment } = req.body
    comments.push({username, comment, id: uuid()})
    res.redirect('/comments')
})

app.get('/tacos',  (req, res) => {
    res.send ("GET /tacos response")
})

app.post('/tacos',  (req, res) => {
    console.log(req.body)
    const  {meat, qty} = req.body;
    res.send (`OK, here are your  ${qty} ${meat} tacos`)
})

app.get('/comments/:id' , (req, res) => {
    const {id} = req.params;
    
    const comment = comments.find (c => c.id === (id))
    res.render('comments/show' , {comment})

})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const foundComment = comments.find(c => c.id === id);
    //console.log (req.body.comment)
    const newCommentText = req.body.comment;
    console.log(req.body.comment)
    foundComment.comment = newCommentText;
    res.redirect('/comments')

})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
    //passing the comment as a starting place
    res.redirect('/comments')
})


app.delete('/comments/:id', (req, res) =>  {
    const {id} = req.params;
    // filter whatever which does not have that id
    comments =comments.filter(c => c.id !== id)
    res.redirect ('/comments')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})