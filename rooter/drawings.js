const express = require("express");
const Drawing = require("../models/Drawing");
const Photo = require("../models/Drawing");

const router = express.Router();

//getAll
router.get("/", async (req, res) => {
  try {
    const drawings = await Drawing.find();
    res.json(drawings);
  } catch (err) {
    res.json({ message: err });
  }
});

//Insert
//id gerektirenleri girerken mongodb deki idleri string olarak vermek yeterli
router.post("/", async (req, res) => {
  const drawing = new Drawing({
    _id: req.body._id,
    name: req.body.name,
    yearId: String,
    tools: req.body.tools,
    filePath: req.body.filePath,
  });
  try {
    const savedDrawing = await drawing.save();
    res.json(savedDrawing);
  } catch (err) {
    res.json({ message: err });
  }
});

//getByID
router.get("/:drawingId", async (req, res) => {
  try {
    const drawing = await Drawing.findById(req.params.drawingId);
    res.json(drawing);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete
router.delete("/:drawingId", async (req, res) => {
  try {
    const deletedDrawing = await Drawing.remove({ _id: req.params.drawingId });
    res.json(deletedDrawing);
  } catch (err) {
    res.json({ message: err });
  }
});

//update
router.patch("/:drawingId", async (req, res) => {
  try {
    const updatedDrawing = await Drawing.updateOne(
      { _id: req.params.drawingId },
      {
        $set: {
          _id: req.body._id,
          name: req.body.name,
          yearId: req.body.yearId,
          tools: req.body.tools,
          filePath: req.body.filePath,
        },
      }
    );
    res.json(updatedDrawing);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
