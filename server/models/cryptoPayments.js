const mongoose = require("mongoose");

const CryptoPaymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: false },
    fromAddress: { type: String, required: true },
    toAddress: { type: String, required: true },
    txHash: { type: String, required: true, unique: true },
    amountEth: { type: Number, required: true },
    usdAtPurchase: { type: Number, required: false },
    note: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CryptoPayments", CryptoPaymentSchema);


