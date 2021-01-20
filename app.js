const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restaurants', {useNewUrlParser: true, useUnifiedTopology: true});

const restaurantsRoute = require('./api/routes/restaurants');

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


app.use('/',restaurantsRoute);

app.use((req,res,next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    });    
});

module.exports = app;