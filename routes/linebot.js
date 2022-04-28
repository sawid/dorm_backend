const express = require('express');
const { lineSent, lineSentMsg, lineSentBroadcast } = require('../controllers/linebot');
const router = express.Router()

const { auth, adminCheck } = require('../middleware/auth')

router.post('/line-send-broadcast', auth, adminCheck, lineSentBroadcast);

router.post('/line-send', auth, adminCheck, lineSentMsg);

module.exports = router
