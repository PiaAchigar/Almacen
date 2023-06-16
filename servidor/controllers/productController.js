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
    const { page = 1, size = 10 } = req.query;
    //const result = await productService.getProducts(Number(page), Number(limit));
    const products = await productService.getProductsByPage(page, size);
    const totalItems = await productService.getCountItems();
    return res
      .status(200)
      .json({
        products,
        totalItems,
        totalPages: Math.ceil(totalItems / size),
        page: Number(page),
      });
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

const getProductsByPage = async (req, res) => {
  try {
    const page = parseInt(req.params.page);
    const pageSize = 5; // Número de productos por página

    const totalCount = await productService.getTotalProductCount();
    const totalPages = Math.ceil(totalCount / pageSize);

    const products = await productService.getProductsByPage(page, pageSize);

    return res.status(200).json({
      page,
      totalPages,
      products,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  //const { id, product } = req.params;
  const { id } = req.params;
  const product = req.body;
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

const deleteMultipleProducts = async (req, res) => {
  try {
    const { ids } = req.body; // Obtener los IDs de los productos a eliminar desde el cuerpo de la solicitud

    // Validar si se proporcionaron los IDs de los productos a eliminar
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "Invalid product IDs" });
    }

    // Eliminar los productos utilizando los IDs proporcionados
    await productService.deleteMultipleProducts(ids);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getProductsByPage,
  updateProduct,
  deleteProduct,
  deleteMultipleProducts,
};
