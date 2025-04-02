const express = require("express");
const Task = require("../models/Task");
const router = express.Router();


router.post("/add", async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find().populate("dependencies").populate("assignedWorker");
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put("/update/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.delete("/delete/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
