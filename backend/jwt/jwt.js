const nJwt = require('njwt')
require('dotenv').config()



exports.doWork = function (app) {
    app.get('/jwt/create', async (req, res) => {
        // if (req.headers.authorization !== 'Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=') {
        //     res.set('WWW-Authenticate', 'Basic realm="401"')
        //     res.status(401).send('Try user: AzureDiamond, password: hunter2')
        //     return
        //   }
        
        // const claims = { iss: 'fun-with-jwts', sub: 'AzureDiamond' }
        const token = nJwt.create(claims, 'top-secret-phrase')
        token.setExpiration(new Date().getTime() + 60*1000)
        res.send(token.compact())
    })

    app.get('/jwt/verify/:token', async (req, res) => {
        const { token } = req.params
        nJwt.verify(token, 'top-secret-phrase', (err, verifiedJwt) => {
            if(err){
            res.send(err.message)
            }else{
            res.send(verifiedJwt)
            }
        })
    })


    app.get('/jwt/', async (req, res) => res.send('TODO: use auth'))
    

}