const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    token: String,
    questions: Array
})

module.exports = mongoose.model('question', questionSchema, 'questions')