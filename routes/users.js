"use strict"
const express = require('express');
const router = express.Router();



const UserController =  require('../app/controllers/UserController');

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

router.get('/new_access_token', UserController.token);



module.exports = router;