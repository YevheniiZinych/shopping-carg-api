const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const restaurantSchema = new Schema(
  {},
  { versionKey: false, timestamps: true }
);

shopSchema.post("save", handleMongooseError);

const Restaurant = model("restaurant", restaurantSchema);

module.exports = {
  Restaurant,
};
