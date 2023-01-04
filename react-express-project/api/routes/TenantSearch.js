const express = require('express');
const router = express.Router();
const leaseInfoControllers = require('../controllers/LeaseInfo');

router.post('/', leaseInfoControllers.getSearchResult);


module.exports = router;