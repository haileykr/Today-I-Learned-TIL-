const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDB', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
    console.log("MONGO CONNECTION OPEN!");
})
.catch(err => {
    console.log("MONGO CONNECTION ERROR!!");
    console.log(err)
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id:{id:false},
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harie',
        last: 'Potter'
    })
    u.addresses.push({
        street: "123 Sesame Street",
        city: "New York",
        state: "NY",
        country: "USA"    
    })
    const res = await u.save()
    console.log(res)
}

const addAddress=async(id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: "99 3rd St.",
            city: "New York",
            state: "NY",
            country: "USA"
        }
    )
    const res =await user.save()
    console.log(res);
}

//makeUser();
addAddress("601136cad6a73f6faca43aca")