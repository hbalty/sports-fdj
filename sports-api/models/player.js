var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: String,
    position: String,
    thumbnail: String,
    signing: {
        amount: Number,
        currency: String
    }
  }); 

module.exports =  mongoose.model('Player',playerSchema);