'use strict';

var _ = require('lodash');
var Pet = require('./Pet.model');

//In process, get list of Pets based on a query
exports.query = function(req, res) {
  //the following commented out code gets all pets with householdName = 'Wolthuis'
  //need to figure out how to code the api and the $resource and call
  //Pet.find({householdName:'Wolthuis'}, function (err, Pets) {
  console.dir(req);
  Pet.find(req.query, function (err, Pets) { 
    if(err) { return handleError(res, err); }
    return res.json(200, Pets);
  });
};

// Get list of Pets
exports.index = function(req, res) {
  Pet.find(function (err, Pets) {  
    if(err) { return handleError(res, err); }
    return res.json(200, Pets);
  });
};

// Get a single Pet
exports.show = function(req, res) {
  Pet.findById(req.params.id, function (err, Pet) {
    if(err) { return handleError(res, err); }
    if(!Pet) { return res.send(404); }
    return res.json(Pet);
  });
};

// Creates a new Pet in the DB.
exports.create = function(req, res) {
  Pet.create(req.body, function(err, Pet) {
    if(err) { return handleError(res, err); }
    return res.json(201, Pet);
  });
};

// Updates an existing Pet in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pet.findById(req.params.id, function (err, Pet) {
    if (err) { return handleError(res, err); }
    if(!Pet) { return res.send(404); }
    var updated = _.merge(Pet, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Pet);
    });
  });
};

// Deletes a Pet from the DB.
exports.destroy = function(req, res) {
  Pet.findById(req.params.id, function (err, Pet) {
    if(err) { return handleError(res, err); }
    if(!Pet) { return res.send(404); }
    Pet.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}