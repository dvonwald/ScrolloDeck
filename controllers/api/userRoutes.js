const router = require("express").Router();
const { User } = require("../../models");

// current route /api/users

// get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// add user
router.post("/adduser", async (req, res) => {
  console.info(`${req.method} request received to add user.`);
  // console.log("===========");
  // console.log(req.body);
  // console.log("===========");
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      // res.status(200).json(dbUserData);
      res.redirect("/");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      console.log(
        "send ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
        req.session.cookie
      );
      res.redirect("/");
      // res
      //   .status(200)
      //   .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
// route rendered for login

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

// get user by id
router.get("/userdata/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update user
router.put("/userdata/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete user
router.delete("/userdata/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
