const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    //name: String,
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale : {
        type: Boolean,
        default: false
    },
    categories : [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        instore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S','M','L']
    }
})

productSchema.methods.greet = function() {
    console.log("HELLO!!!")
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save()
}

productSchema.statics.fireSale = function () {
    return this.updateMany({},  {onSale: true, price: 5})
}

const Product = mongoose.model('Product', productSchema )



const findProduct = async() => {
    const foundProduct = await Product.findOne({name: 'Tire Pump'})
    console.log(foundProduct)
    await foundProduct.toggleOnSale(); 
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct ) 
}

Product.fireSale().then(res=>console.log(res))

// const mountainbike = new Product({ name: 'Tire Pump', price: 599, categories: ['Cycling', 'Safe'], qty: {online: 2, instore: 5}})
// mountainbike.save()
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("ERROR!")
//         console.log(err.errors.name.properties.message )
//     })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price:-9.99}, {new: true, runValidators:true})
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("ERROR!");

//         console.log(err)
//     })