const mongoose = require('mongoose')

const JWTSchema = mongoose.Schema({
    Email: 'string',
    Password: 'string',
    FirstName: 'string',
    LastName: 'string'
})

// const UserSchema = new mongoose.Schema({
//     Email: { type: String },
//     Password: { type: String },
//     FirstName: { type: String },
//     LastName: { type: String }
// })


const User = mongoose.model('Users', UserSchema, 'Users')

module.exports = User