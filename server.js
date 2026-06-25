require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./src/config/db");
const { connectRedis } = require("./src/config/redis");

const loggerMiddleware = require("./src/middleware/loggerMiddleware");
const rateLimiter = require("./src/middleware/rateLimiter");

const userRoute = require("./src/routes/userRoute");
const healthRoute = require("./src/routes/healthRoute");
const authRoute = require("./src/routes/authRoute");
const adminRoute = require("./src/routes/adminRoute");
const dashboardRoute = require("./src/routes/dashboardRoute");
const mlRoutes = require("./src/routes/mlRoutes");

// ======================
// Database Connections
// ======================

connectDB();
connectRedis();

// ======================
// Express App
// ======================

const app = express();

// ======================
// HTTP + Socket.IO
// ======================

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

global.io = io;

// ======================
// Socket.IO
// ======================

io.on("connection", (socket) => {

  console.log(`Client Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Client Disconnected: ${socket.id}`);
  });

});

// ======================
// Middleware
// ======================

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));

app.use(express.json());

app.use(rateLimiter);

app.use(loggerMiddleware);

// ======================
// Routes
// ======================

app.use("/api", mlRoutes);

app.use("/api", userRoute);
app.use("/api", healthRoute);
app.use("/api", authRoute);
app.use("/api", adminRoute);

app.use("/api/dashboard", dashboardRoute);

// ======================
// Start Server
// ======================

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});