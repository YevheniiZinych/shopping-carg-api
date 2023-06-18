const restaurant = require("./restaurant");
const order = require("./order");
const getLocalEvn = require("./getLocalEvn");
module.exports = {
  getAllRestaurant: restaurant.getAllRestaurant,
  addOrder: order.addOrder,
  getGoogleMapKey: getLocalEvn.getGoogleMapKey,
};
