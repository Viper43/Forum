const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const LoginRegister = require('../LoginRegisterController')

app.use(cors({
    origin: "*"
}))

router.get('/login', LoginRegister.Login)
router.get('/register', LoginRegister.register)
// router.get('/connection', LoginRegister.databaseLoginTest)

module.exports = router