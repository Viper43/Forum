const LoginRegisterRepository = require('../repositories/LoginRegisterRepository')

exports.Login = async (req,res) => {
    
    const repositoryData = await LoginRegisterRepository.Login(req, res)
    if( !IsEmpty(repositoryData) ) {
        return true
    } else {
        return false
    }
}

exports.Register = async (req, res) => {
    
    const userCount = await LoginRegisterRepository.MaxId(req, res)
    let userData = {
        _id: userCount + 1,
        emailId: req.body.emailId,
        password: req.body.password
    }
    const data = LoginRegisterRepository.Register(userData, res);
    return data;
}

exports.Register = async(req,res) => {

    const Exist = await LoginRegisterRepository.UserAlreadyExists(req, res)
    if(isEmpty(Exist)) {
        const count = await LoginRegisterRepository.UserCount(req, res)
        
        const obj = {
            _id:count+1, 
            emailId:req.body.emailId, 
            password:req.body.password
        };
        
        const repositoryData = await LoginRegisterRepository.Register(obj, res)  
        return true;
    }  
    else{
        return false;
    }  
}

IsEmpty = (data) => {
    return data.count == 0 && data == null
}
