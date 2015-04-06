'use strict';

var _ = require('lodash');
var CPet = require('./CPet.model');

// Get list of CPets
exports.index = function(req, res) {
  CPet.find(function (err, CPets) {
    if(err) { return handleError(res, err); }
    return res.json(200, CPets);
  });
};

// Get a single CPet
exports.show = function(req, res) {
  CPet.findById(req.params.id, function (err, CPet) {
    if(err) { return handleError(res, err); }
    if(!CPet) { return res.send(404); }
    return res.json(CPet);
  });
};

// Creates a new CPet in the DB.
exports.create = function(req, res) {
  CPet.create(req.body, function(err, CPet) {
    if(err) { return handleError(res, err); }
    return res.json(201, CPet);
  });
};

// Updates an existing CPet in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  CPet.findById(req.params.id, function (err, CPet) {
    if (err) { return handleError(res, err); }
    if(!CPet) { return res.send(404); }
    var updated = _.merge(CPet, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, CPet);
    });
  });
};

// Deletes a CPet from the DB.
exports.destroy = function(req, res) {
  CPet.findById(req.params.id, function (err, CPet) {
    if(err) { return handleError(res, err); }
    if(!CPet) { return res.send(404); }
    CPet.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}