const ApiLog = require("../models/ApiLog");
const logger = require("../utils/logger");

const loggerMiddleware = async (req, res, next) => {

    const startTime = Date.now();

    try {

        const log = await ApiLog.create({
            userId: req.user?.id || "Anonymous",
            endpoint: req.originalUrl,
            method: req.method,
            ipAddress: req.ip
        });

        // Emit live API log
        global.io.emit("new-api-log", log);

        const responseTime = Date.now() - startTime;

        logger.info(
            `${req.method} ${req.originalUrl} | IP: ${req.ip} | Response Time: ${responseTime} ms`
        );

    } catch (error) {

        logger.error(
            `Logging Error: ${error.message}`
        );

    }

    next();
};

module.exports = loggerMiddleware;