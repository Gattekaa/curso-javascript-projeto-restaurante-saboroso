const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'saboroso',
  password: 'password',
  multipleStatements: true
});

module.exports = connection;
