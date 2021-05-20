# Fetch
- https://www.youtube.com/watch?v=tc8DU14qX6I&t=715s
=> fetch_example.js






# 1.2 Tabular Data - Working w/ Data & APIs in JavaScript
* CSV file from NASA!

* data.giss.nasa.gov/gistemp

* always nice to start with a test file, a smaller version of the original csv file

* D3 (JS library for visualization)
* P5.js (JS library with loadTable() and so on!!!)

* String.prototype.trim() - cleans up your data!!

# 1.3 Graphing with Chart.js - Working with Data & APIs in JavaScript

* Chart.js

# 1.4 JSON - Working with Data and APIs in JavaScript
* plot on the map where the ISS is

* "https://wheretheiss.at"

* setInterval(function, ms);

* .toFixed(2)=>round to the second decminal num!

# 2.1 Server-side with Node.js - Working with Data and APIs in JavaScript
* node
* npm init
~> package.json

* to serve webpage, index.html, you need to
```javascript
app.use(express.static());
```
* node app.js

* Node.js
* Package
* Express
* Serve Static Files

* POST with Fetch!
1. Routing
2. JSON parsing
3. POST with fetch()

* EXAMPLE!
```javascript
//Client-Side

const options = {
    method: 'POST',
    headers: {

        "Content-Type" : "application/json"
    },
    body: JSON.stringify(data),
}
fetch('/api', options)

//Server-side

app.use(express.static('public'));
app.use(express.json({limit: "1mb"}));
//POST method
app.post('/api', (req, res) => {
    console.log(req.body);
})
```

# 2.4 Saving to Database
* SQLite - Socratica

* NeDB - basic db functionality