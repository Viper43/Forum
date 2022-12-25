const UserAccessDetails = require('../models/UserAccessDetails')

exports.Login = async (req,res) => {
    try {
        const data = await UserAccessDetails.find({emailId: req.body.emailId, password: req.body.password})        
        return data
    } catch(err) {
        return err
    }    
}

exports.Register = (req, res) => {
    
    const details = new UserAccessDetails({
            _id:req._id,
            emailId:req.emailId,
            password:req.password
        });

    details.save();
    return "data saved";
}

exports.MaxId = async(req, res) => {
    const data = await UserAccessDetails.find().sort({_id: -1}).limit(1)
    return JSON.parse(JSON.stringify(data))[0]._id
}
