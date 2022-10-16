const propertyInfoServices = require('../services/PropertyInfo');

module.exports = {
    recordPropertyInfo: (req, res, next) => {
        const data = req.body;
        
        propertyInfoServices.addPropertyInfo(data, (err, result)=>{
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
    getPropertyInfo: (req, res, next) => {
        const data = {"ParentHouseNumber": req.params.ParentHouseNumber ? req.params.ParentHouseNumber : req.body.ParentHouseNumber};
        
        propertyInfoServices.readPropertyInfo(data, (err, result) => {
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