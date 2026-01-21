// need to import the database here as such to push in the carApi data -> need to create a schema.  

// I can also set up the API route where this data is called with another function taking in that parameter. 

// have another function for processing user that can be called in another controller. 

const handleUserPref = async (req, res) => {  
    // lets set this up with a try and catch case here as such 
    try { 
        const { UserCarPreference } = req.body;  
        // do some basic checks here 
        if (!UserCarPreference) { 
            res.status(400).json({
                Error: 'No response from user to fill out relevant key values'
            }); 
        } 
        // just for some testing purposes:  
        // we can implement something like the ranges etc. 
        console.log(UserCarPreference);   
        res.status(200).json({ 
            UserCarPreference: true
        }); 
    } catch (error) {   
        console.error('Error with sending data to this route', error); 
        res.status(500).json({ 
            Error: error.message
        }); 
    }
} 

module.exports = handleUserPref; 
