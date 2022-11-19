const LoginRegisterRepository = require('../repositories/LoginRegisterRepository')

exports.Login = (req,res) => {
    console.log('service called')
    const repositoryData = LoginRegisterRepository.Login(req, res)
    const data = JSON.stringify( repositoryData.data)
    res.send(data)
}