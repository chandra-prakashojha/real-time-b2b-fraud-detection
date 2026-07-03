
const { Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null
});

const fraudWorker = new Worker(
    "fraud-analysis",
    async (job) => {

        console.log("Processing Fraud Job...");

        console.log(job.data);

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