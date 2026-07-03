
const { Queue } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null
});

const fraudQueue = new Queue("fraud-analysis", {
    connection
});

module.exports = fraudQueue;