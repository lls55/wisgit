'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CPetSchema = new Schema({
  _id: String, 
  nextId: Number,
  lastDate: {type: Date, default: Date.now}
},
{
    collection: 'CPets'
});

/*
http://stackoverflow.com/questions/14454271/auto-increment-document-number-in-mongo-mongoose
// Create a sequence, we would find this in CPet not sequence
//and in record 1 not record named with the collection name
function sequenceGenerator(name){
  var SequenceSchema, Sequence;

  SequenceSchema = new mongoose.Schema({
    nextSeqNumber: { type: Number, default: 1 }
  });

  Sequence = mongoose.model(name + 'Seq', SequenceSchema);

  return {
    next: function(callback){
      Sequence.find(function(err, data){
        if(err){ throw(err); }

        if(data.length < 1){
          // create if doesn't exist create and return first
          Sequence.create({}, function(err, seq){
            if(err) { throw(err); }
            callback(seq.nextSeqNumber);
          });
        } else {
          // update sequence and return next
          Sequence.findByIdAndUpdate(data[0]._id, { $inc: { nextSeqNumber: 1 } }, function(err, seq){
            if(err) { throw(err); }
            callback(seq.nextSeqNumber);
          });
        }
      });
    }
  };
}

// sequence instance
//dawn I think this is getting the Pet record from the sequence collection
//whereas we want the 1 record from the CPet collection
var sequence = sequenceGenerator('Pet');

//the field to autoincrement in the example is named priority and is a Number

PetSchema.pre('save', function(next){
  var doc = this;
  // get the next sequence
  sequence.next(function(nextSeq){
    doc.priority = nextSeq;
    next();
  });
});

*/

module.exports = mongoose.model('CPet', CPetSchema);