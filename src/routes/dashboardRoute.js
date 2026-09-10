const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  getDashboardStats,
  getRecentAlerts,
  getAnalyticsData,
  getFraudTrendData,
  getRiskDistribution
} = require("../controllers/dashboardController");

router.get(
  "/stats",
  protect,
  authorize("ADMIN"),
  getDashboardStats
);

router.get(
  "/alerts",
  protect,
  authorize("ADMIN"),
  getRecentAlerts
);

router.get(
  "/analytics",
  protect,
  authorize("ADMIN"),
  getAnalyticsData
);

router.get(
  "/fraud-trends",
  protect,
  authorize("ADMIN"),
  getFraudTrendData
);

router.get(
  "/risk-distribution",
  protect,
  authorize("ADMIN"),
  getRiskDistribution
);

module.exports = router;