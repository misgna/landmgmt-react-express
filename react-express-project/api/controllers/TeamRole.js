const teamRoleServices = require('../services/TeamRole');

module.exports = {
    addRecord: (req, res, next) => {
        const data = req.body;
        teamRoleServices.addTeamRole(data, (err, result) => {
            if (err) {
                res.send({
                    "status": "error",
                    "message": "Data is not recorded!"
                });
            } else {
                res.send({
                    "status": "success",
                    "message": "New record added!"
                });
            }
        });
    },
    readRecord: (req, res, next) => {
        teamRoleServices.readTeamRole((err, result) => {
            if (err) {
                res.send({
                    "status": "error",
                    "message": "Data is not recorded!"
                });
            } else {
                res.send(result);
                // res.send({
                //     "status": "success",
                //     "message": "Data is not recorded!",
                //     "result": result
                // });
            }
        });
    },
    readRecordById: (req, res, next) => {
        const data = {teamId: req.params.teamId, teamRole: req.params.teamRole};
        teamRoleServices.readTeamRoleById(data, (err, result) => {
            if (err) {
                res.send({
                    "status": "error",
                    "message": "Data is not recorded!"
                });
            } else {
                res.send({
                    "status": "success",
                    "message": "Data is not recorded!",
                    "result": result
                });
            }
        });
    },
    updateRecord: (req, res, next) => {
        const data = {teamId: req.params.teamId, prevTeamRole: req.params.prevTeamRole, teamRole: req.body.teamRole};

        teamRoleServices.updateTeamRole(data, (err, result) => {
            if (err) {
                res.send({
                    "status": "error",
                    "message": "Data is not recorded!"
                });
            } else {
                res.send({
                    "status": "success",
                    "message": "Record updated!"
                });
            }
        });
    },
    deleteRecord: (req, res, next) => {
        const data = {teamId: req.params.teamId, teamRole: req.params.teamRole};

        teamRoleServices.deleteTeamRole(data, (err, result) => {
            if (err) {
                res.send({
                    "status": "error",
                    "message": "Data is not recorded!"
                });
            } else {
                res.send({
                    "status": "success",
                    "message": "Record deleted!"
                });
            }
        });
    }
}