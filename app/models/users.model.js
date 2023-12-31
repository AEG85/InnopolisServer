const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
    login: String,
    email: String,
    password: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', UsersSchema)