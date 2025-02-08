const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/productController");

// Create product Router
router.post("/", addProduct);

// get all products router
router.get("/", getAllProducts);
// get product by id router
router.get("/:id", getProductById);

module.exports = router;
