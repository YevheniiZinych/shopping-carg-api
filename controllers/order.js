const { Order } = require("../model/order");

const { ctrlWrapper, HttpError } = require("../helpers");

const addOrder = async (req, res) => {
  const newOrder = Order.create(req.body);

  res.status(201).json(newOrder);
};

module.exports = {
  addOrder: ctrlWrapper(addOrder),
};
