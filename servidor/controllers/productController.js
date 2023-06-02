const productService = require("../services/productService");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  //const { id, product } = req.params;
  const {id} = req.params
  const product = req.body
  try {
   await productService.updateProduct(id, product);
    return res.status(200).end();
    // const updatedProduct = await productService.updateProduct(id, product);
    // return res.status(200).json(updatedProduct);
    // await productService.updateProduct(id, product);
    // return res.status(204).end();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
