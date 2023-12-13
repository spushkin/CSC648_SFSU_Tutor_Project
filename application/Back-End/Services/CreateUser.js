const queries = require("../Constants/queries.js");

const { runQuery } = require("./DBConnector.js");
async function createUser(firstname, lastname, username, email, password) {
	let query = "";
	let queryResults;
	query = queries.createUser;

	queryResults = await runQuery(query, [
		firstname,
		lastname,
		username,
		email,
		password,
	]);

	// return tutors details name email description subjects

	return queryResults;
}

module.exports = createUser;
