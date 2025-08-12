const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");
const authroutes = require ("./routes/authroutes")
const Movieroutes = require("./routes/movieRoutes")
const Showtimes = require ("./routes/showtimeRoutes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authroutes);
app.use("/api/moviesadd", Movieroutes);
app.use("/api/movies", Movieroutes);
app.use("/api/addshowtimes", Showtimes);
app.use("/api/Shows", Showtimes);

// Sync DB
sequelize.sync({ alter: true })
  .then(() => console.log("✅ All models synced"))
  .catch(err => console.error("❌ Sync error:", err));

module.exports = app;
