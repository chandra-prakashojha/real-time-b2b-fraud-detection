const User = require("../models/User");
const Alert = require("../models/Alert");

const getDashboardStats = async (req, res) => {
  try {

    const totalAlerts = await Alert.countDocuments();

    const highRiskUsers = await User.countDocuments({
      riskScore: { $gte: 70 }
    });

    const activeUsers = await User.countDocuments({
      isActive: true
    });

    const fraudEvents = await Alert.countDocuments({
      alertType: "ML_FRAUD_DETECTED"
    });

    res.status(200).json({
      totalAlerts,
      highRiskUsers,
      fraudEvents,
      activeUsers
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// NEW FUNCTION
const getRecentAlerts = async (req, res) => {
  try {

    const alerts = await Alert.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json(alerts);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getDashboardStats,
  getRecentAlerts
};