const LoginRegisterService = require('../services/LoginRegisterService')

exports.login = (req, res) => {
    const data = LoginRegisterService.login(req, res)
    res.send(data)
}

exports.register = (req, res) => {
    let data  = {
        "id": 2,
        "name": "Debdita"
    }
    res.send(data);
}