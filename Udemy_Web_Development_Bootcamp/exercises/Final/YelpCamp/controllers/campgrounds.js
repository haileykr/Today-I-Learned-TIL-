const Campground = require('../models/campground')
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding")
const mapboxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding( {accessToken: mapboxToken} )

const {cloudinary}= require('../cloudinary');

module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find({})    
    res.render('campgrounds/index', { campgrounds })
}

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new')
}

module.exports.createcampground = (async (req, res) => {
    //res.send(req.body.campground);
    // data saved under 'campground'

    //if (!req.body.campground)throw new ExpressError ("Invalid Campground Data!", 400)
    const geoData =await  geocoder.forwardGeocode({
        query: req.body.campground.location,
        limit: 1
    }).send()

    const campground = new Campground(req.body.campground);
    campground.geometry= geoData.body.features[0].geometry
    campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }))
    campground.author = req.user._id
    campground.save();
    // console.log(campground)
    req.flash('success', 'Successfully made a new campground.');
    res.redirect(`/campgrounds/${campground._id}`)
})

module.exports.showCampground = async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    }).populate("author")
    //console.log(campground)
    if (!campground) {
        req.flash('error', 'Campground not found!')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/show', { campground })
}


module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)

    if (!campground) {
        req.flash('error', 'Campground not found!')
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/edit', { campground })
}

module.exports.updateCampground = async (req, res) => {
    // res.send('IT WORKED!')

    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground })

    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }))
    campground.images.push(...imgs)
    // console.log(imgs)
    await campground.save()



    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename)
        }
        await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } });
        console.log(campground)
    }

    req.flash('success', 'Successfully updated the campground.');
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.destroyCampground = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);

    req.flash('success', 'Successfully deleted the campground.');
    res.redirect('/campgrounds')
}

// module.exports.paginatedResults = (model) => {
//     //  defining  as a middleware
//     return async (req, res, next) => {
    
//         const page = parseInt(req.query.page)
//         const limit = parseInt(req.query.limit)
//         const startIndex = (page - 1) * limit
//         const endIndex = page * limit
        
//         const results = {}

//         if (endIndex < model.length){
//             results.next = {
//                 page: page + 1, // next page
//                 limit: limit
//             }
//         }
//         if (startIndex > 0) {
//             results.previous = {
//                 page: page - 1, // previous page
//                 limit: limit
//             }
//         }
//         try {
//             results.results = await model.find().limit(limit).skip(startIndex).exec()
//             res.paginatedResults = results
//             console.log(results)
//             next()
//         } catch (e) {
//             console.log(e)
//         }
//         next() 
//     }
// }