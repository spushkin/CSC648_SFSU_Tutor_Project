const mysql = require('mysql2/promise');

const pool = mysql.createPool({
        host: 'se-tutoringsite.cmacnvx5bdls.us-west-1.rds.amazonaws.com',
        user: 'admin',
        password: 'Tutoringsitecsc648',
        database: 'se_tutoringsite',
        port: 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
});



async function runQuery(query, variables) {
    try {
        console.log("Query", query);
        const results = await pool.query(query,variables);
        console.log(results);

        return results[0];
    } catch (err) {
        console.error(err);
        return err;
    }
}


exports.runQuery = runQuery;
