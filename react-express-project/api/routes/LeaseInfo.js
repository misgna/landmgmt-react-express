const express = require('express');
const router = express.Router();
const leaseInfoControllers = require('../controllers/LeaseInfo');

router.get('/', leaseInfoControllers.getLeaseInfo);
router.post('/search', leaseInfoControllers.getLeaseInfoById);
router.post('/', leaseInfoControllers.addLeaseInfo);
router.put('/', leaseInfoControllers.updateLeaseInfo);
router.delete('/', leaseInfoControllers.deleteLeaseInfo);

// router.get('/tenant', leaseInfoControllers.getTenantInfo);
// router.get('/tenant/:LeaseNumber', leaseInfoControllers.getTenantInfoById);
// router.post('/tenant', leaseInfoControllers.addTenantInfo);
// router.put('/tenant/:LeaseNumber', leaseInfoControllers.updateTenantInfo);
// router.delete('/tenant/:LeaseNumber', leaseInfoControllers.deleteTenantInfo);

// router.get('/landlord', leaseInfoControllers.getLandlordInfo);
// router.get('/landlord/:LeaseNumber', leaseInfoControllers.getLandlordInfoById);
// router.post('/landlord', leaseInfoControllers.addLandlordInfo);
// router.put('/landlord/:LeaseNumber', leaseInfoControllers.updateLandlordInfo);
// router.delete('/landlord/:LeaseNumber', leaseInfoControllers.deleteLandlordInfo);

module.exports = router;