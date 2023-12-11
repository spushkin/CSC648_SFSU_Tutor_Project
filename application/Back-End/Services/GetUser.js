
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function getUser(email) {
    
    let query = "";
    let queryResults;
    query = queries.getUser;
    queryResults = await runQuery(query, [email]);
    
    // return tutors details name email description subjects

    return queryResults;

}

module.exports = getUser;