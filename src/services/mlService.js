const axios = require("axios");

const getFraudRisk = async (
    requestCount,
    failedLogins,
    loginVelocity
) => {

    try {

        const response = await axios.post(
            "http://localhost:8000/predict-risk",
            {
                request_count: requestCount,
                failed_logins: failedLogins,
                login_velocity: loginVelocity
            }
        );

        return response.data;

    } catch (error) {

        console.log(
            "ML Service Error:",
            error.message
        );

        return null;
    }
};

module.exports = {
    getFraudRisk
};