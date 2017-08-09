
const express = require("express");
const Game = require("../models/game");

const router = express.Router();

router.get("/", (req, res) => {
  Game.find().then((games) => {
    res.json(games);
  });
});

router.get("/:id", (req, res) => {
  Game.findById(req.params.id).then((game) => {
    res.json(game);
  })
})

router.put("/:id", (req, res) => {
  Game.findByIdAndUpdate(req.params.id, {points: req.body.points}).then((game) =>{
    res.json(game);
  })
});

module.exports = router;