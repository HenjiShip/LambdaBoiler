const express = require("express");
const serverless = require("serverless-http");
const app = express();
const port = 3000;

const routes = require("./routes/routes");

app.use(express.json());
app.use("/", routes);

// if for local testing and else for serverless-http
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
} else {
  module.exports.handler = serverless(app);
}
