const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
    getAdminDashboard
} = require("../controllers/adminController");

router.get(
    "/admin",
    protect,
    authorize("ADMIN"),
    getAdminDashboard
);

module.exports = router;