// Import any necessary modules or dependencies
const searchTutors = require('../Services/SearchTutors');



// Define the exported function
exports.getTutors = async (subject, searchText) => {
    try {
        // Retrieve all tutors from the database
        let tutors;
    
        tutors = await searchTutors(subject.toLowerCase(), searchText.toLowerCase());
        

        // Send the tutors as a response
        return tutors;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};
