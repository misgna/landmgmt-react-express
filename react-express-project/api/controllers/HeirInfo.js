const heirServices = require('../services/HeirInfo');
const multer = require("multer");

module.exports = {
    recordHeirInfo: (req, res, next) => {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => { cb(null, './public/images/') },
            filename: (req, file, cb) => { cb(null, file.originalname) }
        });

        const upload = multer({ storage: storage }).single("Photo")
        upload(req, res, (err) => {
            const data = req.body;
            data["HeirPhoto"] = req.file.filename;

            heirServices.addHeirInfo(data, (err, result) => {
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
        })
    },
    getHeirInfo: (req, res, next) => {
        const data = {"ParentHouseNumber": req.params.ParentHouseNumber ? req.params.ParentHouseNumber : req.body.ParentHouseNumber};
        
        heirServices.getHeirInfo(data,(err, result) => {
            if (err) {
                res.send({
                    "status": "error",
                    "message": "Data error!"
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