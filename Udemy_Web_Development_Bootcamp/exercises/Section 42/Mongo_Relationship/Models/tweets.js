const mongoose = require('mongoose');





const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDB', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
    console.log("MONGO CONNECTION OPEN!");
})
.catch(err => {
    console.log("MONGO CONNECTION ERROR!!");
    console.log(err)
})

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User =  mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () =>{
//     //const user = new User({username:"chickenfan99", age: 121});
//     const user = await User.findOne({username:"chickenfan99"});
//     const tweet2 = new Tweet({text: "back back bak my chickens make noises", likes: 90128319024});
//     //const tweet1 = new Tweet({text: "omg I love my chicken family", likes: 9});
//     tweet2.user = user;
//     //tweet1.user = user;
//     //user.save();
//     tweet2.save()
//     //tweet1.save();
// }

// makeTweets();

const findTweet = async () => {
    
    const t = await Tweet.find({}).populate("user", "username")

    console.log(t)
}
findTweet()