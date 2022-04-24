const express = require('express');
const { listAnnoucement } = require('../controllers/dashboard');
const { lineSentBroadcast } = require('../controllers/linebot');
const router = express.Router()

const { auth, adminCheck } = require('../middleware/auth')

router.get('/annoucement', auth, adminCheck, listAnnoucement);

router.post('/annoucement', auth, adminCheck, lineSentBroadcast);



module.exports = router
