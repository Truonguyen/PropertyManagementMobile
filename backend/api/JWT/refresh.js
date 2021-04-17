const jwt = require('jsonwebtoken')


exports.doWork = function (app) {
    app.post('/JWT/refresh', async (req, res) => {
        //console.log(req.body)
        var token = req.body.JWT
        jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
            if (error) { 
                res.status(500).send('JWT decode error')
                console.log(error)
            }
            else {
                // basically make another JWT with new expiration date
                var Email = decoded.Email
                var Admin = decoded.Admin
                await jwt.sign({ Email: Email, Admin: Admin }, 
                    process.env.JWT_SECRET,
                    {expiresIn: '1h'},
                    async (err, token) => {
                        if (err) 
                            return res.status(500).send("There was a problem making JWT.")
                        // res.status(200).send(token)
                        res.status(200).json({ JWT: token })
                        //console.log(token)
                    });
            }
            
          });
    })
}
