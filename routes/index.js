const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", async(req,res)=> {
  try {
    const user = await User.find();
    res.render("index", {users : user})
  } catch (error) {
    res.status(500).send(error.message)
  }
})



router.get("/createuser", (req,res)=> {
  res.render("createuser")
})

router.post("/create", async(req,res)=> {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.redirect("/")
  } catch (error) {
    res.status(500).send(error.message)
  }
})


module.exports =router