const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground.js');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const catchAsync =require('./utils/catchAsync'); 
const ExpressError = require('./utils/ExpressError.js')
const {campgroundSchema} = require('./schemas.js')
const Review = require('./models/review.js');

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

const app = express();


app.engine('ejs',ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))











app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const validateCampground = (req, res, next) => {

    const {error} =  campgroundSchema.validate(req.body)

    if (error){
        const msg = error.details.map(el => el.message).join(',')
        //joining elements in the object array (error.details)into a new string!

        
        
        
        throw new ExpressError(msg, 400);  
    }
    else {
        next();
    }
}

app.get('/', (req, res) => {
    res.render('home')
})

// #### 406
// app.get('/makecampground', async(req, res) => {
//     const camp = new Campground({title: 'My Backyard', description: 'cheap camping'});
//     await camp.save();
//     res.send(camp)
// });

app.get('/campgrounds',  catchAsync(async (req, res) => {


    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
})
)

app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new')
})

app.post('/campgrounds', validateCampground, catchAsync(async (req, res) => {
    //res.send(req.body.campground);
    // data saved under 'campground'

    
    //if (!req.body.campground)throw new ExpressError ("Invalid Campground Data!", 400)
    const campground = new Campground(req.body.campground);
    campground.save();
    res.redirect(`/campgrounds/${campground._id}`) 
    })
)

app.get('/campgrounds/:id', catchAsync(async (req, res) => {


    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', {campground})
}))


app.get('/campgrounds/:id/edit', catchAsync(async(req, res) => {
    const campground = await Campground.findById(req.params.id)

    res.render('campgrounds/edit', {campground})
}))

app.put('/campgrounds/:id', catchAsync(async (req, res) => {
    // res.send('IT WORKED!')

    const {id} = req.params; 

    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    res.redirect(`/campgrounds/${campground._id}`)
}))
app.delete('/campgrounds/:id', catchAsync(async(req,res) => {
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
}))

app.post('/campgrounds/:id/reviews', catchAsync(async(req, res) => {
    const campground = await Campground.findById(req.params.id)
    const review =new Review(req.body.review)
    campground.reviews.push(review);
    await review.save();
    
    
    await campground.save();

    res.redirect (`/campgrounds/${req.params.id}`)
    
}))


app.all('*',(req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
    //res.send('Oh Boy, something went wrong!')



    //const {status = 500, message = 'error'} = err;
    const {statusCode=500} = err;
    if(!err.message) err.message = 'Oh No, something went wrong'
    res.status(statusCode).render ('error',{err})
})


app.listen(3000, ()=> {
    console.log('Serving on port 3000')
});