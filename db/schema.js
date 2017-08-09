var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var Question = new Schema({
    value: Number,
    question: String,
    answer: String
})

var Category = new Schema({
    name: String,
    questions: [QuestionSchema]
})

var Game = new Schema({
    user: String,
    points: Number,
    board: [Boolean],
    categories: [CategorySchema]
})

GameSchema.pre("save", function(next){
    const emptyBoard = [
        false, false, false, false, false, false,
        false, false, false, false, false, false, 
        false, false, false, false, false, false, 
        false, false, false, false, false, false, 
        false, false, false, false, false, false 
    ];
    this.board = emptyBoard;
    next();
})

var QuestionModel = mongoose.model("Question", QuestionSchema);
var CategoryModel = mongoose.model("Category", CategorySchema);
var GameModel = mongoose.model("Game", GameSchema);

module.exports = {
  Question: QuestionModel,
  Category: CategoryModel,
  Game: GameModel
};