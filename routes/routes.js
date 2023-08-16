const express = require("express");
const router = express.Router();

const {
  helloWorld,
  goodBye,
  getNotes,
} = require("../controllers/sqlFunctions");

const { createDoc, nativeDoc } = require("../controllers/nosqlFunctions");

router.get("/hello", helloWorld);
router.get("/goodbye", goodBye);
router.get("/notes", getNotes);

// mongodb functions
router.get("/nosql", createDoc); 
router.get("/nativenosql", nativeDoc);

module.exports = router;
