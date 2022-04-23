const express = require('express');
const { listRenter, readRenter, createRenter, removeRenter } = require('../controllers/renter');
const router = express.Router()

const { auth, adminCheck } = require('../middleware/auth')

router.get('/renter', auth, adminCheck, listRenter);

router.get('/renter/:id', auth, adminCheck, readRenter);

router.post('/renter', auth, adminCheck, createRenter);

router.delete('/renter/:id', auth, adminCheck, removeRenter);

module.exports = router