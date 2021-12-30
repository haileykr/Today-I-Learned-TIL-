const {campgroundSchema,reviewSchema} = require ('./schemas.js');
const ExpressError = require ('./utils/ExpressError');
const Campground = require ('./models/campground.js');
const Review = require ('./models/review.js');

module.exports.isLoggedIn =(req,res,next)=>{
    console.log("REQ.USER...", req.user);
    if(!req.isAuthenticated()) {
        //store URL they are requesting!
        //so that when the user logs in, they can be sent back to
        //where they were, instead of /campgrounds all the time!
        //console.log(req.path, req.originalUrl)
        req.session.returnTo = req.originalUrl
        req.flash ('error', 'You must be signed in!');
        return res.redirect('/login');
    }
    next();
}

module.exports.validateCampground = (req, res, next) => {
    const {error} =  campgroundSchema.validate(req.body)
    if (error){
        const msg = error.details.map(el => el.message).join(',')
        //joining elements in the object array (error.details)into a new string!
         throw new ExpressError(msg, 400);  
    }  else {
        next();
    }
}

module.exports.isAuthor = async (req, res, next) => {
    const {id} =req.params
    const campground= await Campground.findById(id)
    if(!campground.author.equals(req.user._id)){
        req.flash('error','You do not have permission to do it!')
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
    const {id,reviewId} = req.params;
    const review = await Review.findById(reviewId)
    if (!review.author.equals (req.user._id)){
        req.flash('error', 'You do not have permission to do it!')
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}

module.exports.validateReview =(req, res, next) => {
    const {error} = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el =>el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}