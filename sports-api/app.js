// Third part libraries
var express = require("express")
var app = express()
var consign = require('consign')
var cors = require('cors')
// custom controllers 
var config = require('./config.js')

//require('./config/constants')
app.use(cors())

// models
League = require('./models/league')
Team = require('./models/team');
Player = require('./models/player')




const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());





consign(config.consign)
  .include('config')
  .then('controllers')
  .then('routes')
  .into(app)


app.listen(config.server.port, () => {
console.log("Server running on port " + config.server.port  );
});

