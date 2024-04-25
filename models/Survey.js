const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  questions: [{
    questionText: String,
    options: [String]
  }]
});

const Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;
