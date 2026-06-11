const ApiLog = require("../models/ApiLog");

const loggerMiddleware = async (req, res, next) => {

    try {

        await ApiLog.create({
            userId: req.user?.id || "Anonymous",
            endpoint: req.originalUrl,
            method: req.method,
            ipAddress: req.ip
        });

    } catch (error) {

        console.log("Logging Error:", error.message);

    }

    next();
};

module.exports = loggerMiddleware;