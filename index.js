const express = require("express");
const serverless = require("serverless-http");
const app = express();
// const port = 3000;

app.use(express.json());
console.log("hello world");

app.get("/hello", (req, res) => {
  res.send("hello world");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports.handler = serverless(app);
