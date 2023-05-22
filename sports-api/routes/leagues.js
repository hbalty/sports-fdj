var express = require('express')
const leaguesController = require('../controllers/leagues.controller');
const router = express.Router();


/**
 * get all leagues 
 */
router.get('/leagues', leaguesController.getLeagues)

module.exports = app => {
    app.use('/',router) ;
}