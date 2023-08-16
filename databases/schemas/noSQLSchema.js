// can also use native mongodb driver with mongoose connection
const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const ObjectModel = mongoose.model("Object", objectSchema);
// Object is the name of the collection

module.exports = ObjectModel;
