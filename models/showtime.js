const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Showtime = sequelize.define("Showtime", {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Showtime.associate = (models)=>{
  Showtime.belongsTo(models.Movie,{
    foreignKey: "movieId",
    onDelete: "CASCADE"
  })
  Showtime.belongsTo(models.Theater,{
    foreignKey: "theaterId",
    onDelete: "CASCADE"
  })
}

module.exports= Showtime;
