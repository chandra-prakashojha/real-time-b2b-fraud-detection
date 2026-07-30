const { redisClient } = require("../config/redis");

const rateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip;
        const key = `rate_limit:${ip}`;

        // Current time in milliseconds
        const currentTime = Date.now();

        // Sliding window configuration
        const windowSize = 60 * 1000; // 60 seconds
        const maxRequests = 100;

        // Remove requests older than the sliding window
        await redisClient.zRemRangeByScore(
            key,
            0,
            currentTime - windowSize
        );

        // Count requests in the current sliding window
        const requestCount = await redisClient.zCard(key);

        // Block request if limit is exceeded
        if (requestCount >= maxRequests) {
            return res.status(429).json({
                success: false,
                message: "Too many requests. Please try again later."
            });
        }

        // Generate a unique ID for every request
        const requestId = `${currentTime}-${Math.random()}`;

        // Add current request to the sorted set
        await redisClient.zAdd(key, [
            {
                score: currentTime,
                value: requestId
            }
        ]);

        // Set expiry on the key (Redis expects seconds)
        await redisClient.expire(key, Math.ceil(windowSize / 1000));

        next();

    } catch (error) {
        console.error("Rate Limiter Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = rateLimiter;