const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
  "/createuser",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),

  async (req, res) => {
    const result = await validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ result: result.array() });
    }
    const salt = await bycrypt.genSalt(10);
    const secpassword = await bycrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: secpassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  }
);

module.exports = router;
