const developmentInfoServices = require('../services/DevelopmentInfo');

module.exports = {
    recordDevelopmentInfo: (req, res, next) => {
        const data = req.body;
        developmentInfoServices.addDevelopmentInfo(data, (err, result) => {
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
    },
    getDevelopmentInfo: (req, res, next) => {
        const data = {"ParentHouseNumber": req.params.ParentHouseNumber ? req.params.ParentHouseNumber : req.body.ParentHouseNumber};
        
        developmentInfoServices.readDevelopmentInfo(data, (err, result) => {
            if (err) {
                res.send({
                "status": "error",
                "message": "Data is not recorded!"
            });
            } else {
               res.send({
                "status": "success",
                "result": result
               })
            }
        })
    }
}