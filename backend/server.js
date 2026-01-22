require('dotenv').config();  
// call the database here:  
const mongoConnection = require('./config/database.connection.js'); 

const app = require('./app.js'); 

const PORT = process.env.PORT;  

//call the connection before starting the server 
mongoConnection(); 
app.listen(PORT, () => { 
    console.log(`Server is successfully running on http://localhost:${PORT}`); 
}); 

