const express = require('express');
const { lineSent, lineSentMsg, lineSentBroadcast } = require('../controllers/linebot');
const router = express.Router()

router.post('/line-send-broadcast', lineSentBroadcast);

router.post('/line-send', lineSentMsg);

module.exports = router
