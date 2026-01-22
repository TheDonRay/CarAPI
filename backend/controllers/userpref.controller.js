//TODO: need to import the database here as such to push in the carApi data -> need to create a schema.  
//TODO: need to set up openAI api as well in a seperate route that gets the helperFunction data as well.  

const helperFunction = require('../helpers/organizedata.helper.js'); 

const handleUserPref = async (req, res) => {  
    // lets set this up with a try and catch case here as such 
    try { 
        const { UserCarPreference } = req.body;  
        // do some basic checks here 
        if (!UserCarPreference) { 
            return res.status(400).json({
                Error: 'No response from user to fill out relevant key values'
            }); 
        } 
        console.log(UserCarPreference);    

        // call the function here to actually pass the organized data -> goes into the API route. 
        const OrganizedData = helperFunction(UserCarPreference);  

        res.status(200).json({ 
            UserCarPreference: "recieved successfully", 
            message: 'recieved successfully'
        });   

    } catch (error) {   
        console.error('Error with sending data to this route', error); 
        res.status(500).json({ 
            Error: error.message
        }); 
    }
} 

module.exports = handleUserPref; 
