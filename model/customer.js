const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  phone: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('customers', customersSchema);
