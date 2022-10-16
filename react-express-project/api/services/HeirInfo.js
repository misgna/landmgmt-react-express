const conn = require('../config/db');

module.exports = {
    addHeirInfo: (data, callback) => {
        const sql = "INSERT INTO heirinfo (ParentHouseNumber, HeirName, HeirFName, HeirGFName, RA_Subcity, RA_Wereda, RA_Block, RA_HouseNumber, HeirPhoto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        conn.query(sql, 
                [data.ParentHouseNumber, data.HeirName, data.HeirFName, data.HeirGFName, data.RA_Subcity, data.RA_Wereda, data.RA_Block, data.RA_HouseNumber, data.HeirPhoto],
                (err, result) => {
            if(err) callback(err);
            else callback(null, result)
        })
    },
    getHeirInfo: (data, callback) => {
        const sql = "SELECT * FROM heirinfo WHERE ParentHouseNumber = ?";
        conn.query(sql, [data.ParentHouseNumber], (err, result) => {
            if(err) callback(err);
            else callback(null, result);
        })
    }
}