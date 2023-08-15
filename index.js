const express = require("express");
const serverless = require("serverless-http");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello world");
});

// if for local testing and else for serverless-http
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
} else {
  module.exports.handler = serverless(app);
}
