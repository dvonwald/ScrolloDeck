const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/index");
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
    minGameLength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxGameLength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minNumberOfPlayers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxNumberOfPlayers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gameDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Games",
  }
);

module.exports = Games;
