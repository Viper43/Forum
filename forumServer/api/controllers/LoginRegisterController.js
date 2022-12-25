const LoginRegisterService = require('../services/LoginRegisterService')

exports.Login = async(req, res) => {
    console.log('login controller called')    
    serviceData = await LoginRegisterService.Login(req, res)    
    res.send(serviceData)
}

exports.Register = async(req, res) => {
    console.log('register controller called')    
    serviceData = await LoginRegisterService.Register(req, res)        
    res.send(serviceData)
}