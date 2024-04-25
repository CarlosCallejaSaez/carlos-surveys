const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController');


router.post('/surveys/:id/submit', responseController.submitResponse);

module.exports = router;
