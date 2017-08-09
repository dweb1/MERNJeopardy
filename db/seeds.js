require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Game = require('../models/game');
var Category = require('../models/category');
var Question = require('../models/question');

// Use native promises
mongoose.Promise = global.Promise;

Game.remove({}, (err) => console.log(err));
Category.remove({}, (err) => console.log(err));
Question.remove({}, (err) => console.log(err));

const beibs = new Question({
  question: "He's the Canadian pop sensation being sensational here\"There's gonna be one less lonely girl...\"",
  answer: "Justin Bieber",	
  value: 200
});
const jayz = new Question({
  question: 'This roc-a-fella introduced us to a "Hard Knock Life (Ghetto Anthem)"',
  answer:	"Jay-Z",
  value: 400
});
const amy = new Question({
  question:"\"You Sent Me Flying\", sang this British woman who died young in 2011.",
  answer: "Amy Winehouse",
  value: 600
})
const avril = new Question({
  question: "Ontario native seen hereback in high school. We hear she had a thingfor \"Sk8er Bois\"",
  answer:	"Avril Lavigne",
  value: 800
})
const zooey = new Question({
  question: "M. Ward & Zooey Deschanel, I now pronoun you this duo.",
  answer: "She & Him",
  value: 1000
})

const popMusic = new Category({
  name: "Pop Music",
  questions: [beibs, jayz, amy, avril, zooey]
})

const game = new Game({
  user: "WDI11",
  points: 0,
  categories: [popMusic]
})

popMusic.save().then(() => console.log("Category Saved!"));
game.save().then(() => console.log("Game Saved!"))

mongoose.connection.close();