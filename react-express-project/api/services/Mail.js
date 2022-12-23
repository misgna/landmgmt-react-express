const conn = require('../config/db');

module.exports = {
    getSentMails: (data, callback) => {
        const sql = "SELECT * FROM mail WHERE sender = ?";
        
        conn.query(sql, [data.sender], (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        })
    },
    getReceivedMails: (data, callback) => {
        const sql = "SELECT * FROM mail WHERE receiver = ?";
        
        conn.query(sql, [data.receiver], (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        })
    },
    setMail: (data, callback) => {
        const sql = "INSERT INTO mail (sender, receiver, message, status, subject) VALUES (?, ?, ?, ?, ?)";

        conn.query(sql, [data.sender, data.receiver, data.message, data.status, data.subject], (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        });
    },
    updateStatusMail: (data, callback) => {
        const sql = "UPDATE mail SET status = ? WHERE receiver = ? AND sender = ? AND created_at = ?";

        conn.query(sql, [data.status, data.receiver, data.sender, data.created_at], (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        })
    }
}
