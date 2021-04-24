const mongoose = require('mongoose')

const TokenSchema = mongoose.Schema({
    email: {
        type: String,
      },
      token: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600 // this is the expiry time in seconds
      }
})

const Token = mongoose.model('Tokens', TokenSchema)

module.exports = Token