const mongoose = require('mongoose');

const question = new mongoose.Schema( {
    questionPrompt: {
        type:String
    },
    answer: {
        type:String
    }
});

module.exports = Question = mongoose.model('question', question)