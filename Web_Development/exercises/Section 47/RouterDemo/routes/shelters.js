const express= require('express');




const router = express.Router();


router.get('/', (req, res) => {
    res.send("shelters")
})
router.post('/',(req,res) => {
    res.send("having new")
})
router.get('/:id', (req, res) => {
    res.send("viewing one shleter")
})
router.get('/:id/edit',(req,res)=>{
    res.send("editing")
})

module.exports = router;