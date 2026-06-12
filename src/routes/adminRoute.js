const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
    getAdminDashboard,
    getAllAlerts,
    unlockUser
} = require("../controllers/adminController");

router.get(
    "/admin",
    protect,
    authorize("ADMIN"),
    getAdminDashboard
);

router.get(
    "/admin/alerts",
    protect,
    authorize("ADMIN"),
    getAllAlerts
);

router.put(
    "/admin/unlock/:userId",
    protect,
    authorize("ADMIN"),
    unlockUser
);

module.exports = router;