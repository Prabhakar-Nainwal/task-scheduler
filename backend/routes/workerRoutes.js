const express = require("express");
const Worker = require("../models/Worker");
const router = express.Router();


router.post("/add", async (req, res) => {
    try {
        const worker = new Worker(req.body);
        await worker.save();
        res.status(201).json(worker);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const workers = await Worker.find();
        res.json(workers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put("/update/:id", async (req, res) => {
    try {
        const worker = await Worker.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(worker);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.delete("/delete/:id", async (req, res) => {
    try {
        await Worker.findByIdAndDelete(req.params.id);
        res.json({ message: "Worker deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
