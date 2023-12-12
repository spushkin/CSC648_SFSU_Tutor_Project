
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function getTopic() {
    
    let query = "";
    let queryResults
    query = queries.getTopic;
    queryResults = await runQuery(query)

    // return tutors details name email description subjects

    return queryResults;

}

module.exports =getTopic;