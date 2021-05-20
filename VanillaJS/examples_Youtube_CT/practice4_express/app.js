const { response } = require('express');
const express = require('express');
const app = express();

app.listen(3000, ()=> {
    console.log('listening at 3000');
})
app.use(express.static('public'));
app.use(express.json({limit: "1mb"}))

//POST method
app.post('/api', (req, res) => {
    console.log(req.body);

    const data = req.body;

    const timestamp = Date.now();
    data.timestamp = timestamp;

    //required to close the request
    //response.end();
    res.json({
        status: "success",
        timestamp,
        latitude: data.latitude,
        longitude:data.longitude,
    });
})