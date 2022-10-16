const teamServices = require('../services/Team');

exports.recordTeam = (req, res, next) => {
    const data = req.body;
   console.log(data);
    teamServices.recordTeam(data, function(err, result){
        if (err) {
            res.send({
            "status": "error",
            "message": "Data is not recorded!"
        });
        } else {
           res.send({
            "status": "success",
            "message":"New record added!"
           })
        }
    })
};
exports.getAllTeams = (req, res, next) => {
    teamServices.getAllTeams(function(err, result) {
        if (err) throw err;
        else res.send(result);
    })
};
exports.getTeamById = (req, res, next) => {
    const teamId = req.params.teamId;
    
    teamServices.getTeamById(teamId, function(err, result) {
        if (err) throw err;
        else res.send(result);
    })
}
exports.deleteTeamById = (req, res, next) => {
    const teamId = req.params.teamId ? req.params.teamId : req.body.teamId;
    teamServices.deleteTeamById(teamId, function(err, result) {
        if (err) {
            res.send({
            "status": "error",
            "message": "Data is not deleted!"
        });
        } else {
           res.send({
            "status": "success",
            "message":"Data is deleted!"
           })
        }
    });
}
exports.updateTeamById = (req, res, next) => {
    const teamId = req.params.teamId ? req.params.teamId : req.body.teamId;
    const info = req.body;
    teamServices.updateTeamById(teamId, info, (err, result) => {
        if (err) {
            res.send({
            "status": "error",
            "message": "Data is not updated!"
        });
        } else {
           res.send({
            "status": "success",
            "message":"Data is updated!"
           })
        }
    })
}