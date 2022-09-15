const express = require('express')
const router = express.Router()

const LoginRegister = require('../LoginRegisterController')

router.get('/login', LoginRegister.login)
router.get('/register', LoginRegister.register)

module.exports = router