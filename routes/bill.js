const express = require('express');
const { listBill, readBill, createBill, removeBill, createCost, listCost, updateBill, readMonth, changePayStatus, changeNotiStatus } = require('../controllers/bill');
const router = express.Router()

const { auth, adminCheck } = require('../middleware/auth')

router.get('/bill', auth, adminCheck, listBill);

router.get('/cost', auth, adminCheck, listCost);

router.get('/bill/:id', auth, adminCheck, readBill);

router.put('/bill/:id', auth, adminCheck, updateBill);

router.post('/bill/:id', auth, adminCheck, readMonth);

router.post('/payStatus/:id', auth, adminCheck, changePayStatus);

router.post('/notiStatus/:id', auth, adminCheck, changeNotiStatus);

router.post('/bill', auth, adminCheck, createBill);

router.post('/cost', auth, adminCheck, createCost);

router.delete('/bill/:id', auth, adminCheck, removeBill);

module.exports = router