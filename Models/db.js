'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'govCandi',
    password: 'toor',
    database: 'Gov_site'
  });

  connection.connect(function(err) {
    if (err) {
      throw err;
    } else {
    }
  });
  
  module.exports = connection;
  
