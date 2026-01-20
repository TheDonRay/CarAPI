const express = require('express'); 
const userPref = express.Router(); 
const userPrefController = require('../controllers/')

userPref.post('/user-preferences', userPrefController); 

module.exports = userPref; 