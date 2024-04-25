const Response = require('../models/Response');

// Enviar una respuesta para una encuesta
exports.submitResponse = async (req, res) => {
  try {
    const surveyId = req.params.id;
    const { responses } = req.body;

    const formattedResponses = responses.map((response, index) => ({
      questionIndex: index,
      selectedOptions: Object.values(response).filter(option => option !== 'on') 
    }));

    const response = new Response({
      survey: surveyId,
      answers: formattedResponses
    });

    await response.save();

    res.send('Thank you for submitting the survey!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
