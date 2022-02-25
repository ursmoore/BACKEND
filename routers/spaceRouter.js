const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const Story = require("../models").story;
const auth = require("../auth/middleware");

router.get("/", async (req, res) => {
  const getAllSpaces = await Space.findAll();
  res.status(200).send({
    message: "here are the Spaces",
    getAllSpaces: getAllSpaces,
  });
});

// GET - /spaces/:id Returns a specific space by it's id
router.get("/:id", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.id);
    console.log("This is my spaceId", spaceId);
    const findSpaceById = await Space.findByPk(spaceId, {
      include: [Story],
    });
    if (!findSpaceById) {
      res.status(404).send("this space doesnt exist");
    } else {
      res
        .status(200)
        .send({ message: "space found", findSpaceById: findSpaceById });
    }
  } catch (e) {
    next(e);
  }
});

// //endpoint for the delete button!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// router.delete("/:spaceId/stories/:storyId", auth, async (req, res, next) => {
//   try {
//     const { spaceId, storyId } = req.params;
//     const story = await Story.findByPk(storyId, { include: [Space] });
//     if (!story) {
//       return res.status(404).send("story not found");
//     }

//     // Check if this user is the owner of the space
//     if (story.space.userId !== req.user.id) {
//       return res.status(401).send("You're not authorized to delete this story");
//     }
//     await story.destroy();

//     res.send({ message: "ok", storyId });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:spaceId/stories/:storyId", auth, async (req, res, next) => {
//   try {
//     const { spaceId, storyId } = req.params;
//     const story = await Story.findByPk(storyId, { include: [Space] });
//     if (!story) {
//       return res.status(404).send("Story not found");
//     }

//     // Check if this user is the owner of the space
//     if (story.space.userId !== req.user.id) {
//       return res.status(401).send("You're not authorized to delete this story");
//     }

//     await story.destroy();

//     res.send({ message: "ok", storyId });
//   } catch (e) {
//     next(e);
//   }
// });

//endpoint for the delete button!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.delete("/delete/stories/:storyId", auth, async (req, res, next) => {
  try {
    const { storyId } = req.params;
    const story = await Story.findByPk(storyId);
    if (!story) {
      return res.status(404).send("story not found");
    } else {
      const deleteStory = await story.destroy();
      res.send({ message: "ok", deleteStory });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
