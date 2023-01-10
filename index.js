const express = require('express');
const bodyParser = require('body-parser');
var db = require('./config/database');
const app = express();
var route = require('./routes/routes');

app.use(bodyParser.json());
app.use('/', route);
// const conn = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'node_database'
// });

// conn.connect((err) => {
//     if(err) throw err;
//     console.log('mysql connected');
// })


app.listen(4000, () => {
    console.log("server connected to 4000");
});

