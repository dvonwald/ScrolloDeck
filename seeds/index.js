const sequelize = require("../config/index");

const seedGames = require("./gamesData");
const seedUser = require("./userData");

//if we create another seed file add it in here
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedGames();

  process.exit(0);
};

seedAll();
