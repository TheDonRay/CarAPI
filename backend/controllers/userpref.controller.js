//TODO: need to import the database here as such to push in the carApi data -> need to create a schema.


const OpenAi = require("openai");
const client = new OpenAi({
  apiKey: process.env.CAR_AI,
});

const helperFunction = require("../helpers/organizedata.helper.js");

const handleUserPref = async (req, res) => {
  // lets set this up with a try and catch case here as such
  try {
    const { UserCarPreference } = req.body;
    // do some basic checks here
    if (!UserCarPreference) {
      return res.status(400).json({
        Error: "No response from user to fill out relevant key values",
      });
    }
    console.log(UserCarPreference);

    // call the function here to actually pass the organized data -> goes into the API route.
    const OrganizedData = helperFunction(UserCarPreference);

    console.log("Organized Data is now: ", OrganizedData);

    const AiAdvisor = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a car advisor AI. Evaluate whether a user should purchase a specific car based on their budget, the vehicle’s brand, and the selected model. Assess the brand’s overall reliability, value, and ownership reputation, then determine if the purchase is financially sensible given the user’s budget. Conclude with a clear recommendation on whether to buy the car or continue saving",
        }, 
        {
            role: "user", 
            content: JSON.stringify(OrganizedData)
        }
      ],
    });

    res.status(200).json({
      UserCarPreference: "recieved successfully",
      message: "recieved successfully",
      Data: AiAdvisor,
    });
  } catch (error) {
    console.error("Error with sending data to this route", error);
    res.status(500).json({
      Error: error.message,
    });
  }
};

module.exports = handleUserPref;
