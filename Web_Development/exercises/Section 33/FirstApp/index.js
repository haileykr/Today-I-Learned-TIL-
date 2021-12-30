
const express = require('express')
const app = express()

// app.use((req, res) => {
//    console.log("WE GOT A NEW REQUEST!")
    //res.send("HELLO, WE GOT YOUR REQUEST! HERE'S THE RESPONSE!")

    //res.send({color: "green"})

    //res.send('<h1>This is my webpage</h1>')
    
// })

// /cats => 'meow'
// /dogs => 'woof'
// '/' (home route)
app.get('/cats', (req, res) => {
    console.log("CAT REQUEST !! ")//shows in the terminal1
    res.send('MEOW')

})


app.get('/dogs', (req, res) => {
    console.log("DOG REQUEST !! ")//shows in the terminal!!

    res.send('WOOF')
})

app.get('/',  (req, res) => {
    res.send('This is the homepage!')



}) 

app.get('/r/:subreddit/:postID' , (req, res) => {
    const {subreddit, postID} = req.params
    res.send(` Browsing ${postID}:This is a ${subreddit} Subreddit`)

    console.log(req.params)
})




app.get('/search' , (req, res) => {
    //console.log(req.query)
    //res.send('HI')

    const {q} = req.query;
    
    if (!q) {
        res.send('nothing found if nothing searched! ' ) 
    }
    res.send(`Search requests for ${q   } `)
})

app.get('*', (req, res) => {
    res.send('I do not know that path!')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})