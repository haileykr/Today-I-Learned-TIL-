const mongoose = require('mongoose')
const bcrypt =require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:[true,'Username cannot be blank']
    },
    hashedPassword:{

        type:String,
        required:[true,'Password cannot be blank']
    }

})


userSchema.statics.findByUserIdAndCompare = async function (username, password) {
    const foundUser = await this.findOne({username})
    const isValid = await bcrypt.compare(password, foundUser.hashedPassword)
    return isValid ? foundUser:false;
}


userSchema.pre('save',async function(next){

    
    if (!this.isModified('hashedPassword')) return next();
    this.hashedPassword = await bcrypt.hash(this.hashedPassword,12)
    //this is the particular usr model 
   
    next()
    //here,next() is save!
})

module.exports = mongoose.model('User', userSchema)