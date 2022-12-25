const UserAccessDetails = require('../models/UserAccessDetails')

exports.Login = async(req,res) => {
    try {
        console.log('login repo called')
        const userDetails =  await UserAccessDetails.find({emailId:req.body.emailId, password:req.body.password});             
        return userDetails;              
    }
    catch(err) {
        res.send(err)
    }    
} 

exports.Register = async(req,res) => {
    try {
        console.log('register repo called')         
        const details = new UserAccessDetails({
            _id:req._id,
            emailId:req.emailId,
            password:req.password
        });

        details.save();        
        return true;              
    }
    catch(err) {
        res.send(err)
    }    
}   

exports.UserCount = async(req,res) => {
    try {
        console.log('UserCount repo called')
        const userDetails =  await UserAccessDetails.find().sort({_id : -1}).limit(1);  
        const colId = "_id";
        const colData = userDetails.map(obj => obj[colId]);     
        return JSON.parse(colData);
    }
    catch(err) {
        res.send(err)
    }
}

exports.UserAlreadyExists = async(req, res) => {
    try{
        console.log('User already exists repo called')
        const userDetails = await UserAccessDetails.find({emailId : req.body.emailId});
        return userDetails
    }   
    catch(err){
        res.send(err)
    } 
}







