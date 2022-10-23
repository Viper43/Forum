const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')

const LoginRegister = require('../LoginRegisterController')

//app.use(function (req, res, next) {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost: 4200');
  //  res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //res.setHeader('Access-Control-Allow-Credentials', true);
    //next();
    //});
app.use(cors({
    origin: "*"
}))

router.get('/login', LoginRegister.login)
router.get('/register', LoginRegister.register)

module.exports = router