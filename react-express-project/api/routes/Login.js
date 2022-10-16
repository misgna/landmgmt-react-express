var express = require('express');
var router = express.Router();
var loginController = require('../controllers/Login');

router.post('/', loginController.verifyUser);
router.post('/create', loginController.createUserAccount);

module.exports = router;