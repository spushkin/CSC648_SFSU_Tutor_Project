
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function getTutorByEmail(email) {
    
    let query = "";
    let queryResults
    query = queries.getTutorByEmail;
    console.log(query, email);
    queryResults = await runQuery(query, [email])

    // return tutors details name email description subjects

    return queryResults;

}

module.exports = getTutorByEmail;