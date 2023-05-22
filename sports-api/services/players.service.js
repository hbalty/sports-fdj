
/**
* @returns Promise
*/
exports.getPlayers = function(){
    return new Promise((resolve, reject) => {
        Player.find({},(err, players) => {
            if (err) reject(err);
            resolve(players)
        })
    })
}