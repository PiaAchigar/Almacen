const productModel = require("../models/productModel");

const createProduct = async (product) => {
  const newProduct = new productModel({
    code: product.code,
    category: product.category,
    name: product.name,
    description: product.description,
    expirationDate: new Date(product.expirationDate),
    stock: product.stock,
    img: product.img,
  });
  return await newProduct.save();
};

const getProducts = async (page, limit) => {
  const skip = (page - 1) * limit; // Calcular el número de registros a saltar
  const totalProducts = await productModel.countDocuments(); // Obtener el número total de productos

  const products = await productModel.find().skip(skip).limit(limit).exec(); // Realizar la consulta con los parámetros de paginación

  return {
    page,
    limit,
    totalProducts,
    totalPages: Math.ceil(totalProducts / limit),
    data: products,
  };
};

const getProductById = async (id) => {
  return await productModel.findById(id);
};

const getTotalProductCount = async () => {
  return await productModel.countDocuments();
};

const getProductsByPage = async (page, pageSize) => {
  const skipCount = (page - 1) * pageSize;

  return await productModel.find().skip(skipCount).limit(pageSize);
};
const getCountItems = async() =>{
  return await productModel.count()
}
const updateProduct = async (id, product) => {
  return await productModel.findByIdAndUpdate(id, product);
};

const deleteProduct = async (id) => {
  return await productModel.findByIdAndDelete(id);
};

const deleteMultipleProducts = async (ids) => {
  return await productModel.deleteMany({ _id: { $in: ids } });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getProductsByPage,
  getTotalProductCount,
  updateProduct,
  deleteProduct,
  deleteMultipleProducts,
  getCountItems
};
