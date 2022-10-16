const express = require("express");
const router = express.Router();
const dataSourceController = require('../controllers/DataSource');

router.post('/', dataSourceController.recordDataSource);
router.get('/:ParentHouseNumber', dataSourceController.getDataSource);
router.get('/', dataSourceController.getDataSource);

module.exports = router;