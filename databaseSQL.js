// mySQL template connection
// npm i mysql2
// npm i dotenv --save (install dotenv locally)
// your mySQL80 service doesn't start automatically, search services,look for mySQL80, and start it to use the mySQL command line
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const databaseSQL = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

module.exports = databaseSQL;
