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

const getAnalyticsData = async (req, res) => {
  try {

    const severityDistribution =
      await Alert.aggregate([
        {
          $group: {
            _id: "$severity",
            count: { $sum: 1 }
          }
        }
      ]);

    const formattedSeverity =
      severityDistribution.map(item => ({
        name: item._id,
        value: item.count
      }));

    res.status(200).json({
      severityDistribution: formattedSeverity
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getFraudTrendData = async (req, res) => {
  try {

    const trends = await Alert.aggregate([
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt"
            }
          },
          alerts: {
            $sum: 1
          }
        }
      },
      {
        $sort: {
          _id: 1
        }
      }
    ]);

    const formattedTrends =
      trends.map(item => ({
        date: item._id,
        alerts: item.alerts
      }));

    res.status(200).json(
      formattedTrends
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getDashboardStats,
  getRecentAlerts,
  getAnalyticsData,
  getFraudTrendData
};