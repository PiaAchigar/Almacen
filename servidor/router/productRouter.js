const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = Router();

router.post("/", createProduct); //funciona
router.get("/", getProducts); //funciona
router.get("/:id?", getProductById); //funciona
router.put("/:id", updateProduct); //funciona
router.delete("/:id", deleteProduct);//funciona - y si quiero eliminar de a muchos??

module.exports = router;
