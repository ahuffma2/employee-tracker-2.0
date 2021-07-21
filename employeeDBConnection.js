const { connect } = require('http2');
const mysql = require('mysql');
const password = require('./password');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    //Use your own
    password: password,
    database: 'employee_db',
});

connection.connect((err) => {
    if(err) throw err;
    console.log(`Connected to ${connection.threadId}`);
    connection.end;
});

module.exports = connection;