const mongoose = require('mongoose');
const config = require('./../config');

mongoose.Promise = config.promises;

mongoose.connect(config.db, {useMongoClient: true}, (err, res) => {
  console.log(!err ? 'Connected to the database!' : 'Please follow the instructions about the database instalation');
});
