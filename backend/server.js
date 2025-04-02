require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");
const workerRoutes = require("./routes/workerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api/tasks", taskRoutes);
app.use("/api/workers", workerRoutes);

app.get("/", (req, res) => {
    res.send("Task Scheduler API is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
