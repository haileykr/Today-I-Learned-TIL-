
const express = require ('express')
const router = express.Router()

const campgrounds = require('../controllers/campgrounds')
const catchAsync = require('../utils/catchAsync')

const Campground = require('../models/campground')
const Review= require ('../models/review')
const {storage} =require('../cloudinary')

const multer = require('multer')
const upload = multer ({storage})

const {isLoggedIn,  validateCampground,isAuthor  } = require('../middleware.js')

router.route('/')
    .get(catchAsync(campgrounds.index
    
        // Moved to Controller!
        // async (req, res) => {


        // const campgrounds = await Campground.find({})
        // res.render('campgrounds/index', {campgrounds})
    // }
    ))
    .post(
        isLoggedIn,
        upload.array('image'),
        validateCampground,
        catchAsync(campgrounds.createcampground))

    // .post(upload.array('image'),(req, res) => {
    //     console.log(req.body,req.files)
    //     res.send("IT WORKED?!")
    // })


router.get('/new',  isLoggedIn, campgrounds.renderNewForm
)


router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(
        isLoggedIn, 
        isAuthor,
        upload.array('image'),
        validateCampground,
        catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn,isAuthor,catchAsync(campgrounds.destroyCampground))



router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))




module.exports = router;