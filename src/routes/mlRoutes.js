
const express = require("express");
const router = express.Router();

const { getFraudRisk } = require("../services/mlService");

router.get("/ml-test", async (req, res) => {

    const result = await getFraudRisk();

    res.json(result);
});

module.exports = router;