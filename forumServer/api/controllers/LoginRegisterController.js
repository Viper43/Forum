const LoginRegisterService = require('../services/LoginRegisterService')

exports.Login = async (req, res) => {
    
    const serviceData = await LoginRegisterService.Login(req, res)
    res.send(serviceData)
}

exports.register = async (req, res) => {
    
    let data  = await LoginRegisterService.Register(req, res);
    res.send(data);
}