require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
const surveyRouter = require('./routers/surveyRouter');
const responseRouter = require('./routers/responseRouter');

const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//  MongoDB
connectDB();



// Rutas


app.use('/', surveyRouter);
app.use('/', responseRouter);
app.use(function(req, res) {
    res.redirect("/");
  });

  
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
