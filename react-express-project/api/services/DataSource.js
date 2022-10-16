const conn = require('../config/db');

module.exports = {
    addDataSource: (data, callback) => {
        const sql = "INSERT INTO datasource (ParentHouseNumber, Name1, FName1, GFName1, Date1, Phonenumber1, Name2, FName2, GFName2, Date2, Phonenumber2, Name3, FName3, GFName3, Date3, Phonenumber3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        conn.query(sql, 
            [data.ParentHouseNumber, data.Name1, data.FName1, data.GFName1, data.Date1, data.Phonenumber1, data.Name2, data.FName2, data.GFName2, data.Date2, data.Phonenumber2, data.Name3, data.FName3, data.GFName3, data.Date3, data.Phonenumber3], 
            (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    },
    readDataSource: (data, callback) => {
        const sql = "SELECT * FROM datasource WHERE ParentHouseNumber = ?";
        conn.query(sql, [data.ParentHouseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    }
}