const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Alert = require("../models/Alert");
const { trackLoginVelocity } = require("../services/velocityService");
const { getFraudRisk } =
require("../services/mlService");

const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
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
            message: "User Registered Successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password are required"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        // Check account status
        if (!user.isActive) {
            return res.status(403).json({
                message: "Account Locked"
            });
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

            return res.status(400).json({
                message: "Invalid Credentials"
            });
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
            20, // Dummy request count for now
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
            message: "Login Successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    registerUser,
    loginUser
};