var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leagueSchema = new Schema({
    name: String,
    sport: String,
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
  }); 

module.exports =  mongoose.model('leagues',leagueSchema);