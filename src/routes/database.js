const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'tecate01',
    database: 'companies'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Db is connected');
    }
    
});

module.exports = mysqlConnection;
