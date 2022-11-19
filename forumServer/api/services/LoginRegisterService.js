const LoginRegisterRepository = require('../repositories/LoginRegisterRepository')

exports.login = (req,res) => {
    const data = LoginRegisterRepository.Login(req, res)
    res.send(data)
}