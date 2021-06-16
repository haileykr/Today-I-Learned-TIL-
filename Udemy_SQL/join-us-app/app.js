const express = require("express");
const app = express();

const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "for_study@localhost",
  database: "join_us",
  password: "",
});

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));





app.use(express.static('public'));

app.get("/", function (req, res) {
  // Find Count of Users in DB
  // Respond with That Count
  const query = "SELECT COUNT(*) AS count FROM users";
  connection.query(query, function (error, results) {
    if (error) throw error;

    const count = results[0].count;
    res.render("home", { count });
  });
});

app.post("/register", function (req, res) {
  const { email } = req.body;
  console.log(email);

  const user = { email };

  connection.query("INSERT INTO users SET ?", user, (error, results) => {
    if (error) throw error;

    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("App listening on #3000..");
});

// PRACTICE!!
// const a = "SELECT 1 + 1 AS solution";
// const b = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
// const x = "SELECT COUNT(*) AS total FROM users";
// Inserting Data
// const user = {
//   email: faker.internet.email(),
//   created_at: faker.date.past(),
// };
// const end_result = connection.query(
//   "INSERT INTO users SET ?",
//   user,
//   function (error, results) {
//     if (error) throw error;
//     console.log(results);
//   }
// );

// console.log(end_result.sql);
// connection.query(x, function (error, results, fields) {
//   if (error) throw error;
//   //console.log("answer is: ", results[0].time, results[0].date, results[0].now);
//   console.log(results[0].total);
// });

// Inserting a lot of data!
// const data = [];

// for (let i = 0; i < 500; i++) {
//   data.push([faker.internet.email(), faker.date.past()]);
// }
// const query = "INSERT INTO users(email, created_at) VALUES ?";

// connection.query(query, [data], function (err, result) {
//   console.log(err);
//   console.log(result);
// });

// connection.end();
