const User = require('../models/user')


module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await new User({ username, email });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err){
                return next(err);
            }
        //console.log(registeredUser)
        req.flash('success', 'Welcome to YelpCamp!')
        res.redirect('/campgrounds');
        })
    } catch (e) {

        req.flash('error', e.message)
        res.redirect('register')
    }
}

module.exports.renderLogin = (req, res)=> {
    res.render('users/login')
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome Back!');
    const redirectURL = req.session.returnTo || '/campgrounds'
    
    delete req.session.returnTo;
    res.redirect(redirectURL)    
}

module.exports.logout=(req, res)=>{
    req.logout()
    req.flash('success','Logged Out!')
    res.redirect('/campgrounds')
}