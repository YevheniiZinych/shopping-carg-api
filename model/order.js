const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const orderSchema = new Schema(
  {
    cart: [
      {
        id: {
          type: String,
        },
        name: {
          type: String,
        },
        prise: {
          type: Number,
        },
        amount: {
          type: String,
        },
      },
    ],
    data: {
      address: {
        type: String,
        required: [true, "Set address for delivery information"],
      },
      email: {
        type: String,
        required: [true, "Set email for delivery information"],
      },
      name: {
        type: String,
        required: [true, "Set name for delivery information"],
      },
      phone: {
        type: String,
        required: [true, "Set phone for delivery information"],
      },
    },
    totalPrice: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("orders", orderSchema);

const addOrderSchema = Joi.object({
  cart: Joi.array().items(
    Joi.object().keys({
      name: Joi.string().required(),
      id: Joi.string(),
      price: Joi.string().required(),
      amount: Joi.string().required(),
    })
  ),
  data: Joi.object().keys({
    name: Joi.string()
      .pattern(
        new RegExp("^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$")
      )
      .min(3)
      .max(30)
      .required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    phone: Joi.string().min(10).max(12).required(),
    address: Joi.string().required(),
  }),
  totalPrice: Joi.string(),
});

module.exports = {
  addOrderSchema,
  Order,
};
