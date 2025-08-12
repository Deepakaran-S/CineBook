const express = require("express");
const router = express.Router();
const Showtime = require("../models/showtime");
const auth = require("../middlewares/authUsers");

router.post("/", auth(["admin"]), async (req, res) => {
  try {
    const showtime = await Showtime.create(req.body);
    res.status(201).json(showtime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const shows = await Showtime.findAll();
    res.status(200).json(shows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;