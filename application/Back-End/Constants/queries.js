
const queries = {
    searchTutorViaText : `
    SELECT * 
    FROM Tutor 
    WHERE TopicID = ? 
    AND (name LIKE ? OR description LIKE ?)
    ORDER BY CASE WHEN name LIKE ? THEN 1 ELSE 2 END;
    `,
    searchTutorViaTextAll : `SELECT * 
    FROM Tutor WHERE
    (name LIKE ? OR description LIKE ?)
    ORDER BY CASE WHEN name LIKE ? THEN 1 ELSE 2 END;`,
    createUser: `INSERT INTO User (Firstname, Lastname, Username, Email, Password) VALUES(? ,?, ?, ?, ?)`,
    getUser: `SELECT * FROM User WHERE Email = ?`,
    createTutor: `INSERT INTO Tutor(Name, Email, TopicId, Cv, Description, Photo, Schedule) VALUES(?,?,?,?,?,?,?)`,
    getTutor: `SELECT * FROM Tutor WHERE Id= ?`,
    createMessage: `INSERT INTO Message (SenderId, RecevierId, Text) VALUES(?,?,?)`,
    getMessage: `SELECT * FROM Message WHERE Id=? GROUP BY RecevierId`,
    getTopic: `SELECT * FROM Topic`,

};

module.exports = queries;
