const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey'
  },
  answers: [{
    questionIndex: Number,
    selectedOptions: [String]
  }]
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;
