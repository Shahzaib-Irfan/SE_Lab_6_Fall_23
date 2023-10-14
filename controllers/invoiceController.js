const Invoice = require("../models/Invoice");

async function createInvoice(req, res) {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getInvoice(req, res) {
  try {
    const invoices = await Invoice.find({});
    res.send(invoices);
  } catch (err) {
    console.log(err);
    res.send(500).json({ error: err.message });
  }
}

module.exports = {
  createInvoice,
  getInvoice,
};
