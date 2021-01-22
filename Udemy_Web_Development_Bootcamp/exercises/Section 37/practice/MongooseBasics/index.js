const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//  // we're connected!
//    console.log("CONNECTION OPEN!!")
//});




const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String

})

const Movie = mongoose.model('Movie', movieSchema)





const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

// const blah = new Movie()
// blah.save()

// Movie.insertMany([
//     {title: 'blah', rating: 'R'},
//     {title: 'blah', rating: 'R'},
//     {title: 'blah', rating: 'R'}
// ])
//     .then(data => {
//         console.log("IT WORKED!");
//         console.log(data);
//     })
