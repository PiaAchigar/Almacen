const productModel = require("../models/productModel");

const createProduct = async (product) => {
  const newProduct = new productModel({
    code: product.code,
    name: product.name,
    description: product.description,
    expirationDate: new Date(product.expirationDate),
    stock: product.stock,
    img: product.img,
  });
  return await newProduct.save();
};

const getProducts = async () => {
  return await productModel.find();
};

const getProductById = async (id) => {
  return await productModel.findById(id);
};

const updateProduct = async (id, product) => {
  return await productModel.findByIdAndUpdate(id, product);
};

const deleteProduct = async (id) => {
  return await productModel.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
