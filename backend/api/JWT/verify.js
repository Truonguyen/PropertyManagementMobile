const jwt = require('jsonwebtoken')


exports.doWork = function (app) {
    app.post('/JWT/verify', async (req, res) => {
        //console.log(req.body)
        var token = req.body.JWT
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) { 
                res.status(500).send('JWT decode error')
                console.log(error)
            }
            else {
                res.status(200).send(decoded)
                console.log(decoded) // bar   
            }
            
          });
    })
}
