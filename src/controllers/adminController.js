const Alert = require("../models/Alert");
const User = require("../models/User");

const unlockUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.isActive = true;
        user.failedLoginAttempts = 0;

        await user.save();

        res.status(200).json({
            message: "Account Unlocked Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const getAllAlerts = async (req, res) => {

    try {

        const alerts = await Alert.find();

        res.status(200).json(alerts);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


const getAdminDashboard = (req, res) => {

    res.status(200).json({
        message: "Welcome Admin Dashboard"
    });

};

module.exports = {
    getAdminDashboard,
    getAllAlerts,
    unlockUser
};