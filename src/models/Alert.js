const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },

        alertType: {
            type: String,
            required: true
        },

        severity: {
            type: String,
            default: "MEDIUM"
        },

        message: {
            type: String,
            required: true
        },

        status: {
            type: String,
            default: "OPEN"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "Alert",
    alertSchema
);