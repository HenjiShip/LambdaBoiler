// mysql recreates a connection each time a query is called and mongodb always has that connection running
// mongodb native driver functionality is created inside controller
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
