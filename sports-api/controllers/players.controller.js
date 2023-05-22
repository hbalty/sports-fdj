var playersService = require('../services/players.service')

/**
* Get all leagues
*/
exports.getPlayers= function(req, res){
    playersService.getPlayers().then((data) => {
        res.charset = 'utf-8';
        res.send(data); 
    })
    .catch(error => {
        res.json(error)
	})
}