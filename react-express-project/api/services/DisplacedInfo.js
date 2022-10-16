const conn  = require("../config/db");

module.exports = {
    addDisplacedInfo: (data, callback) => {
        const sql = "INSERT INTO displacedinfo (Name, FName, GFName, RA_Subcity, RA_Wereda, RA_Block, RA_HouseNumber, OA_Wereda, OA_Kebelle, OA_Block, OA_HouseNumber, NumberOfOwners) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        conn.query(sql, 
            [data.Name, data.FName, data.GFName, data.RA_Subcity, data.RA_Wereda, data.RA_Block, data.RA_HouseNumber, data.OA_Wereda, data.OA_Kebelle, data.OA_Block, data.OA_HouseNumber, data.NumberOfOwners],
            (err, result)=> {
            if(err) callback(err);
            else callback(null, result);
        })
    },
    readDisplacedInfo: (data, callback) => {
        const sql = "SELECT * FROM displacedinfo WHERE RA_HouseNumber = ?";
        conn.query(sql, [data.ParentHouseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    }
}