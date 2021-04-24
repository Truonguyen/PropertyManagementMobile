const jwt = require('jsonwebtoken')
const User = require('../../models/user.model')


// in: JWT
// out: error bool
exports.delete = async (req, res) => {
    const JWT = req.body.JWT

    jwt.verify(JWT, process.env.JWT_SECRET, async (error, decoded) => {
        if (error) {
            res.status(400).json({ Error:true })
        } else {
            var Email = decoded.Email
            await User.deleteOne({ Email }, async (error) => {
                if (error) {
                    res.status(400).json({ Error: true })
                } else {
                    res.status(200).json({ Error: false })
                }
            })
        }
    })
}
