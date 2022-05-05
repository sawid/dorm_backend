const express = require('express');
const router = express.Router()

const { listUsers, readUsers, updateUsers, removeUsers, changeStatus, changeRole, changeFirstname, changeLastname, changeTelnumber, changeEmail, changeCellnumber } = require('../controllers/users')

const { auth, adminCheck } = require('../middleware/auth')

// Public Route
router.get('/users', auth, adminCheck, listUsers);

router.get('/users/:id', auth , readUsers);

router.put('/users/:id', auth, adminCheck, updateUsers);

router.delete('/users/:id', auth, adminCheck, removeUsers);

router.post('/change-status', auth, adminCheck, changeStatus);

router.post('/change-role', auth, adminCheck, changeRole);

router.put('/change-firstname/:id', auth, changeFirstname);

router.put('/change-lastname/:id', auth, changeLastname);

router.put('/change-telnumber/:id', auth, changeTelnumber);

router.put('/change-email/:id', auth, changeEmail);

router.put('/change-cellnumber/:id', auth, changeCellnumber);

module.exports = router