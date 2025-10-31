const express = require("express");
const router = express.Router();

// GET /api/crypto/address - returns recipient ETH wallet address from env
router.get("/crypto/address", (req, res) => {
  const address = process.env.ETH_WALLET_ADDRESS || "";
  if (!address) {
    return res.status(500).json({ success: false, message: "ETH wallet address not configured" });
  }
  return res.json({ success: true, address });
});

module.exports = router;


