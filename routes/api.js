const express = require('express')
const router = express.Router()

const { registerUser, listUser, deleteUser, editUser, loginUser, currentUser } = require("../controllers/auth")

const { auth, adminCheck } = require('../middleware/auth')

// Public Route
router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/auth', listUser)

router.put('/auth', editUser)

router.delete('/auth', deleteUser)

// Private Route
router.post('/current-user', auth, currentUser);

router.post("/current-admin", auth, adminCheck, currentUser);

module.exports = router