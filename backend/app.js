const express = require('express'); 
const app = express(); 

app.use(exress.json()); 

app.get('/', (req, res) => { 
    res.json({ 
        ServerRunning: true
    }); 
}); 

module.exports = app; 