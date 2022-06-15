//a changed index.js to routes.js under config
const sequelize = require("../config/routes");

const seedGames = require("./gamesData");

//if we create another seed file add it in here
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGames();

  process.exit(0);
};

seedAll();
