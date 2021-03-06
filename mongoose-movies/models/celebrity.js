/*jshint esversion:6*/
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const CelebritySchema = new Schema ({
  name        : String,
  occupation  : String,
  catchphrase : String
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);

module.exports = Celebrity;
