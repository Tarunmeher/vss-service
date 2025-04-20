const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lcs'
});


// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1); // Exit the process on database connection error
    }
    console.log('Connected to MySQL database');
});


// Reusable function for executing queries
const executeQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, results) => {
            if (err) {
                console.error('Database query error:', err.message);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};




module.exports = {
    executeQuery
};