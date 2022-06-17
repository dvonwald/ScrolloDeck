const { User } = require("../models");

const userData = [
  {
    username: "minnie",
    password: "password",
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
