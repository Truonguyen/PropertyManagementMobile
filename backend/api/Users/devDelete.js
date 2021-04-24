const jwt = require('jsonwebtoken')
const User = require('../../models/user.model')


// in: JWT
// out: error bool
exports.devDelete = async (req, res) => {
    var Email = req.body.Email

    await User.deleteOne({ Email }, async (error, result) => {
        if (error) {
            res.status(400).json({ Error: true })
        } else {
            res.status(200).json({ result, Error: false })
        }
    })
            


    // jwt.verify(JWT, process.env.JWT_SECRET, async (error, decoded) => {
    //     if (error) {
    //         res.status(400).json({ Error:true })
    //     } else {
    //         var ID = decoded._id
    //         await User.deleteOne({ ID }, async (error) => {
    //             if (error) {
    //                 res.status(400).json({ Error: true })
    //             } else {
    //                 res.status(200).json({ Error: false })
    //             }
    //         })
    //     }
    // })
}
