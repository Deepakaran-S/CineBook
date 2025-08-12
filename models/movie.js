const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releasedate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 10,
    },
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  posterurl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Movie.accociate = (models)=>{
    Movie.hasMany(models.Showtime,{foreignKey: "movieId"})
}

module.exports= Movie;