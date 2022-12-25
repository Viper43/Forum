const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')
const LoginRegister = require('../LoginRegisterController')

app.use(cors({
    origin: "*"
}))

router.use(bodyParser.json())
router.get('/login', LoginRegister.Login)
router.post('/register', LoginRegister.Register)
// router.get('/connection', LoginRegister.databaseLoginTest)
//router.get('/connection', LoginRegister.databaseLoginTest)

module.exports = router