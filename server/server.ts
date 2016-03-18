'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

let db = require('./monsters.js');

app.use(bodyParser.json());
app.use(cors());

let singleResponse = (monster) => {
  return {monster: monster}
};
let multipleResponse = (monsters) => {
  return {monsters: monsters}
};
let multipleSightingsReponse = (sightings) => {
  return {sightings: sightings}
};

app.get('/monsters', function (req, res) {
  res.json(multipleResponse(db));
});

app.get('/monsters/:id', function (req, res) {
  let monster = db.find(monster => monster.id == req.params.id);
  monster ? res.json(singleResponse(monster)) : res.status(404).json({error: 'monster not found'});
});

app.put('/monsters/:id', function (req, res) {
  let monster = db.find(monster => monster.id == req.params.id);
  if (monster) {
    Object.assign(monster, req.body);
    res.json(singleResponse(monster));
  }
  else {
    res.status(404).json({error: 'monster not found'});
  }
});

app.get('/monsters/sightings', function (req, res) {
  let monsters = db;
  let sightings = [];
  for (var monster of monsters) {
    sightings.push({
      id: monster.id,
      name: monster.name,
      sightings: monster.sightings
    });
  }
  res.json(multipleSightingsReponse(sightings));
});

app.post('/monsters', function (req, res) {
  let maxId:number = db[db.length - 1].id;
  let monster = req.body;
  monster.id = maxId + 1;
  db.push(monster);
  res.json(multipleResponse(db));
});

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Monster server listening at http://%s:%s', host, port);
});
