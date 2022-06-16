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
    gameId: {
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
    underscored: true,
    modelName: "Games",
  }
);

module.exports = Games;
