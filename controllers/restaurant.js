const { Restaurant } = require("../model/restaurant");

const { ctrlWrapper, HttpError } = require("../helpers");

const getAllRestaurant = async (req, res) => {
  const restaurant = await Restaurant.find({});

  console.log(restaurant);

  if (!restaurant) throw HttpError(404, "Not Found");

  return res.status(200).json(restaurant);
};

module.exports = {
  getAllRestaurant: ctrlWrapper(getAllRestaurant),
};
