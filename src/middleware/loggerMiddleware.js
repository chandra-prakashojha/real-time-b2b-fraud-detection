const ApiLog = require("../models/ApiLog");

const loggerMiddleware = async (req, res, next) => {

    try {

        const log = await ApiLog.create({
            userId: req.user?.id || "Anonymous",
            endpoint: req.originalUrl,
            method: req.method,
            ipAddress: req.ip
        });

        // Emit live API log
        global.io.emit("new-api-log", log);

    } catch (error) {

        console.log(
            "Logging Error:",
            error.message
        );

    }

    next();
};

module.exports = loggerMiddleware;