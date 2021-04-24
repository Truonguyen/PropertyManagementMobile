const jwt = require('jsonwebtoken')

// module.exports = {
//     verify: function (token)
//     {
//         jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
//             console.log(token, decoded)
//             return {error, decoded}
//         });
//     }
// }

// exports.verify = (token) => {
//     jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
//         return {Error: error, Decoded: decoded}
//     });
// }


// exports.verify = async (req, res) => {
//     //console.log(req.body)
//     var token = req.body.JWT
//     jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
//         if (error) { 
//             res.status(500).json({ Error: error})
//             console.log(error)
//         }
//         else {
//             res.status(200).send(decoded)
//             console.log(decoded)
//         }
//     });
// }
