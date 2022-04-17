const express = require('express');
const { listBill, readBill, createBill, removeBill, createCost, listCost } = require('../controllers/bill');
const router = express.Router()

const { auth, adminCheck } = require('../middleware/auth')

router.get('/bill', auth, adminCheck, listBill);

router.get('/cost', auth, adminCheck, listCost);

router.get('/bill/:id', auth, adminCheck, readBill);

router.post('/bill', auth, adminCheck, createBill);

router.post('/cost', auth, adminCheck, createCost);

router.delete('/bill/:id', auth, adminCheck, removeBill);

module.exports = router
