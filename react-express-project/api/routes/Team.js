var express = require('express');
var router = express.Router();
var teamControllers = require('../controllers/Team');

router.get('/', teamControllers.getAllTeams);
router.get('/:teamId', teamControllers.getTeamById);
router.post('/', teamControllers.recordTeam);
router.put('/:teamId', teamControllers.updateTeamById);
router.delete('/:teamId', teamControllers.deleteTeamById);

module.exports = router;