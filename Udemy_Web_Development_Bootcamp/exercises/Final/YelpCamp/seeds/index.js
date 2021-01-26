const mongoose = require('mongoose');
const cities =require('./cities')
const Campground = require('../models/campground.js');
const {places, descriptors} = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error",console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)]
//to pick a random element from an array

const seedDB = async() => {
    await Campground.deleteMany({});//delete everything
    for (let i=0;i<50;i++){
        const random1000 = Math.floor(Math.random()*1000)+1
        const price = Math.floor(Math.random()* 20) +10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}` ,
            //sample is a function so should invoke it with parens
            image:'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illo pariatur facere, vitae, quidem sit dolores cupiditate provident voluptas eius aspernatur? Aspernatur doloribus ex soluta quos! Quasi pariatur quaerat praesentium.Nisi minima fugiat aspernatur illo eius velit pariatur quas. Ea rerum ex, at tenetur esse voluptatum. Aspernatur sint, voluptas, non accusantium esse sed dolorem provident, id nulla iusto cumque rem.',
            price: price
        })
        await camp.save();
    }
    
}

seedDB().then(() => {
    //seedDB() returns promise because it's an async function
    
    mongoose.connection.close()
})