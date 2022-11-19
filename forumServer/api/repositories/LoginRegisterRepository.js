const UserAccessDetails = require('../models/UserAccessDetails')

exports.Login = (req,res) => {
    try {
        console.log('repo called')
        const userDetails = new UserAccessDetails.find()
        res.send(JSON.stringify(userDetails))
    }
    catch(err) {
        res.send(err)
    }    
}    







