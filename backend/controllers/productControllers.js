const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")

// Fetch All Products
// @route /api/v1/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// Fetch Single Product
// @route /api/v1/products/:id

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product)
})

module.exports = { getProducts, getProduct }
