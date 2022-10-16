var express = require('express');
var router = express.Router();
var serviceControllers = require('../controllers/Team');

router.get('/', serviceControllers.getAllTeams);
router.get('/:teamId', serviceControllers.getTeamById);
router.post('/', serviceControllers.recordTeam);
router.put('/:teamId', serviceControllers.updateTeamById);
router.delete('/:teamId', serviceControllers.deleteTeamById);

module.exports = router;