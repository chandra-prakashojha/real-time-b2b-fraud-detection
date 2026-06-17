require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");

const loggerMiddleware = require("./src/middleware/loggerMiddleware");


const userRoute = require("./src/routes/userRoute");
const healthRoute = require("./src/routes/healthRoute");
const authRoute = require("./src/routes/authRoute");
const adminRoute = require("./src/routes/adminRoute");
const { connectRedis } = require("./src/config/redis");
const rateLimiter = require("./src/middleware/rateLimiter");
const dashboardRoute =
require("./src/routes/dashboardRoute");
const mlRoutes = require("./src/routes/mlRoutes");
connectDB();
connectRedis();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false,
  })
);

app.use(express.json());
app.use(rateLimiter);
app.use("/api", mlRoutes);

app.use(loggerMiddleware);

app.use("/api", userRoute);
app.use("/api", healthRoute);
app.use("/api", authRoute);
app.use("/api", adminRoute);
app.use(
  "/api/dashboard",
  dashboardRoute
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});