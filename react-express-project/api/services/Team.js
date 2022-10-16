const conn = require('../config/db');

module.exports = {
    recordTeam: (info, callback) => {
        const sql = "INSERT INTO teams (teamId, teamName) VALUES (?, ?)";
        conn.query(sql, [info.teamId, info.teamName], (err, data)=>{
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    getAllTeams: (callback) => {
        const sql = "SELECT * FROM teams";
        conn.query(sql, (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        })
    },
    getTeamById: (teamId, callback) => {
        const sql = "SELECT * FROM teams WHERE teamId = ?";
        conn.query(sql, [teamId], (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    deleteTeamById: (teamId, callback) => {
        const sql = "DELETE FROM teams WHERE teamId = ?";
        conn.query(sql, [teamId], (err, data) => {
            if (err) return callback(err);
            else return callback(null, data);
        });
    },
    updateTeamById: (teamId, info, callback) => {
        const sql = "UPDATE teams SET teamName = ? WHERE teamId = ?";
        conn.query(sql, [info.teamName, teamId], (err, data) => {
            if (err) return callback(err);
            else return callback(null, data); 
        });
    }
}