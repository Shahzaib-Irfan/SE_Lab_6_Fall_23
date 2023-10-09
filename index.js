const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const productRoutes = require("./routes/product");
const port = 3005;

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
