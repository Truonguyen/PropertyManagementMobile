const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')
const Token = require('../../models/token.model.js')


// in: email, resetToken, password
// out: error bool
exports.resetValidate = async (req, res) => {
    const body = req.body
    const Email = body.Email
    const { email } = body.Email
    const resetToken = body.Token
    const Password = body.Password

    var token
    try {
        token = await Token.findOne({ email: Email })
        if (!token) {
            return res.status(400).send('Invalid or expired reset token')
        }
    } catch {
        return res.status(500).send()
    }
    
    console.log(token)
    await bcrypt.compare(resetToken, token.token, async (error, result) => {
        if (error) {
            return res.status(400).send('Error')
        }
        else if (result != true) {
            return res.status(400).send('Not true')
        }
        else {
            const hash = await bcrypt.hash(Password, 10)
            await User.updateOne({ Email }, { Password: hash })

            token.deleteOne()
            res.status(200).json({ Error: false })
        }
    })

}