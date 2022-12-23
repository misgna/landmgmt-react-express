const conn = require('../config/db');

module.exports = {
    addTeamRole: (data, callback) => {
        let afterValues = [];
        for (const role of data) {
            afterValues.push(`('${role.teamId}', '${role.teamRole}')`);
        }
    
        const sql = "INSERT INTO team_role (teamId, teamRole) VALUES " + afterValues.toString();
        console.log(sql);
        conn.query(sql, (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        });
    },
    readTeamRole: (callback) => {
        const sql = "SELECT * FROM team_role";

        conn.query(sql, (err, result) => {
            if (err) return callback(err);
            else return callback(null, result);
        });
    },
    readTeamRoleById: (data, callback) => {
        const sql = "SELECT * FROM team_role  WHERE teamId = ? AND teamRole = ?";

        conn.query(sql, [data.teamId, data.teamRole], (err, result) => {
                if (err) return callback(err);
                else return callback(null, result);
            });
    },
    updateTeamRole: (data, callback) => {
        const sql = "UPDATE team_role SET teamRole = ? WHERE teamId = ? AND teamRole = ?";

        conn.query(sql, [data.teamRole, data.teamId, data.prevTeamRole], (err, result) => {
                if (err) return callback(err);
                else return callback(null, result);
        });

    },
    deleteTeamRole: (data, callback) => {
        const sql = "DELETE FROM team_role  WHERE teamId = ? AND teamRole = ?";

        conn.query(sql, [data.teamId, data.teamRole], (err, result) => {
                if (err) return callback(err);
                else return callback(null, result);
        });
    }
}