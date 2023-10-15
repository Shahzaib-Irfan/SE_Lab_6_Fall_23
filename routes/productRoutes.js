const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/products", productController.createProduct);
router.get("/products/getProducts", productController.getProduct);
router.put("/products/updateProduct", productController.updateProduct);

module.exports = router;
