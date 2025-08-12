const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Theater = sequelize.define("Theater", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

Theater.associate = (models)=>{
  Theater.hasMany(models.Showtime,{
    foreignKey: "theaterId"
  })
}

module.exports = Theater;