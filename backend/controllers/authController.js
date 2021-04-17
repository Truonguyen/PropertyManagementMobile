var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../models/user.model.js');

var jwt = require('jsonwebtoken');

module.exports.register_get = (req, res) => {
    res.render('register')
}

module.exports.login_get = (req, res) => {
    res.render('login')
}

module.exports.register_post = (req, res) => {
    res.send('new register')
}

module.exports.login_post = (req, res) => {
    res.send('user login')
}
