const express = require("express");

const router = express.Router();

const { addOrder } = require("../../controllers");

router.post("/", addOrder);

module.exports = router;
