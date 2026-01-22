// mongodb schemea to basically hold the data that we insert and also take in the AI response as well.  
const mongoose = require('mongoose');
const URI = process.env.URI; 

const clusterConnection = async (req, res) => {
    try { 
        await mongoose.connect(URI); 
        console.log('MongoDB server successfully connected'); 
        return res.status(200).json({ 
            Connection: true
        })
    } catch (error) { 
        console.error('Error connecting to the database', error); 
        return res.status(500).json({ 
            Error: error.message
        }); 
    }
} 

module.exports = clusterConnection; 