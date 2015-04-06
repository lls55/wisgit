'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//mongoose.models = {};
//mongoose.modelSchemas = {};
//need to switch _id to a Number?

var PetSchema = new Schema({
  _id: String,
  name: String,
  breed: String,
  petType: String,
  gender: String,
  householdName: String,
  ownerName: String,
  birthDate: Date,
  instructions: String,
  active: Boolean,
  lastUpdateDate: Date,
  createdDate: Date
},
{
    collection: 'Pets'
});

// timedate stamps for these records
PetSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.lastUpdateDate = currentDate;
  if (!this.createdDate)
    this.createdDate = currentDate;
  next();
});

module.exports = mongoose.model('Pet', PetSchema);