const mailControllers = require('../controllers/Mail');
const express = require('express');
const router = express.Router();

router.get('/sent/:sender', mailControllers.getSentMails);
router.get('/received/:receiver', mailControllers.getReceivedMails);
router.post('/', mailControllers.setMail);
router.put('/', mailControllers.updateStatusMail);

module.exports = router;