const Survey = require('../models/Survey');

// Obtener todas las encuestas
exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.render('index', { surveys });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Obtener una encuesta por su ID
exports.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).send('Survey not found');
    }
    res.render('survey', { survey });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Crear una nueva encuesta
exports.createSurvey = async (req, res) => {
  try {
    const { title, questions } = req.body;
    const formattedQuestions = questions.map(question => ({
      questionText: question.questionText,
      options: question.options.filter(option => option.trim() !== '')
    }));
    const survey = new Survey({ title, questions: formattedQuestions });
    await survey.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Obtener la página de edición de una encuesta
exports.getEditSurvey = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).send('Survey not found');
    }
    res.render('edit', { survey });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Actualizar una encuesta existente
exports.updateSurvey = async (req, res) => {
  try {
    const { title, questions } = req.body;
await Survey.findByIdAndUpdate(req.params.id, { title, questions: JSON.parse(questions) });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Eliminar una encuesta
exports.deleteSurvey = async (req, res) => {
  try {
    await Survey.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
