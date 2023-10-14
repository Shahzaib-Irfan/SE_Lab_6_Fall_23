const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema(
  {
    name: String,
    unitPrice: Number,
    quantity: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", HistorySchema);
