const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    priority: { type: Number, required: true },
    deadline: { type: Date, required: true },
    dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }], 
    assignedWorker: { type: mongoose.Schema.Types.ObjectId, ref: "Worker" }, 
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
