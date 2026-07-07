const axios = require("axios");

const getFraudRisk = async (
    requestCount,
    failedLogins,
    loginVelocity
) => {

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

        return response.data;

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

        return null;
    }
};

module.exports = {
    getFraudRisk
};