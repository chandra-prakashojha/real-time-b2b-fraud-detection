const getHealthStatus = (req, res) => {
    res.json({
        status: "OK",
        message: "Fraud Detection API is healthy"
    });
};

module.exports = {
    getHealthStatus
};