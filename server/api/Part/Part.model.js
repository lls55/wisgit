'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PartSchema = new Schema({
  _id: String,
  vmrsNbr: String,
  lastMaint: String,
  altType: String,
  altPtr: String,
  partType: String,
  //deactivated: String,
  inventoryStatus: Boolean,
  deactivatedDate: Date,
  //deactivatedInfo: String,
  deactivatedUser: String,
  temp: Date,
  used: String,
  serialTypes: [String],
  barCodeNbr: String,
  locsInfo: {
    locations: String,
    locList: String,
    deactLocFlag: Boolean,
    noninvLocFlag: Boolean
  },
  unit: String,
  masterPack: String,
  exactPartNbr: String,
  classCode: String,
  active: Boolean,
  stock: Boolean,
  lastUpdateUser: String,
  createdDate: Date,
  createdUser: String
});

module.exports = mongoose.model('Part', PartSchema);