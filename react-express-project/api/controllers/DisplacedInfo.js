const displacedInfoServices = require('../services/DisplacedInfo');

module.exports = {
    recordDisplacedInfo: (req, res, next) => {
        const data = req.body;
        displacedInfoServices.addDisplacedInfo(data, (err, result) => {
            if (err) {
                res.send({
                    "status": "error",
                    "message": "Data is not recorded!"
                });
            } else {
                res.send({
                    "status": "success",
                    "message": "New record added!"
                })
            }
        })
    },
    getDisplacedInfo: (req, res, next) => {
        const data = {"ParentHouseNumber": req.params.ParentHouseNumber ? req.params.ParentHouseNumber : req.body.ParentHouseNumber};
        console.log(data)
        displacedInfoServices.readDisplacedInfo(data, (err, result) => {
            console.log(result);
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