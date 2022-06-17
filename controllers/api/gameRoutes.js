const router = require('express').Router();
const { Games } = require('../../models');

// current path /api/games

// add game
router.post("/addgame", (req, res) => {
  console.info(`${req.method} request received to add Games.`);
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