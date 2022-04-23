const express = require('express')
const router = express.Router()

const { listRoom, createRoom, readRoom, removeRoom } = require('../controllers/room')

const { auth, adminCheck } = require('../middleware/auth')

router.get('/room', auth, adminCheck, listRoom);

router.get('/room/:id', auth, adminCheck, readRoom);

router.post('/room', auth, adminCheck, createRoom);

router.delete('/room/:id', auth, adminCheck, removeRoom);




module.exports = router
