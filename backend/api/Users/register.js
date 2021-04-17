const mongoose = require('mongoose')
const app = require('express')
const bcrypt = require('bcrypt')
const User = require('../../models/user.model.js')


exports.doWork = function (app) {
    app.post('/Users/register', async (req, res) => {
        const body = req.body
        const Email = body.Email

        try {
            let user = await User.findOne({ Email })
            if (user)
                return res.status(400).send('Email already in use')

            
            const hashedPassword = await bcrypt.hash(body.Password, 10)
            
            user = new User({
                Email: body.Email,
                Password: hashedPassword,
                FirstName: body.FirstName,
                LastName: body.LastName,
                Admin: false
            })

            user.save((error) => {
                if (error) {
                    res.status(400).send(error)
                } else {
                    res.status(200).send('Registered')
                }
            })
        } catch {
            res.status(500).send()
        }
    })
}