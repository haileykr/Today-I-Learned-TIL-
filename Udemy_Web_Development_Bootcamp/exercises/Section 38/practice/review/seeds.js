const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand3', {useNewUrlParser: true})
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch(err=>{
        console.log("MONGO CONNECTION ERR",err);
    })

const seedProducts =[
    {
        name: 'Tomato Grapefruit',
        price: 2.99,
        category: 'vegetable'
    },
    {
        name: 'Mangomango',
        price: 5.99,
        category: 'fruit'
    },
    {
        name: 'BlueBerries',
        price: 3.99,
        category: 'berry'
    },
    
]

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

Product.insertMany(seedProducts)
.then(res => console.log(res))
.catch(e => console.log(e))

// p.save().then(p=>{
//     console.log(p)
// }).catch(e=>{
//     console.log(e)
// })