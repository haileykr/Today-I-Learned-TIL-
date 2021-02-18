const express = require('express')
const router =express.Router()


router.use((req, res, next) => {
    if (req.query.isAdmin){
        next();
    }
    res.send("SORRY NOT AN ADMIN")
}) //?isAdmin=true

router.get('/secret', (req,res) => {
    res.send("this is a secret")
})

router.get('/deleteeverything', (req, res)=> {
    res.send("ok delete it all")
}) 

module.exports = router;

