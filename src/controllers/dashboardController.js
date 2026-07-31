const User = require("../models/User");
const Alert = require("../models/Alert");

const asyncHandler = require("../utils/asyncHandler");
const { redisClient } = require("../config/redis");

const getDashboardStats = asyncHandler(async (req, res) => {

    const cacheKey = "dashboard:stats";

    // Check Redis Cache
   try {

    const cachedStats = await redisClient.get(cacheKey);

    if (cachedStats) {

        console.log("Dashboard Stats Served From Redis Cache");

        return res.status(200).json(JSON.parse(cachedStats));

    }

} catch (error) {

    console.log("Redis Cache Read Failed:", error.message);

}

    // Fetch dashboard stats from MongoDB
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

    const stats = {
        totalAlerts,
        highRiskUsers,
        fraudEvents,
        activeUsers
    };

    // Store data in Redis for 60 seconds
   try {

    await redisClient.setEx(
        cacheKey,
        60,
        JSON.stringify(stats)
    );

    console.log("Dashboard Stats Stored In Redis Cache");

} catch (error) {

    console.log("Redis Cache Store Failed:", error.message);

}

    return res.status(200).json(stats);

});
const getRecentAlerts = asyncHandler(async (req, res) => {

    const alerts = await Alert.find()
        .sort({ createdAt: -1 })
        .limit(10);

    res.status(200).json(alerts);

});

const getAnalyticsData = asyncHandler(async (req, res) => {

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

});

const getFraudTrendData = asyncHandler(async (req, res) => {

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

    res.status(200).json(formattedTrends);

});

const getRiskDistribution = asyncHandler(async (req, res) => {

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

        const score = user.riskScore || 0;

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
            users: distribution.low
        },
        {
            category: "Medium",
            users: distribution.medium
        },
        {
            category: "High",
            users: distribution.high
        },
        {
            category: "Critical",
            users: distribution.critical
        }
    ]);

});

module.exports = {
    getDashboardStats,
    getRecentAlerts,
    getAnalyticsData,
    getFraudTrendData,
    getRiskDistribution
};