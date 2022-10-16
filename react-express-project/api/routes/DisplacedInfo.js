var express = require('express');
var router = express.Router();
var displacedInfoController = require("../controllers/DisplacedInfo");

router.post('/', displacedInfoController.recordDisplacedInfo);
router.get('/:ParentHouseNumber', displacedInfoController.getDisplacedInfo);
router.get('/', displacedInfoController.getDisplacedInfo);

module.exports = router;