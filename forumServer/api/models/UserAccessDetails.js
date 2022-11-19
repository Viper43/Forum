const { Schema, default: mongoose } = require("mongoose");

const UserAccessDetailsSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('UserAccessDetails', UserAccessDetailsSchema)