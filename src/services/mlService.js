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

    console.log("========== ML ERROR ==========");

    console.log(error.message);

    if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
    }

    console.log("==============================");

    return null;
}
};

module.exports = {
    getFraudRisk
};