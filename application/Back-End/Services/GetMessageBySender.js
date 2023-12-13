
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function getMessageBySender(id) {
    
    let query = "";
    let queryResults
    query = queries.getMessageBySender;
    queryResults = await runQuery(query, [id])

    // return tutors details name email description subjects

    return queryResults;

}

module.exports =getMessageBySender;