const router = require("express").Router();
const path = require("path");

// main route 
router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

// get all users
router.get("/api/userdata", async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

// add user
router.post("api/users", async (req, res) => {
  console.info(`${req.method} request received to add user.`);
  const {
    id,
    username,
    password,
  } = req.body;
  if (
    username && 
    password
  ) {
    const newGame = {
      username,
      password,
    };

    const response = {
      status: "Success",
      body: newUser,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting user");
  }
});

// get user by id
router.get("/api/userdata/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update user
router.put("/api/userdata/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete user
router.delete("/api/userdata/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all games
router.get("/api/gamedata", async (req, res) => {
  const gameData = await Game.findAll().catch((err) => {
    res.json(err);
  });
  res.json(gameData);
});

// add game
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
  
// get game by id
router.get("/api/gamedata/:id", async (req, res) => {
  try {
    const gameData = await User.findByPk(req.params.id);
    if (!gameData) {
      res.status(404).json({ message: 'No game with this id!' });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update game
router.put("/api/gamedata/:id", async (req, res) => {
  try {
    const gameData = await Game.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!gameData[0]) {
      res.status(404).json({ message: 'No game with this id!' });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete game
router.delete("/api/gamedata/:id", async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!gameData) {
      res.status(404).json({ message: 'No game with this id!' });
      return;
    }
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
