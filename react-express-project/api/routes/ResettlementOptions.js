const express = require("express");
const router = express.Router();
const resettlementOptionsController = require("../controllers/ResettlementOptions");

router.post('/', resettlementOptionsController.recordResettlementOptions);
router.get('/:ParentHouseNumber', resettlementOptionsController.getResettlementOptions);
router.get('/', resettlementOptionsController.getResettlementOptions);

module.exports = router;