'use strict';

var _ = require('lodash');
var AppMU = require('./AppMU.model');

// Get list of AppMUs
exports.index = function(req, res) {
  AppMU.find(function (err, AppMUs) {
    if(err) { return handleError(res, err); }
    return res.json(200, AppMUs);
  });
};

// Get a single AppMU
exports.show = function(req, res) {
  AppMU.findById(req.params.id, function (err, AppMU) {
    if(err) { return handleError(res, err); }
    if(!AppMU) { return res.send(404); }
    return res.json(AppMU);
  });
};

// Creates a new AppMU in the DB.
exports.create = function(req, res) {
  AppMU.create(req.body, function(err, AppMU) {
    if(err) { return handleError(res, err); }
    return res.json(201, AppMU);
  });
};

// Updates an existing AppMU in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  AppMU.findById(req.params.id, function (err, AppMU) {
    if (err) { return handleError(res, err); }
    if(!AppMU) { return res.send(404); }
    var updated = _.merge(AppMU, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, AppMU);
    });
  });
};

// Deletes a AppMU from the DB.
exports.destroy = function(req, res) {
  AppMU.findById(req.params.id, function (err, AppMU) {
    if(err) { return handleError(res, err); }
    if(!AppMU) { return res.send(404); }
    AppMU.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}