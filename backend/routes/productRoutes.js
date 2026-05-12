const express = require("express");
const router = express.Router();
const { addProduct, getProductsByCategory } = require("../controllers/productController");
const upload = require("../config/multer");

// Add Product
router.post("/add", upload.single("image"), addProduct);

// Get Products
router.get("/:categoryId", getProductsByCategory);

module.exports = router;