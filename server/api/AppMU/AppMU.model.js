'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*  Other possible fields:
  accesskey: String
  if we want some alt-<char> shortcuts for non-mobile
    Possibly remove:
      shortText, job
    Possibly redefine:
      menuText could be an override for the menuTitle of
      the target
    Possibly rename:
      menuTitle is TITLE currently, but with web pages
      we can get in trouble using "title"
      but we might want this to be the same tag in processes
      that are not menus
*/
var AppMUSchema = new Schema({
  _id: String,
  formerId: String,
  menuTitle: String,
  shortDesc: String,
  menuItems: [{
    job: String,
    route: String,
    menuText: String,
    shortText: String,
    source: String
  }]
},
{
    collection: 'AppMUs'
});

module.exports = mongoose.model('AppMU', AppMUSchema);