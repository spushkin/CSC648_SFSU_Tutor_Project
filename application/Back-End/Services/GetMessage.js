
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function getMessage(id) {
    
    let query = "";
    let queryResults
    query = queries.getMessage;
    queryResults = await runQuery(query, [id])

    // return tutors details name email description subjects

    return queryResults;

}

module.exports =getMessage;