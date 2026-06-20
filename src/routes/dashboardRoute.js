const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getRecentAlerts,
  getAnalyticsData,
  getFraudTrendData,
  getRiskDistribution
} = require("../controllers/dashboardController");

router.get("/stats", getDashboardStats);

router.get("/alerts", getRecentAlerts);

router.get("/analytics", getAnalyticsData);

router.get("/fraud-trends", getFraudTrendData);

router.get(
  "/risk-distribution",
  getRiskDistribution
);

module.exports = router;