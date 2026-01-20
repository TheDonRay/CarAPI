// need to import the database here as such to push in the carApi data -> need to create a schema. 

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
