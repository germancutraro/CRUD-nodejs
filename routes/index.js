module.exports = (app) => {

const mongoose = require('mongoose');
const Customers = require('../model/customer');

let index = (req, res) => res.render('index');

let customers = (req, res) => {
  Customers.find().then( docs => {
    res.render('customers', {docs})
  }, err => console.log(err));
};

let add = (req, res) => res.render('add');

let edit = (req, res) => {
  let id = req.params.customerId;
  Customers.findById(id).then( customer => {
    res.render('edit', {customer});
  }, err => res.status(404).send('Error!'));
};

let remove = (req, res) => {
  let id = req.params.customerId;
  Customers.remove({ _id: id }).then( () => {
    console.log('Removed');
  }, err => console.log('Error on removing the customer'));
  res.send('success');
};

let notFound = (req, res) => res.render('404');

// POST
let save = (req, res) => {
  let data = {name: req.body.name, surname: req.body.surname, city: req.body.city, phone: req.body.phone};
  let customer = new Customers(data);

  customer.save().then( doc => {
    console.log('Saved', doc);
  }, err => console.log('Error saving the customer!', err) );
  // Go to the list of customers
  res.redirect('/customers');
};

let update = (req, res) => {
  let data = {name: req.body.name, surname: req.body.surname, city: req.body.city, phone: req.body.phone};
  let query = {_id: req.params.customerId};
  Customers.update(query, data, err => {
    if (!err) console.log('Updated!');
  })
  res.redirect('/customers');
};

  app.get('/', index);
  app.get('/customers', customers);
  app.get('/add', add);
  app.get('/edit/:customerId', edit);
  app.get('*', notFound);
  app.post('/save', save);
  app.post('/update/:customerId', update);
  app.delete('/delete/:customerId', remove);
  
}; // Finish exports
