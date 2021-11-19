const express = require('express')
const mongoose = require('mongoose')
const Question = require('../database/Question')
const route = express.Router();

route.post('/', async (req, res) => {
    const { questionPrompt, answer } = req.body;
    let question = {};
    question.questionPrompt = questionPrompt;
    question.answer = answer;
    let questionModel = new Question(question);
    await questionModel.save();
    res.json(questionModel);
  });
  
module.exports = route;