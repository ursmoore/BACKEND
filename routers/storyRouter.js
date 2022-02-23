const { Router } = require("express");
const router = new Router();
const Stories = require("../models").story;

router.get("/", async (req, res) => {
  const getAllStories = await Stories.findAll();
  res.status(200).send({
    message: "here are the Stories",
    getAllStories: getAllStories,
  });
});

// GET - /stories/:id Returns a specific storie by it's id
router.get("/:id", async (req, res, next) => {
  try {
    const storyId = parseInt(req.params.id);
    console.log("This is my storyId", storyId);
    const findStoryById = await Stories.findByPk(storyId);
    if (!findStoryById) {
      res.status(404).send("this story doesnt exist");
    } else {
      res
        .status(200)
        .send({ message: "story found", findStoryById: findStoryById });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
