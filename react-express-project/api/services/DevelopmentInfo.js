const conn = require('../config/db');

module.exports = {
    addDevelopmentInfo: (data, callback) => {
        const sql = "INSERT INTO developmentinfo (ParentHouseNumber, ProjectName, PropertyTypes) VALUES (?, ?, ?)";
        conn.query(sql, [data.ParentHouseNumber, data.ProjectName, data.PropertyTypes], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    },
    readDevelopmentInfo: (data, callback) => {
        const sql = "SELECT * FROM developmentinfo WHERE ParentHouseNumber = ?";
        conn.query(sql, [data.ParentHouseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    }
}