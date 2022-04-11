const express = require('express')
const router = express.Router()

const { registerUser, listUser, deleteUser, editUser, loginUser } = require("../controllers/auth")

const { auth } = require('../middleware/auth')

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/dashboard', auth, (req, res) => {
        res.send("Login on Dashboard")
})

router.get('/home', (req, res) => {
        res.send("Login on Dashboard")
})

router.get('/auth', listUser)

router.put('/auth', editUser)

router.delete('/auth', deleteUser)

module.exports = router