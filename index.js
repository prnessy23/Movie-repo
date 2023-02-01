const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'madman',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

let mysql  = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

// insert statment
let sql = `INSERT INTO movies(title,)
           VALUES('Insert movie title a new row',true)`;

// Query database
// db.query('SELECT * FROM movies', function (err, results) {
// 
  // if(results){
    // results.forEach(function(student){
    // console.log(student)
  // })
  // }
  // 
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
