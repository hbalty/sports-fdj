var teamsService = require('../services/teams.service')
/**
* Get all leagues
*/
exports.getTeams= function(req, res){
    teamsService.getTeams().then((teams) => {
        res.send(teams); 
    })
    .catch(error => {
        res.json(error)
	})
}