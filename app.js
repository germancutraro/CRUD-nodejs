const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// App
const app = express();
// Personals libs
const config = require('./config');
const db = require('./libs/db');
// Middelware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/public', express.static('public'));
// Configuration settings
app.set('view engine', 'ejs');
// Variables
const port = config.port;
// Routes
const routes = require('./routes')(app);

app.listen(port, err => console.log( err ? `An error has ocurred! ${err}` : `App running on port ${port}` ) );
