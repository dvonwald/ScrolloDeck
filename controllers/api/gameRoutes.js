const router = require('express').Router();
const { Games } = require('../../models');

// current path /api/games

// add game
router.post("/addgame", (req, res) => {
  console.info(`${req.method} request received to add Games.`);
  console.log(req.body);
  Games.create({
    gameName: req.body.gameName,
    gameType: req.body.gameType,
    maxGameLength: req.body.maxGameLength,
    minGameLength: req.body.minGameLength,
    maxNumberOfPlayers: req.body.maxNumberOfPlayers,
    minNumberOfPlayers: req.body.minNumberOfPlayers,
    gameDescription: req.body.gameDescription,
    })
        .then((newGame) => {
            res.json(newGame)
        })
        .catch((err => {
            res.json(err)
        }))
});

// get game by id
router.get("/gamedata/:id", async (req, res) => {
  try {
    const gameData = await Games.findByPk(req.params.id);
    if (!gameData) {
      res.status(404).json({ message: "No game with this id!" });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update game
router.put("/gamedata/:id", async (req, res) => {
  try {
    const gameData = await Games.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!gameData[0]) {
      res.status(404).json({ message: "No game with this id!" });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// filter games
router.get("/search/:filter/:value/:filter2/:value2", async (req, res) => {
  const {filter, value, filter2, value2} = req.params;
  const filterObject = {}
  if (filter && !filter2){
    if (filter === "numberOfPlayers"){
      filterObject.maxNumberOfPlayers = {[Op.lte]: value};
      filterObject.minNumberOfPlayers = {[Op.gte]: value};
    }
    if (filter === "gameType"){
      filterObject.gameType = value;
    }
  }
  else if (filter && filter2) {
    filterObject.maxNumberOfPlayers = {[Op.lte]: value};
    filterObject.minNumberOfPlayers = {[Op.gte]: value};
    filterObject.gameType = value2;
  }
  try{
    const gameData = await Games.findAll({
      where: filterObject
    });
    if (!gameData[0]) {
      res.status(404).json({ message: "No game with these parameters!" });
      return;
    }
    const games = gameData.map(game => {
      return game.get({
        plain: true
      })
    })
    console.log(games);
    res.status(200).json(games);
  } catch {
    res.status(500).json(err);
  }
})

// delete game
router.delete("/gamedata/:id", async (req, res) => {
  try {
    const gameData = await Games.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!gameData) {
      res.status(404).json({ message: "No game with this id!" });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;