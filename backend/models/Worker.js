const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Worker", WorkerSchema);
