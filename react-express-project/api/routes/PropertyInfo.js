const express = require("express")
const router = express.Router();
const propertyInfoController = require('../controllers/PropertyInfo');

router.post('/', propertyInfoController.recordPropertyInfo);
router.get('/:ParentHouseNumber', propertyInfoController.getPropertyInfo);
router.get('/', propertyInfoController.getPropertyInfo);

module.exports = router;