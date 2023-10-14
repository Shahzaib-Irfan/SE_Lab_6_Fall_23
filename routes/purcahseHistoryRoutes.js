const express = require("express");
const router = express.Router();
const historyController = require("../controllers/purchaseHistoryController");

router.get("/purchaseHistory/getHistory", historyController.getHistory);

module.exports = router;
