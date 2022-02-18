const express = require("express");
const Photo = require("../models/Photo");

const router = express.Router();

//getAll
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (err) {
    res.json({ message: err });
  }
});

//Insert
//id gerektirenleri girerken mongodb deki idleri string olarak vermek yeterli
router.post("/", async (req, res) => {
  const photo = new Photo({
    _id: req.body._id,
    name: req.body.name,
    season: req.body.season,
    typeIds: req.body.typeIds,
    tools: req.body.tools,
    filePath: req.body.filePath,
  });
  try {
    const savedPost = await photo.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//getByID
router.get("/:photoId", async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.photoId);
    res.json(photo);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete
router.delete("/:photoId", async (req, res) => {
  try {
    const deletedPhoto = await Photo.remove({ _id: req.params.photoId });
    res.json(deletedPhoto);
  } catch (err) {
    res.json({ message: err });
  }
});

//update
router.patch("/:photoId", async (req, res) => {
  try {
    const updatedPhoto = await Photo.updateOne(
      { _id: req.params.photoId },
      {
        $set: {
          _id: ObjectId,
          name: req.body.name,
          season: req.body.season,
          typeIds: req.body.typeIds,
          tools: req.body.tools,
          filePath: req.body.filePath,
        },
      }
    );
    res.json(updatedPhoto);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
