const mssg = require("../models/messages");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.mssg_get = (req, res) => {
  res.render("write", { title: "messages" });
};

exports.mssg_post = [
  body("title").trim().escape(),
  body("text").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("write", { title: "messages", errors: errors.array() });
    }

    const newMessage = new mssg({
      title: req.body.title,
      Text: req.body.text,
      date: new Date(),
    });

    try {
      await newMessage.save();
      await res.redirect("/");
    } catch (error) {
      next(error); 
    }
  }),
];
