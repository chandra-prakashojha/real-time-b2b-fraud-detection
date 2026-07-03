const Alert = require("../models/Alert");
const User = require("../models/User");

const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

const unlockUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.userId);

    if (!user) {
        throw new AppError("User not found", 404);
    }

    user.isActive = true;
    user.failedLoginAttempts = 0;

    await user.save();

    res.status(200).json({
        message: "Account Unlocked Successfully"
    });

});

const getAllAlerts = asyncHandler(async (req, res) => {

    const alerts = await Alert.find();

    res.status(200).json(alerts);

});

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