const router = require('express').Router();

// main route
router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;

