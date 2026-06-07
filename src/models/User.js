const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["ADMIN", "ANALYST", "USER"],
        default: "USER"
    },

    isActive: {
        type: Boolean,
        default: true
    },

    riskScore: {
        type: Number,
        default: 0
    },

    failedLoginAttempts: {
        type: Number,
        default: 0
    },

    lastLogin: {
        type: Date
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);