// Import any necessary modules or dependencies
const searchTutors = require('../Services/SearchTutors');
const createUser = require('../Services/CreateUser');
const getUser = require('../Services/GetUser');
const createTutor = require('../Services/CreateTutor');
const getTutor = require('../Services/GetTutor');
const createMessage = require('../Services/CreateMessage');
const getMessage = require('../Services/GetMessage');
const getTopic = require('../Services/GetTopic');

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

// Define the exported function
exports.createUser = async (firstname, lastname, username, email, password) => {
    try {
        // Retrieve all tutors from the database
        let user;
        user = await createUser(firstname, lastname, username, email, password);

        // Send the tutors as a response
        return user;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};

// Define the exported function
exports.getUser = async (email, password) => {
    try {
        // Retrieve all tutors from the database
        let user;
        user = await getUser(email);
        if(user.password == password){
            return true;
        }else{
            return false
        }
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};


// Define the exported function
exports.createTutor = async (name, email, topicId, cv, description, photo, schedule) => {
    try {
        // Retrieve all tutors from the database
        let user;
        user = await createTutor(name, email, topicId, cv, description, photo, schedule);
        return user;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};


// Define the exported function
exports.getTutor = async (id) => {
    try {
        // Retrieve all tutors from the database
        let user;
        user = await getTutor(id);

        return user;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};

// Define the exported function
exports.createMessage = async (SenderId, RecevierId, Text) => {
    try {
        // Retrieve all tutors from the database
        let user;
        user = await createMessage(SenderId, RecevierId, Text);

        return user;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};
// Define the exported function
exports.getMessage = async (id) => {
    try {
        // Retrieve all tutors from the database
        let user;
        user = await getMessage(id);

        return user;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};
// Define the exported function
exports.getTopic = async () => {
    try {
        // Retrieve all tutors from the database
        let user;
        user = await getTopic();

        return user;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};
