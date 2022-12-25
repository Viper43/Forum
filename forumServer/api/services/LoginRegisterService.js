const LoginRegisterRepository = require('../repositories/LoginRegisterRepository')

exports.Login = async(req,res) => {
    console.log('login service called')
    console.log(req.body.emailId)
    console.log(req.body.password)
    const repositoryData = await LoginRegisterRepository.Login(req, res)   
    if(!isEmptyObject(repositoryData)) {
        return true;
    }     
    else {
        return false;
    }
}

exports.Register = async(req,res) => {
    console.log('register service called')
    const Exist = await LoginRegisterRepository.UserAlreadyExists(req, res)
    if(isEmptyObject(Exist)){
        const count = await LoginRegisterRepository.UserCount(req, res)
        console.log(count)
        const obj = {
            _id:count+1, 
            emailId:req.body.emailId, 
            password:req.body.password
        };
        const repositoryData = await LoginRegisterRepository.Register(obj, res)  
        console.log(repositoryData)
        return true;
    }  
    else{
        return false;
    }  
}

function isEmptyObject(value) {
    return Object.keys(value).length === 0 && value != null;   
  }