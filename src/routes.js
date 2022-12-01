const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'property'
});



app.get('/users', function (req, res) {
    
    connection.getConnection(function (err, connection) {
    
    connection.query('SELECT * FROM users', function (error, results, fields) {
      
      res.send(results)
    });
  });
});


app.listen(3000, () => {
 console.log('Vai no navegador e entra em http://localhost:3000/users pra ver os usuários cadastrados.');
});