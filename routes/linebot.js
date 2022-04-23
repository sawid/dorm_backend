const express = require('express');
const { lineSent, lineSentMsg } = require('../controllers/linebot');
const router = express.Router()

router.post('/line-send', lineSentMsg);

module.exports = router
