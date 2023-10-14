const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/products", productController.createProduct);
router.post("/products/getProducts", productController.getProduct);

module.exports = router;
