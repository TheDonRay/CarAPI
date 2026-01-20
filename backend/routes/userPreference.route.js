const express = require('express'); 
const userPref = express.Router(); 
const userPrefController = require('../controllers/userpref.controller.js'); 

userPref.post('/userpref', userPrefController); 

module.exports = userPref; 