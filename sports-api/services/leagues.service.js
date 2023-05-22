const league = require("../models/league")


/**
* @returns Promise
*/
exports.getAllLeagues = function(){
    return new Promise((resolve, reject) => {
        League.find({}).populate('teams').exec(function(err, leagues){
            if (err) reject(err);
            resolve(leagues)
        })
    })
}