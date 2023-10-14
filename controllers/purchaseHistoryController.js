const History = require("../models/history");

async function createHistory(req, res) {
  try {
    let historyObj = {
      name: req.body["name"],
      unitPrice: req.body["unitPrice"],
      quantity: req.body["quantity"],
    };
    console.log(historyObj);
    const history = await History.create(historyObj);
    res.status(201).json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getHistory(req, res) {
  try {
    const history = await History.find({});
    res.send(history);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

module.exports = {
  createHistory,
  getHistory,
};
