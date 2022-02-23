const { Router } = require("express");
const router = new Router();
const Spaces = require("../models").space;

router.get("/", async (req, res) => {
  const getAllSpaces = await Spaces.findAll();
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
    const findSpaceById = await Spaces.findByPk(spaceId);
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

module.exports = router;
