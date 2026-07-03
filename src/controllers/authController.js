const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Alert = require("../models/Alert");

const { trackLoginVelocity } = require("../services/velocityService");
const { getFraudRisk } = require("../services/mlService");

const asyncHandler = require("../utils/asyncHandler");
const AppError = require("../utils/AppError");

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new AppError("User already exists", 400);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        user
    });

});

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
        throw new AppError("Invalid Credentials", 400);
    }

    // Check account status
    if (!user.isActive) {
        throw new AppError("Account Locked", 403);
    }

    // Compare password
    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {

        user.failedLoginAttempts += 1;

        if (user.failedLoginAttempts === 5) {

            user.riskScore += 20;

            const alert = await Alert.create({
                userId: user._id,
                alertType: "MULTIPLE_FAILED_LOGINS",
                severity: "HIGH",
                message: "User failed login 5 times"
            });

            global.io.emit("new-alert", alert);
        }

        if (user.failedLoginAttempts === 10) {

            user.isActive = false;

            const alert = await Alert.create({
                userId: user._id,
                alertType: "ACCOUNT_LOCKED",
                severity: "CRITICAL",
                message: "Account locked after 10 failed login attempts"
            });

            global.io.emit("new-alert", alert);
        }

        await user.save();

        throw new AppError("Invalid Credentials", 400);
    }

    // ==========================
    // LOGIN SUCCESSFUL
    // ==========================

    // Track login velocity using Redis
    const velocityCount = await trackLoginVelocity(
        user._id
    );

    // ML Fraud Detection
    const fraudResult = await getFraudRisk(
        20,
        user.failedLoginAttempts,
        velocityCount
    );

    if (fraudResult) {

        user.riskScore = fraudResult.riskScore;

        if (fraudResult.isSuspicious) {

            await Alert.create({
                userId: user._id,
                alertType: "ML_FRAUD_DETECTED",
                severity: "HIGH",
                message: "Machine Learning model flagged user activity"
            });
        }
    }

    // Velocity Alert
    if (velocityCount > 5) {

        user.riskScore += 10;

        await Alert.create({
            userId: user._id,
            alertType: "HIGH_LOGIN_VELOCITY",
            severity: "MEDIUM",
            message: "More than 5 successful logins within 60 seconds"
        });
    }

    // Reset failed attempts after successful login
    user.failedLoginAttempts = 0;

    await user.save();

    // Generate JWT Token
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    res.status(200).json({
        success: true,
        message: "Login Successful",
        token
    });

});

module.exports = {
    registerUser,
    loginUser
};