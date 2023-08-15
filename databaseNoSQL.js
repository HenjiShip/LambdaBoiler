// mySQL template connection
// npm i mysql2
// npm i dotenv --save (install dotenv locally)
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

export default databaseSQL;
