const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");
const auth = require("../middlewares/authUsers");
const { Error } = require("sequelize");

router.post("/", auth(["admin"]), async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

module.exports = router;
