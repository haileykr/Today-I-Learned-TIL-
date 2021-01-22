const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
})
// .set( ... )

personSchema.pre('save',function(){
    console.log("ABOUT TO SAVE!!!")
})
personSchema.post('save',function(){
    console.log("JUST SAVED!!!")
})


const Person = mongoose.model('Person', personSchema)
