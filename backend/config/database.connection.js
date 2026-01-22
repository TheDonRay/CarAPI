// mongodb schemea to basically hold the data that we insert and also take in the AI response as well.  
const mongoose = require('mongoose');
const URI = process.env.URI; 

const clusterConnection = async (req, res) => {
    try { 
        await mongoose.connect(URI); 
        console.log('MongoDB server successfully connected'); 
        return true; 
    } catch (error) { 
        console.error('Error connecting to the database', error); 
        return false; 
    }
} 

module.exports = clusterConnection; 