const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  getProductsByPage,
  updateProduct,
  deleteProduct,
  deleteMultipleProducts,
} = require("../controllers/productController");

const router = Router();

router.post("/", createProduct); //funciona
router.get("/", getProducts); //funciona
//router.get("/page/:page", getProductsByPage);
router.get("/:id?", getProductById); //funciona
router.put("/:id", updateProduct); //funciona
router.delete("/:id", deleteProduct); //funciona
router.delete("/", deleteMultipleProducts); //eliminar varios productos

module.exports = router;
