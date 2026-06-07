const express = require("express");
const userRoute = require("./src/routes/userRoute");
const healthRoute = require("./src/routes/healthRoute");
const authRoute = require("./src/routes/authRoute");
const connectDB = require("./src/config/db");
const adminRoute = require("./src/routes/adminRoute");
connectDB();

const app = express();
app.use("/api", adminRoute);

app.use(express.json());
app.use("/api", userRoute);

app.use("/api", healthRoute);
app.use("/api", authRoute);


app.listen(5000, () => {
    console.log("Server running on port 5000");
});