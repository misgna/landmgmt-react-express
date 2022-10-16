const conn = require('../config/db');

module.exports = {
    verifyUser: (empId, callback) => {
        const sql = "SELECT * FROM login WHERE empId = ?";
        conn.query(sql, [empId], (err, data)=>{
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    createAccount: (data, callback) => {
        const sql = "INSERT INTO login (empId, empPassword, status) VALUES (?, ?, ?)";
        conn.query(sql, [data.empId, data.empPassword, data.status], (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        })
    },
    changeAccountStatus: (data, callback) => {
        const sql = "UPDATE login SET status = ? WHERE empId = ?";
        conn.query(sql, [data.status, data.empId], (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        })
    },
    resetAccount: (data, callback) => {
        const sql = "UPDATE login SET empPassword = ? WHERE empId = ?";
        conn.query(sql, [data.empPassword, data.empId], (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        })
    }
}