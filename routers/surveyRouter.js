const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');


router.get('/', surveyController.getAllSurveys);
router.get('/surveys/:id', surveyController.getSurveyById);
router.post('/surveys/', surveyController.createSurvey);
router.get('/surveys/:id/edit', surveyController.getEditSurvey);
router.post('/surveys/:id', surveyController.updateSurvey);
router.post('/surveys/:id/delete', surveyController.deleteSurvey);

module.exports = router;
