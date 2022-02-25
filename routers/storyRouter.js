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

// GET - /stories/story/:id Returns a specific storie by it's id
router.get("/story/:id", async (req, res, next) => {
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

// // GET - /stories/:id Returns all stories by the spaceId it belongs to
// router.get("/:id", async (req, res, next) => {
//   try {
//     const storiesBySpaceId = parseInt(req.params.spaceId);
//     console.log("This is are the stories in the space", storiesBySpaceId);
//     const findStoriesBySpaceId = await Stories.findBy(storiesBySpaceId);
//     if (!findStoriesBySpaceId) {
//       res.status(404).send("this story doesnt exist");
//     } else {
//       res.status(200).send({
//         message: "story found",
//         findStoriesBySpaceId: findStoriesBySpaceId,
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

// GET - /stories/:id Returns all stories by the spaceId it belongs to
router.get("/:spaceId", async (req, res, next) => {
  try {
    const { spaceId } = req.params;
    console.log("This is space", spaceId, typeof spaceId);

    // if (!spaceId) res.status(401).send("space id cannot be undefined");

    const stories = await Stories.findAll({
      where: { spaceId },
    });
    console.log("This is are the stories in the space", stories);
    if (!stories) {
      res.status(404).send("this story doesnt exist");
    } else {
      res.status(200).send({
        message: "story found",
        stories,
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
