const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/user.model.js')


// in: email, password
// out: JWT, error bool
exports.login = async (req, res) => {
    const body = req.body
    const Email = body.Email
    const Verification = body.Verification

    await User.findOne({ Email }, async (error, result) => {
        if (error) {
            res.status(400).json({ Error: true })

        } else {
            try {
                if (await bcrypt.compare(body.Password, result.Password)) {
                    if (result.isValid == false) {
                        return res.status(400).send('Account is not verified')
                    }

                    // make JWT
                    await jwt.sign({ Email: Email, Admin: result.Admin },
                        process.env.JWT_SECRET,
                        { expiresIn: '1h' },
                        async (err, token) => {
                            if (err)
                                return res.status(500).send("There was a problem making JWT.")
                            // res.status(200).send(token)
                            res.status(200).json({ JWT: token })
                            //console.log(token)
                        });
                } else {
                    // make it vague in production
                    res.status(400).send('Invalid email or password')
                }
            } catch {
                // make it vague in production
                res.status(400).send('Email does not exist')
            }
        }
    })
}

// exports.doWork = function (app) {
//     app.post('/Users/login', async (req, res) => {
//         const body = req.body
//         const Email = body.Email

//         // use findOne() instead of find because there should only be 1 email
//         // let's us use result.Password instead of result[0].Password
//         await User.findOne({ Email }, async (error, result) => {
//             if (error) {
//                 res.status(400).send(error)
//             } else {
//                 try {
//                     if (await bcrypt.compare(body.Password, result.Password)) {
//                         // make JWT
//                         await jwt.sign({ Email: Email, Admin: result.Admin }, 
//                                         process.env.JWT_SECRET,
//                                         {expiresIn: '1h'},
//                                         async (err, token) => {
//                                             if (err) 
//                                                 return res.status(500).send("There was a problem making JWT.")
//                                             // res.status(200).send(token)
//                                             res.status(200).json({ JWT: token })
//                                             //console.log(token)
//                                         });
//                     } else {
//                         // make it vague in production
//                         res.status(400).send('Bad email:password')
//                     }
//                 } catch {
//                     // make it vague in production
//                     res.status(400).send('Email does not exist')
//                 }
//             }
//         })
//     })
// }