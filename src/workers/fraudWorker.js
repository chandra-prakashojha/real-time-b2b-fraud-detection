const { Worker } = require("bullmq");
const IORedis = require("ioredis");

const User = require("../models/User");
const Alert = require("../models/Alert");

const { getFraudRisk } = require("../services/mlService");

const connection = new IORedis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null
});

const fraudWorker = new Worker(
    "fraud-analysis",
    async (job) => {

        console.log("Processing Fraud Job...");

        console.log(job.data);

        const {
            userId,
            requestCount,
            failedLogins,
            loginVelocity
        } = job.data;

        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        const fraudResult = await getFraudRisk(
            requestCount,
            failedLogins,
            loginVelocity
        );

        if (!fraudResult) {
            throw new Error("ML Service Unavailable");
        }

        user.riskScore = fraudResult.riskScore;

        await user.save();

        if (fraudResult.isSuspicious) {

            const alert = await Alert.create({
                userId: user._id,
                alertType: "ML_FRAUD_DETECTED",
                severity: "HIGH",
                message: "Machine Learning model flagged user activity"
            });

            global.io.emit("new-alert", alert);
        }

        console.log(
            `Fraud Analysis Completed for User: ${user.email}`
        );

    },
    {
        connection
    }
);

fraudWorker.on("completed", (job) => {
    console.log(`Job ${job.id} completed successfully.`);
});

fraudWorker.on("failed", (job, err) => {
    console.log(`Job ${job.id} failed.`);
    console.log(err.message);
});

module.exports = fraudWorker;