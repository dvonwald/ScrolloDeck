const User = require("./User");
const Games = require("./Games");

// Associations

// foreignKey coming from Games.js
Games.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(Games, {
  foreignKey: "userId",
});

module.exports = { User, Games };
