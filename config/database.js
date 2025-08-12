const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create Sequelize instance with environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,   // Database name
  process.env.DB_USER,   // MySQL username
  process.env.DB_PASS,   // MySQL password
  {
    host: process.env.DB_HOST, // Database host
    dialect: "mysql",          // We're using MySQL
    logging: false             // Disable SQL logging in console
  }
);

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log("✅ Database connected successfully.");
  })
  .catch((err) => {
    console.error("❌ Unable to connect to the database:", err);
  });

module.exports = sequelize;
