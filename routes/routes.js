const express = require("express");
const router = express.Router();

const { helloWorld, goodBye } = require("../controllers/getRoutes");

router.get("/hello", helloWorld);
router.get("/goodbye", goodBye);

module.exports = router;
