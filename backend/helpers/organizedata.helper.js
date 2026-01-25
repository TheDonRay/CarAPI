const organizeData = (userCarPref) => {
  // base case -> then call the map function to map and organize the data.
  //set up a try and catch case here
  try {
    // start of with checks here.
    // then use map function.
    if (!userCarPref || Object.keys(userCarPref).length === 0) {
      console.log("Error no  userCarPref passed");
      return null;
    }

    // first i need to convert the object to an array as such  // does the conversion here.
    const conversionArray = Array.isArray(userCarPref)
      ? userCarPref
      : [userCarPref];
    // use the map function to organize the data as such
    const organizedData = conversionArray.map((items) => ({
      CarBrand: items.CarBrand,
      UserSavedUp: items.UserHas,
      Model: items.CarModel,
    }));

    // now we can return this data as such
    console.log("Data organized properly");
    return organizedData;
  } catch (error) {
    console.log("There was an error organizing the data", error);
  }
};

module.exports = organizeData;
