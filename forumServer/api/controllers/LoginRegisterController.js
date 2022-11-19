const { json } = require('express')
const LoginRegisterService = require('../services/LoginRegisterService')

exports.Login = (req, res) => {
    console.log('controller called')
    serviceData = LoginRegisterService.Login(req, res)
    const data = JSON.stringify( serviceData.data)
    res.send(data)
}

exports.register = (req, res) => {
    let data  = {
        "id": 2,
        "name": "Debdita"
    }
    res.send(data);
}