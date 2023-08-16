const ObjectModel = require("../databases/schemas/noSQLSchema");
// const mongoose = require("mongoose");


const createDoc = async (req, res) => {
  try {
    const newObj = new ObjectModel({
      name: "John Doe",
      age: 30,
    });

    newObj
      .save()
      .then((savedObj) => {
        console.log("Object saved", savedObj);
      })
      .catch((error) => {
        console.error("Error saving object", error);
      });

    res.send(newObj);
  } catch (error) {
    res.status(500).json({ error: "Error in createDoc" });
  }
};

// nativeDoc doesn't run on aws lambda for some reason, not sure why
// const nativeDoc = async (req, res) => {
//   try {
//     // Access the native MongoDB driver through Mongoose's connection
//     const db = mongoose.connection.db;

//     // Perform MongoDB operations here
//     const collection = db.collection("Grape");
//     const result = await collection.insertOne({ name: "large grape" });

//     res.send(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// };

module.exports = { createDoc };
