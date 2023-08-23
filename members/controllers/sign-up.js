const User = require("../models/user")
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");



exports.create_user_get = async(req,res) => {
    res.render("sign-up",{title:"sign up"})
}

exports.create_user_post = [
  body("first_name").trim().isLength({ min: 1 }).escape(),
  body("last_name").trim().isLength({ min: 1 }).escape(),
  body("email").trim().isLength({ min: 1 }).escape(),
  body("password").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("error");
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
      });

      await newUser.save();
      res.redirect("/");
    } catch (error) {
      res.render("error");
    }
  }),
];
