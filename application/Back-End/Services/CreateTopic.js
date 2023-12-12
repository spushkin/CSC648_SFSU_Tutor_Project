
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function createTopic(Name, CategoryID, Description) {
    
    let query = "";
    let queryResults
    query = queries.createTopic;
    queryResults = await runQuery(query, [Name, CategoryID, Description])

    // return tutors details name email description subjects

    return queryResults;

}

module.exports =createTopic;