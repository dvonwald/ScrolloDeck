const router = require("express").Router();
const { Games, User } = require("../models");

// main route
router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;
