var express = require('express')
const playersController = require('../controllers/players.controller');
const router = express.Router();


/**
 * get all leagues 
 */
router.get('/players', playersController.getPlayers)

module.exports = app => {
    app.use('/',router) ;
}