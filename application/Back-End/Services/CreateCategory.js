
const queries = require('../Constants/queries.js');

const { runQuery } = require('./DBConnector.js');
async function createCategory(Name, Description) {
    
    let query = "";
    let queryResults
    query = queries.createCategory;
    queryResults = await runQuery(query, [Name, Description])

    // return created category affected rows

    return queryResults;

}

module.exports =createCategory;