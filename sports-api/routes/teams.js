var express = require('express')
const teamsController = require('../controllers/teams.controller');
const router = express.Router();


/**
 * get all leagues 
 */
router.get('/teams', teamsController.getTeams)

module.exports = app => {
    app.use('/',router) ;
}