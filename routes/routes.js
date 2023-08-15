const express = require("express");
const router = express.Router();

const {
  helloWorld,
  goodBye,
  getNotes,
} = require("../controllers/routeFunctions");

router.get("/hello", helloWorld);
router.get("/goodbye", goodBye);
router.get("/notes", getNotes);

module.exports = router;
