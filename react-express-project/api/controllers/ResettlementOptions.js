const resettlementOptionsServices = require('../services/ResettlmentOptions');

module.exports = {
    recordResettlementOptions: (req, res, next) => {
        const data = req.body;
        
        resettlementOptionsServices.addResettlementOptions(data, (err, result) => {
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
    getResettlementOptions: (req, res, next) => {
        const data = {"ParentHouseNumber": req.params.ParentHouseNumber ? req.params.ParentHouseNumber : req.body.ParentHouseNumber};
        
        resettlementOptionsServices.readResettlementOptions(data, (err, result) => {
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