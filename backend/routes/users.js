const router = require('express').Router()
let User = require('../models/user.model')


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/register').post((req, res) => {
    const body = req.body
    const newUser = new User({ body })

    newUser.save()
        .then(() => res.status(200).json('Successfully added new user'))
        .catch((err) => res.status(400).json('Failed to add new user'))
})




/*router.post('/', (req, res) => {
    res.send('This works!')
})*/

module.exports = router
