require("dotenv").config();

const express = require("express");

const connectDB = require("./src/config/db");

const loggerMiddleware = require("./src/middleware/loggerMiddleware");

const userRoute = require("./src/routes/userRoute");
const healthRoute = require("./src/routes/healthRoute");
const authRoute = require("./src/routes/authRoute");
const adminRoute = require("./src/routes/adminRoute");
const { connectRedis } = require("./src/config/redis");

connectDB();
connectRedis();

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api", userRoute);
app.use("/api", healthRoute);
app.use("/api", authRoute);
app.use("/api", adminRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});