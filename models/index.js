const User = require("./User");
const Games = require("./Games");

// Associations

// foreignKey coming from Games.js
Games.belongsTo(User, {
  foreignKey: "gameId",
});

User.hasMany(Games, {
  foreignKey: "gameId",
});

module.exports = { User, Games };
