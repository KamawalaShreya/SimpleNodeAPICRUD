const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node_database'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('mysql connected');
})
    
module.exports = conn;