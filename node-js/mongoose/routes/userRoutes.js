const express = require("express");
const userModel = require("../models/userModels.js");
const router = express.Router();

// routes
router.get("/", async (req, res) => {
  try {
    const allUser = await userModel.find({});
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    const user = new userModel(body);
    await user.save();
    res.status(200).json({ status: "success", id: user.id });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let user = req.body;
  try {
    let updatedUser = await userModel.findByIdAndUpdate(id, user);
    res.status(200).json({ status: "success", update: updatedUser });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;

  try {
    await userModel.findByIdAndDelete(id)
    res.status(200).json({status:"success"})
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
});

module.exports = router;
