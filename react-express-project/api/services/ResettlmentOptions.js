const conn = require('../config/db');

module.exports = {
    addResettlementOptions: (data, callback) => {
        const sql = "INSERT INTO resettlementoptions (ParentHouseNumber, ResettlementChoice) VALUES (?, ?)";
        conn.query(sql, [data.ParentHouseNumber, data.ResettlementChoice], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    },
    readResettlementOptions: (data, callback) => {
        const sql = "SELECT * FROM resettlementoptions WHERE ParentHouseNumber = ?";
        conn.query(sql, [data.ParentHouseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    }
}