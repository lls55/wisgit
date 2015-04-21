'use strict';

var _ = require('lodash');
var Pet = require('./Pet.model');

// Get list of Pets
exports.index = function(req, res) {
  Pet.find(req.query, function (err, Pets) {
    if(err) { return handleError(res, err); }
    return res.json(200, Pets);
  });
};

/** 
  testing a find verb for the API
  not yet using this, but testing out a "like", need to design the API
  In this case, the following query, for example
  http://wis-lls55.c9.io/api/Pets/find/Rug
  would produce all Pets with "Rug" somewhere in the name field
  but notice this API does not permit specifying which field
  it just assumes you want to query the name. There are some best
  practices for this, but many differing opinions on how to design
  most sites currently use ?name=this&household=that but more contemporary
  designs use the url and not query params
*/

exports.findLike = function(req, res) {
  var regex = new RegExp(req.params.like, "i"),
    query = { name: {$regex: regex} };
  Pet.find(query, function(err, Pets) {
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
    if(err) {
      return handleError(res, err);
    }
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