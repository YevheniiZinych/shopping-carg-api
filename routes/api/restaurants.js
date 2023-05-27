const express = require("express");

const router = express.Router();

const { getAllRestaurant } = require("../../controllers");

router.get("/", getAllRestaurant);

module.exports = router;
