const team = require("../models/team")


/**
* @returns Promise
*/
exports.getTeams = function(){
    return new Promise((resolve, reject) => {
        Team.find({}).populate('players').exec(function(err, leagues){
            if (err) reject(err);
            resolve(leagues)
        })
    })
}