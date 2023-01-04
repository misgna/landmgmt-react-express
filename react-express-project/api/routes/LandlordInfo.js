const express = require('express');
const router = express.Router();
const leaseInfoControllers = require('../controllers/LeaseInfo');

router.get('/', leaseInfoControllers.getLandlordInfo);
router.post('/search', leaseInfoControllers.getLandlordInfoById);
router.post('/', leaseInfoControllers.addLandlordInfo);
router.put('/:LeaseNumber', leaseInfoControllers.updateLandlordInfo);
router.delete('/:LeaseNumber', leaseInfoControllers.deleteLandlordInfo);

module.exports = router;