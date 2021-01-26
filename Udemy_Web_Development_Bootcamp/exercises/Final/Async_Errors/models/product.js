const mongoose = require('mongoose');

//no need to connect to mongodb here
//as this model will be required in
//index.js which is already connected

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;