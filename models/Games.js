const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection"); //this may need to change depending on file name
class Games extends Model {}
Games.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gameName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gameType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameLength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfPlayers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Games",
  }
);

module.exports = Games;
