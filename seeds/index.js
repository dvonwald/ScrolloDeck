const sequelize = require("../config/index");

const seedGames = require("./gamesData");

//if we create another seed file add it in here
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGames();

  process.exit(0);
};

seedAll();
