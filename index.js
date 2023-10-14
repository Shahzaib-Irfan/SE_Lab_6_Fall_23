const express = require("express");
const bodyParser = require("body-parser");
require("./utils/db");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", productRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/Welcome", (req, res) => {
  res.send("Shahzaib Irfan Hello g");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
