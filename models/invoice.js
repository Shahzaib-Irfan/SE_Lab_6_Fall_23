const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    unitPrice: Number,
    quantity: Number,
    totalAmount: Number,
  },
  { timestamps: true }
);

invoiceSchema.pre("save", function (next) {
  this.totalAmount = this.unitPrice * this.quantity;
  next();
});

module.exports = mongoose.model("Invoice", invoiceSchema);
