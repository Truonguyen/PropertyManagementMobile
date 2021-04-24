const jwt = require('jsonwebtoken')
const User = require('../../models/user.model')


// in: JWT
// out: Users data, refreshed JWT, error bool
exports.get = async (req, res) => {
    const JWT = req.body.JWT

    jwt.verify(JWT, process.env.JWT_SECRET, async (error, decoded) => {
        if (error) {
            res.status(400).json({ Error: true })
        } else {
            var Email = decoded.Email
            await User.findOne({ Email }, async (error, result) => {
                if (error) {
                    res.status(400).json({ Error: true })
                } else {
                    var Admin = decoded.Admin
                    var newJWT

                    await jwt.sign({ Email: Email, Admin: Admin },
                        process.env.JWT_SECRET,
                        { expiresIn: '1h' },
                        (err, token) => {
                            if (err) {
                                newJWT = null
                            } else {
                                newJWT = token
                            }
                        })

                    res.status(200).json({
                        Email: result.Email,
                        Username: result.Username,
                        Password: result.Password,
                        FirstName: result.FirstName,
                        LastName: result.LastName,
                        JWT: newJWT
                    })
                }
            })
        }
    })
}
