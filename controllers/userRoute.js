const express = require("express");
const User = require('../models/userSchema.js');
const userRoute = express.Router();

userRoute.post('/adduser', async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

userRoute.get("/getusers", async (req, res) => {
    try {
        const data = await User.find().sort({ date: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = userRoute;
