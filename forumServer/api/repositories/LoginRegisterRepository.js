const UserAccessDetails = require('../models/UserAccessDetails')


exports.Login = (req,res) => {
    try {
        const userDetails = new UserAccessDetails.find()
        res.send(userDetails)
    }
    catch(err) {
        res.send(err)
    }    
}    







