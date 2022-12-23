var express = require('express');
var router = express.Router();
var teamRoleController = require('../controllers/TeamRole');

router.get('/', teamRoleController.readRecord);
router.get('/:teamId/:teamRole', teamRoleController.readRecordById);
router.post('/', teamRoleController.addRecord);
router.put('/:teamId/:prevTeamRole', teamRoleController.updateRecord);
router.delete('/:teamId/:teamRole', teamRoleController.deleteRecord);

module.exports = router;