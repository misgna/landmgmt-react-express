const conn = require('../config/db');

module.exports = {
    getAllEmployees : (callback) => {
        const sql = "SELECT * FROM employees";
        conn.query(sql, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    getEmployeeById : (empId, callback) => {
        const sql = "SELECT * FROM employees WHERE empId = ?";
        conn.query(sql, [empId], (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    getEmployeesByTeamId : (teamId, callback) => {
        const sql = "SELECT * FROM employees WHERE teamId = ?";
        conn.query(sql, [teamId], (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    addEmployee : (info, callback) => {
        const sql = "INSERT INTO employees (empId, empName, empFName, empGFName, teamId) VALUES (?, ?, ?, ?, ?)";
        conn.query(sql, [info.empId, info.empName, info.empFName, info.empGFName, info.teamId], (err, results) => {
            if (err) return callback(err);
            else return callback(null, results);
        });
    },
    updateEmployee: (empId, info, callback) => {
        const sql = "UPDATE employees SET empName = ?, empFName = ?, empGFName = ?, teamId = ? WHERE empId = ?";
        conn.query(sql, [info.empName, info.empFName, info.empGFName, info.teamId, empId], (err, results) => {
            if (err) return callback(err);
            else return callback(null, results);
        });
    },
    deleteEmployee: (empId, callback) => {
        const sql = "DELETE FROM employees WHERE empId = ?";
        conn.query(sql, [empId], (err, results) => {
            if (err) return callback(err);
            else return callback(null, results);
        })
    }

}