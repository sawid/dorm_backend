const express = require('express')
const router = express.Router()

const { listUsers, readUsers, updateUsers, removeUsers, changeStatus, changeRole } = require('../controllers/users')

const { auth, adminCheck } = require('../middleware/auth')

// Public Route
router.get('/users', auth, adminCheck, listUsers);

router.get('/users/:id', auth, adminCheck, readUsers);

router.put('/users/:id', auth, adminCheck, updateUsers);

router.delete('/users/:id', auth, adminCheck, removeUsers);

router.post('/change-status', auth, adminCheck, changeStatus);

router.post('/change-role', auth, adminCheck, changeRole);

module.exports = router