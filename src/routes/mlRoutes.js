const express = require("express");
const router = express.Router();

const { getFraudRisk } = require("../services/mlService");
const fraudQueue = require("../queues/fraudQueue");

router.get("/ml-test", async (req, res) => {

    const result = await getFraudRisk();

    res.json(result);
});

router.post("/test-queue", async (req, res) => {

    await fraudQueue.add("Fraud Test Job", {
        userId: "TEST_USER",
        failedLogins: 3,
        loginVelocity: 2
    });

    res.json({
        message: "Job Added Successfully"
    });

});

module.exports = router;