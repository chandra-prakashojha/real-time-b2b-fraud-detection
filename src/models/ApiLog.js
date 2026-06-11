const mongoose = require("mongoose");

const apiLogSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            default: "Anonymous"
        },

        endpoint: {
            type: String,
            required: true
        },

        method: {
            type: String,
            required: true
        },

        ipAddress: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "ApiLog",
    apiLogSchema
);