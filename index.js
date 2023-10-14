const express = require("express");
const bodyParser = require("body-parser");
require("./utils/db");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const purchaseRoutes = require("./routes/purcahseHistoryRoutes");
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

app.use("/productApi", productRoutes);
app.use("/userApi", userRoutes);
app.use("/invoiceApi", invoiceRoutes);
app.use("/purchaseHistoryApi", purchaseRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/Welcome", (req, res) => {
  res.send("Shahzaib Irfan Hello g");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
