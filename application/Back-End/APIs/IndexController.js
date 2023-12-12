// Import any necessary modules or dependencies
const searchTutors = require('../Services/SearchTutors');
const createUser = require('../Services/CreateUser');
const getUser = require('../Services/GetUser');
const createTutor = require('../Services/CreateTutor');
const getTutor = require('../Services/GetTutor');
const getTutorByEmail = require('../Services/GetTutorbyEmail');
const createMessage = require('../Services/CreateMessage');
const getMessage = require('../Services/GetMessage');
const getTopic = require('../Services/GetTopic');
const createTopic = require('../Services/CreateTopic');
const createCategory = require('../Services/CreateCategory');
const getCategory = require('../Services/GetCategory');

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
        return user;
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

exports.getTutorByEmail = async (email) => {
    try {
        // Retrieve all tutors from the database
        let Tutor;
        Tutor = await getTutorByEmail(email);

        return Tutor;
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
exports.createTopic = async (Name, CategoryID, Description) => {
    try {
        // Retrieve all tutors from the database
        let topic;
        topic = await createTopic(Name, CategoryID, Description);

        return topic;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};
exports.createCategory = async (Name, Description) => {
    try {
        // Retrieve all tutors from the database
        let category;
        category = await createCategory(Name, Description);

        return category;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};
exports.getCategory = async () => {
    try {
        // Retrieve all tutors from the database
        let categories;
        categories = await getCategory();

        return categories;
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
      return error;
    }
};
