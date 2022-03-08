const express = require("express");
const Drawing = require("../models/Drawing");
const Photo = require("../models/Drawing");
const router = express.Router();


router.get("/:filter", async (req, res) => {
    try {
      const drawings = await Drawing.find();
      const array = []
  
        drawings.forEach(element => {
            element.name = element.name.toLowerCase()
            if(element.name.includes(req.params.filter.toLowerCase())){
              
              array.push(element)
            }
  
        }
        
        );
      
      
      res.json(array);
    } catch (err) {
      res.json({ message: err });
    }
  });



module.exports = router;