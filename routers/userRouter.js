const { Router } = require("express");
const router = new Router();
const Users = require("../models").user;

router.get("/", async (req, res) => {
  const getAllUsers = await Users.findAll();
  res.status(200).send({
    message: "here are the Users",
    getAllUsers: getAllUsers,
  });
});

// GET - /users/:id Returns a specific user by it's id
router.get("/:id", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);
    console.log("This is my userId", userId);
    const findUserById = await Users.findByPk(userId);
    if (!findUserById) {
      res.status(404).send("this user doesnt exist");
    } else {
      res
        .status(200)
        .send({ message: "user found", findUserById: findUserById });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
