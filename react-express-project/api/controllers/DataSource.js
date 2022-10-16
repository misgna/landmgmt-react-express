const dataSourceServices = require('../services/DataSource');

module.exports = {
    recordDataSource: (req, res, next) => {
        const data = req.body;
        dataSourceServices.addDataSource(data, (err, result) => {
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
    getDataSource: (req, res, next) => {
        const data = {"ParentHouseNumber": req.params.ParentHouseNumber ? req.params.ParentHouseNumber : req.body.ParentHouseNumber};
        
        dataSourceServices.readDataSource(data, (err, result) => {
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