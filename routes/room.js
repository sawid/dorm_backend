const express = require('express')
const router = express.Router()

const { listRoom, createRoom } = require('../controllers/room')

const { auth, adminCheck } = require('../middleware/auth')

// router.get('/room', auth, adminCheck, listRoom);

router.post('/room', auth, adminCheck, createRoom);



module.exports = router
