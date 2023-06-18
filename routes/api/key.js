const express = require("express");

const router = express.Router();

const { getGoogleMapKey } = require("../../controllers");

router.get("/", getGoogleMapKey);

module.exports = router;
