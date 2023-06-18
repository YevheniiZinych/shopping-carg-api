require("dotenv").config();
const { GOOGLE_MAP_API_KEY } = process.env;

console.log(GOOGLE_MAP_API_KEY);

const { ctrlWrapper } = require("../helpers");

const getGoogleMapKey = (req, res) => {
  res.status(200).json({ key: GOOGLE_MAP_API_KEY });
};

module.exports = {
  getGoogleMapKey: ctrlWrapper(getGoogleMapKey),
};
