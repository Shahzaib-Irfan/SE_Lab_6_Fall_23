const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");
const historyController = require("../controllers/purchaseHistoryController");

router.post("/invoices", invoiceController.createInvoice);
router.post("/invoices", historyController.createHistory);
router.get("/invoices/getInvoices", invoiceController.getInvoice);

module.exports = router;
