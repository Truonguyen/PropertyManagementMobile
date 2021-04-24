const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/user.model')


// in: email, password
// out: error bool
exports.devPassword = async (req, res) => {
    var Email = req.body.Email
    var Password = req.body.Password

    const hashedPassword = await bcrypt.hash(Password, 10)

    const update = {
        Password: hashedPassword
    }

    await User.findOneAndUpdate({ Email }, update, async (error) => {
        if (error) {
            res.status(400).json({ Error: true })
        } else {
            res.status(200).json({ Error: false })
        }
    })
}
