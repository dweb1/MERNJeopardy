const express = require("express");
const Category = require("../models/category");
const Question = require("../models/question")

const router = express.Router();

router.get("/", (req, res) => {
  Category.find().then((games) => {
    res.json(games);
  });
});

router.get("/:id", (req, res) => {
  Category.find().then((categories) => {
    res.json(categories);
  })
})

router.post("/", (req, res) => {
    const newCategory = new Category();
    newCategory.name = req.body.name;
    const newQuestions = req.body.questions.map((question) => {
      return new Question(question);
    });
    newCategory.questions = newQuestions;
    newCategory.save().then((category) => {
      res.json(category);
    }).catch(err => console.log(err));
})

module.exports = router;