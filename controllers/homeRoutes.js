const router = require("express").Router();
const { Games } = require("../models");

// get all games
router.get("/", async (req, res) => {
  try {
    const gameData = await Games.findAll();
    const games = gameData.map((game) => game.get({ plain: true }));
    res.render("homepage", { games, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// route render add game
router.get("/addGames", async (req, res) => {
  res.render("addGames", { loggedIn: req.session.loggedIn });
});
// route rendered for login
router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});
// route rendered for signup
router.get("/signup", async (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
});

module.exports = router;
