const express = require('express');
const { listAnnoucement, numberTopDashboard } = require('../controllers/dashboard');
const { lineSentBroadcast } = require('../controllers/linebot');
const router = express.Router()

const { auth, adminCheck } = require('../middleware/auth')

router.get('/annoucement', auth, adminCheck, listAnnoucement);

router.get('/dashboardtopbar', auth, adminCheck, numberTopDashboard);

router.post('/annoucement', auth, adminCheck, lineSentBroadcast);



module.exports = router
