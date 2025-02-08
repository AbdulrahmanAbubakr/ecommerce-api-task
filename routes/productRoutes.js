const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
} = require("../controllers/productController");

// Create product Router
router.post("/", addProduct);

// get all products router
router.get("/", getAllProducts);

module.exports = router;
