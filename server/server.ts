'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

let db = require('./contacts.js');

app.use(bodyParser.json());
app.use(cors());

let singleResponse = (item) => { return { item: item } };
let multipleResponse = (items) => { return { items: items} };

app.get('/search', function (req, res) {

  let text = req.query.text;

  let matches = db.filter(contact => contact.firstname.startsWith(text) ||
  contact.lastname.startsWith(text));

  res.json(multipleResponse(matches));
});

app.get('/contacts', function (req, res) {
  res.json(multipleResponse(db));
});

app.get('/contacts/:id', function (req, res) {
  let contact = db.find(contact => contact.id == req.params.id);
  contact ? res.json(singleResponse(contact)) : res.status(404).json({ error: 'contact not found'});
});

app.put('/contacts/:id', function (req, res) {
  let contact = db.find(contact => contact.id == req.params.id);
  if (contact) {
    Object.assign(contact, req.body);
    res.json(singleResponse(contact));
  }
  else {
    res.status(404).json({ error: 'contact not found'});
  }
});

app.post('/contacts', function (req, res){
  let maxId: number = db[db.length -1].id;
  let contact = req.body;
  contact.id = maxId + 1;
  db.push(contact);
  res.json(multipleResponse(db));
  });

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Test server listening at http://%s:%s', host, port);
});
