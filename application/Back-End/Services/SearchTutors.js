
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function searchTutors(subject, searchText) {
    let query = queries.searchTutorViaText;
    
    let queryResults = await runQuery(query, [subject, `%${searchText}%`, `%${searchText}%`, `%${searchText}%`])
    
    // return tutors details name email description subjects


    return queryResults;

}

module.exports = searchTutors;
