const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id?", getProductById);
router.put("/:id", updateProduct); 
router.delete("/:id", deleteProduct);

module.exports = router;
