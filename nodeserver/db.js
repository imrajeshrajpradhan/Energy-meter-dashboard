var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'rajesh',
    password : 'admin@123',
    database : 'lora-db'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;