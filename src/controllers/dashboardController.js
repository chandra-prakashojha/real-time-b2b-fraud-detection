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
const getRiskDistribution = async (req, res) => {
  try {

    const users = await User.find(
      {},
      { riskScore: 1 }
    );

    const distribution = {
      low: 0,
      medium: 0,
      high: 0,
      critical: 0
    };

    users.forEach(user => {

      const score =
        user.riskScore || 0;

      if (score <= 25)
        distribution.low++;

      else if (score <= 50)
        distribution.medium++;

      else if (score <= 75)
        distribution.high++;

      else
        distribution.critical++;
    });

    res.status(200).json([
      {
        category: "Low",
        users:
          distribution.low
      },
      {
        category: "Medium",
        users:
          distribution.medium
      },
      {
        category: "High",
        users:
          distribution.high
      },
      {
        category: "Critical",
        users:
          distribution.critical
      }
    ]);

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
  getFraudTrendData,
  getRiskDistribution
};