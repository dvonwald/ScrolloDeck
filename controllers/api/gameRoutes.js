const router = require('express').Router();
const { Games } = require('../../models');
// current path /api/games
// get all games
router.get("/", async (req, res) => {
  try {
    const gameData = await Games.findAll();
    res.json(gameData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// add game
router.post("/addgame", (req, res) => {
  console.info(`${req.method} request received to add Games.`);
  Games.create({
    gameName: req.body.gameName,
    gameType: req.body.gameType,
    gameLength: req.body.gameLength,
    numberOfPlayers: req.body.numberOfPlayers,
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
    const gameData = await User.findByPk(req.params.id);
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