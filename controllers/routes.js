const router = require("express").Router();
const path = require("path");

router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.post("/api/games", (req, res) => {
  console.info(`${req.method} request received to add game.`);
  const {
    id,
    gameName,
    gameType,
    gameLength,
    numberOfPlayers,
    gameDescription,
  } = req.body;
  if (
    gameName &&
    gameType &&
    gameLength &&
    numberOfPlayers &&
    gameDescription
  ) {
    const newGame = {
      gameName,
      gameType,
      gameLength,
      numberOfPlayers,
      gameDescription,
    };

    const response = {
      status: "Success",
      body: newGame,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting game");
  }
});

module.exports = router;
