const express = require('express')
const router = express.Router()

const { listProblem , readProblem} = require('../controllers/problem')
const { listRoom, createRoom, readRoom, removeRoom ,updateRoom, getRoomName, getProblem } = require('../controllers/room')

const { auth, adminCheck } = require('../middleware/auth')

router.get('/room', auth, adminCheck, listRoom);

//Problem
router.get('/problem', auth, adminCheck, listRoom);

router.get('/problem/:id', auth, adminCheck, readProblem);

router.get('/get-problem/:id', auth, adminCheck, getProblem);

router.get('/getRenter/:id', auth ,adminCheck , getRoomName) 

router.get('/get-room-name/:id', auth, adminCheck, getRoomName);

router.get('/room/:id', auth, adminCheck, readRoom);

router.put('/room/:id', auth, adminCheck, updateRoom)

router.post('/room', auth, adminCheck, createRoom);

router.delete('/room/:id', auth, adminCheck, removeRoom);




module.exports = router




// Not Use
/*
router.put('/room-name-renter/:id', auth, adminCheck, updateRoomNameRenter) 
router.put('/room-type/:id', auth, adminCheck, updateRoomType)  
router.put('/room-fee/:id', auth, adminCheck, updateRentelFee) 
router.put('/room-phone-number/:id', auth, adminCheck, updatePhoneNumber) 
*/