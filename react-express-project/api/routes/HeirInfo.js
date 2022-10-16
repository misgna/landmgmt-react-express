const express = require('express');
const router = express.Router();
const heirInfoController = require("../controllers/HeirInfo");

router.post('/', heirInfoController.recordHeirInfo);
router.get('/:ParentHouseNumber', heirInfoController.getHeirInfo);
router.get('/', heirInfoController.getHeirInfo);

module.exports = router;