// Import the productModel
const productModel = require('../models/productModel');

// GET all products
const getAllProducts = (req, res) => {
  // TODO: Implement logic to fetch all products from the database
  // and send the response with the products
  console.log("ACCESSING ALL PRODUCTS")
};

// GET a single product by ID
const getProductById = (req, res) => {
  // TODO: Implement logic to fetch a product by ID from the database
  // and send the response with the product
};

// CREATE a new product
const createProduct = (req, res) => {
  // TODO: Implement logic to create a new product in the database
  // using the data from the request body
  // and send the response with the created product
};

// UPDATE a product by ID
const updateProductById = (req, res) => {
  // TODO: Implement logic to update a product by ID in the database
  // using the data from the request body
  // and send the response with the updated product
};

// DELETE a product by ID
const deleteProductById = (req, res) => {
  // TODO: Implement logic to delete a product by ID from the database
  // and send the response with a success message
};

// Export the controller functions
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
