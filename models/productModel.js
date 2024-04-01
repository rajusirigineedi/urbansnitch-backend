const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Give product name!"],
    },
    price: {
        type: Number,
        required: [true, "Give the price!"],
    },
    // etc. think of other fields
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;