const express = require("express");
const router = express.Router();

const { helloWorld, goodBye } = require("../controllers/routeFunctions");

router.get("/hello", helloWorld);
router.get("/goodbye", goodBye);

module.exports = router;
