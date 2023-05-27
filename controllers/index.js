const restaurant = require("./restaurant");
const order = require("./order");
module.exports = {
  getAllRestaurant: restaurant.getAllRestaurant,
  addOrder: order.addOrder,
};
