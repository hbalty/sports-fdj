var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    name: String,
    thumbnail: String,
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' },]
  }); 

module.exports =  mongoose.model('Team',teamSchema);