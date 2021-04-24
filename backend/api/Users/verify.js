// @ts-nocheck
const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')
const jwt = require("jsonwebtoken");


// in: uniqueString
// out: JWT, error bool
exports.verify = async (req, res) => {
    const uniqueString = req.body.uniqueString;

    const user = await User.findOne({ uniqueString: uniqueString })
    if (user) {
        user.isValid = true
        await user.save()

        // make JWT
        await jwt.sign({ Email: user.Email, Admin: user.Admin },
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            async (err, token) => {
                if (err)
                    return res.status(500).send("There was a problem making JWT.")
                res.status(200).json({ JWT: token, Error: false })
            });
    } else {
        res.status(400).json({ Error: true })
    }
}