
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function getCategory() {
    
    let query = "";
    let queryResults
    query = queries.getCategory;
    queryResults = await runQuery(query)

    // return tutors details name email description subjects

    return queryResults;

}

module.exports =getCategory;