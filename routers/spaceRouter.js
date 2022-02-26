const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const Story = require("../models").story;
const auth = require("../auth/middleware");
const authMiddleware = require("../auth/middleware");

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

// ADD A STORY TO DATABASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.post("/create/story/:id", authMiddleware, async (req, res, next) => {
  const spaceId = parseInt(req.params.id);
  const { name, content, image } = req.body;
  console.log("the body", req.body);
  try {
    const space = await Space.findByPk(spaceId);
    if (!space) {
      res.status(404).send("space Id does not match");
    } else {
      const newStory = await Story.create({
        name: name,
        content: content,
        imageUrl: image,
        spaceId: spaceId,
      });
      res.send(newStory);
    }
  } catch (e) {
    next(e);
  }
});

//HERE YOU CAN MODIFY YOUR SPACY SPACE FOR FEATURE 6 !!!!!!!!!!!!!!!!!!!!!!!!!!!
router.patch("/edit/:id", async (req, res) => {
  try {
    const spaceId = req.params.id;
    const { title, description, backgroundColor, color } = req.body;

    const getSpaceById = await Space.findByPk(spaceId);
    if (!getSpaceById) {
      res.status(400).send("This is not correct");
    } else {
      const updateSpace = await getSpaceById.update({
        title,
        description,
        backgroundColor,
        color,
      });
      res.status(200).send(updateSpace);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
