
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function searchTutors(subject, searchText) {
    
    let query = "";
    let queryResults
    if(subject === 'all') {
        query = queries.searchTutorViaTextAll;
        queryResults = await runQuery(query, [`%${searchText}%`, `%${searchText}%`, `%${searchText}%`])
    } else {
        query = queries.searchTutorViaText;
        queryResults = await runQuery(query, [subject, `%${searchText}%`, `%${searchText}%`, `%${searchText}%`])
    }
    // return tutors details name email description subjects

    return queryResults;

}

module.exports = searchTutors;
