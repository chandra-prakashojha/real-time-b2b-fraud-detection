
const { redisClient } = require("../config/redis");

const rateLimiter = async (req, res, next) => {

    try {

        const ip = req.ip;

        const key = `rate_limit:${ip}`;

        let requests = await redisClient.get(key);

        if (!requests) {

            await redisClient.set(key, 1, {
                EX: 60
            });

            return next();
        }

        requests = parseInt(requests);  

        if (requests >= 100) {

            return res.status(429).json({
                message: "Too many requests. Try again later."
            });
        }

        await redisClient.incr(key);

        next();

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = rateLimiter;