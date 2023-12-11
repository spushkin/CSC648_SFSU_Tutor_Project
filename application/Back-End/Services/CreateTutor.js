
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function createTutor(name, email, topicId, cv, description, photo, schedule) {
    
    console.log(name);
    let query = "";
    let queryResults
    query = queries.createTutor;
    queryResults = await runQuery(query, [`${name}`, email, topicId, cv, description, photo, schedule])

    // return tutors details name email description subjects

    return queryResults;

}

module.exports = createTutor;