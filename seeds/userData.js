const { User } = require("../models");

const userData = {
  username: "minnie",
  password: "password",
};

const seedUserData = () => User.create(userData);

module.exports = seedUserData;
