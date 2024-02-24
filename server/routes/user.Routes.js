const express = require('express');
const { UserSignup, UserLogin } = require('../controller/userController');

const Router = express.Router();


Router.post('/signup', UserSignup);
Router.post('/login', UserLogin);

module.exports = Router;