
const { redisClient } = require("../config/redis");

const trackLoginVelocity = async (userId) => {

    const key = `velocity:${userId}`;

    let count = await redisClient.get(key);

    if (!count) {

        await redisClient.set(key, 1, {
            EX: 60
        });

        return 1;
    }

    count = await redisClient.incr(key);

    return count;
};

module.exports = {
    trackLoginVelocity
};