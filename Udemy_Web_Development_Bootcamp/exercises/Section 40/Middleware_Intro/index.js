const express = require ('express')
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError')

app.use(morgan('tiny'))

app.use((req, res, next)=>{
    req.requestTime=Date.now();
    console.log(req.method.toUpperCase(), req.path);
    next();
});

const verifyPassword = (req, res, next) => {
    const {password} = req.query;
    if (password === 'chickennugget'){
        next();
    }
    //res.send('SORRY YOU NEED A PASSWORD!!')
    throw new AppError('Password Required!', 401);

//  res.status(401);
//  throw new Error('Password Required!')
};
    
// app.use((req,res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!");
//     next();
//     console.log("THIS IS MY FIRST MIDDLEWASRE - AFTER CALLING NEXT()!")
// });

// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE!");
//     next();
// });

app.get('/', (req, res) => {
    res.send('here!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I do not have to talk to anyone');
})

app.get('/admin',(req,res)=>{
    throw new AppError('You are not an Admin!', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
});

app.use((err, req, res, next) => {
    //console.log("**********************");
    //console.log("**************ERROR***********");
    //res.status(500).send('OH BOY, WE GOT AN ERROR');
    const {status = 500, message =  'something went wrong'} = err;
    res.status(status).send(message)

    // next(err);
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})