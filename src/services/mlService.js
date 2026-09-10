const axios = require("axios");
const {
    MLCircuitBreaker
} = require("./mlCircuitBreaker");

const mlCircuitBreaker = new MLCircuitBreaker({
    failureThreshold: 3,
    resetTimeout: 30000
});

const getFraudRisk = async (
    requestCount,
    failedLogins,
    loginVelocity
) => {

    // Check circuit state before calling ML service
    if (!mlCircuitBreaker.canRequest()) {

        console.log(
            "[ML CIRCUIT] OPEN - ML request blocked"
        );

        return {
            available: false,
            fallback: true,
            reason: "ML_SERVICE_CIRCUIT_OPEN"
        };
    }

    try {

        const response = await axios.post(
            `${process.env.ML_SERVICE_URL}/predict-risk`,
            {
                request_count: requestCount,
                failed_logins: failedLogins,
                login_velocity: loginVelocity
            },
            {
                timeout: 5000
            }
        );

        // ML service responded successfully
        mlCircuitBreaker.recordSuccess();

        return {
            available: true,
            fallback: false,
            data: response.data
        };

    } catch (error) {

        console.log("========== ML ERROR ==========");

        if (error.code === "ECONNABORTED") {

            console.log("ML Service Timeout");

        } else {

            console.log(error.message);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Data:", error.response.data);
            }
        }

        console.log("==============================");

        // Record ML failure
        mlCircuitBreaker.recordFailure();

        return {
            available: false,
            fallback: true,
            reason:
                error.code === "ECONNABORTED"
                    ? "ML_SERVICE_TIMEOUT"
                    : "ML_SERVICE_UNAVAILABLE"
        };
    }
};

const getMLCircuitStatus = () => {
    return mlCircuitBreaker.getState();
};

module.exports = {
    getFraudRisk,
    getMLCircuitStatus
};