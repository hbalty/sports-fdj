var leaguesService = require('../services/leagues.service')

/**
* Get all leagues
*/
exports.getLeagues= function(req, res){
    leaguesService.getAllLeagues().then((data) => {
        res.charset = 'utf-8';
        res.send(data); 
    })
    .catch(error => {
        res.json(error)
	})
}