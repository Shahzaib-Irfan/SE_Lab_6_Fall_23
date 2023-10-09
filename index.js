const express = require("express");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/Welcome", (req, res) => {
  res.send("Shahzaib Irfan Hello g");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
