const Product = require("../models/product");

async function createProduct(req, res) {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getProduct(req, res) {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

async function updateProduct(req, res) {
  try {
    console.log("Price: ", req.body["price"], " id: ", req.body["id"]);
    const product = await Product.updateOne(
      { _id: req.body["id"] },
      { price: req.body["price"] }
    );
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await Product.deleteOne({ _id: req.query.id });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
