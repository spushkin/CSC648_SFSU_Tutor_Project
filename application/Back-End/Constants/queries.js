
const queries = {
    searchTutorViaText : `
    SELECT * 
    FROM Tutor 
    WHERE TopicID = ? 
    AND (name LIKE ? OR description LIKE ?)
    ORDER BY CASE WHEN name LIKE ? THEN 1 ELSE 2 END;
    `
};

module.exports = queries;
