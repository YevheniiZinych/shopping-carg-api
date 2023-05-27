const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const restaurantSchema = new Schema(
  {
    restaurant: String,
    link: String,
    menu: Array,
  },
  { versionKey: false }
);

restaurantSchema.post("save", handleMongooseError);

const Restaurant = model("restaurants", restaurantSchema);

module.exports = {
  Restaurant,
};
