const conn = require('../config/db');

module.exports = {
    addPropertyInfo: (data, callback) => {
        const sql = "INSERT INTO propertyinfo (ParentHouseNumber, PropertyOwner, PropertyService, PropertyDocs) VALUES (?, ?, ?, ?)";
        conn.query(sql, [data.ParentHouseNumber, data.PropertyOwner, data.PropertyService, data.PropertyDocs], (err, result)=>{
            if (err) callback(err);
            else callback(null, result);
        })
    },
    readPropertyInfo: (data, callback) => {
        const sql = "SELECT * FROM propertyinfo WHERE ParentHouseNumber = ?";
        conn.query(sql, [data.ParentHouseNumber], (err, result) => {
            if (err) callback(err);
            else callback(null, result);
        })
    }
}