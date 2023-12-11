
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function createMessage(SenderId, RecevierId, Text) {
    
    let query = "";
    let queryResults
    query = queries.createMessage;
    queryResults = await runQuery(query, [SenderId, RecevierId, Text])

    // return tutors details name email description subjects

    return queryResults;

}

module.exports =createMessage;