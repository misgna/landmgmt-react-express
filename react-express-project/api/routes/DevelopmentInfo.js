const express = require("express");
const router = express.Router();
const developmentInfoController = require('../controllers/DevelopmentInfo');

router.post('/', developmentInfoController.recordDevelopmentInfo);
router.get('/:ParentHouseNumber', developmentInfoController.getDevelopmentInfo);
router.get('/', developmentInfoController.getDevelopmentInfo);

module.exports = router;