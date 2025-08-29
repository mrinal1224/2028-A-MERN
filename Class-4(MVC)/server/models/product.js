const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },

  product_price: {
    type: String,
    required: true,
  },

  isInStock: {
    type: Boolean,
    required: true,
  },

  ratings: {
    type: Number,
  },
});

let ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel
