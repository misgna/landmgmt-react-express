const loginService = require('../services/Login');
//const jwt = require("jsonwebtoken");
//const bcrypt = require("bcrypt");


exports.verifyUser = (req, res, next) => {
    const data = req.body;

    loginService.verifyUser(data, (err, data) => {

        if (err) {
            res.send({
                status: "error"
            });
        } else {
            if (data.length > 0) {
                res.send({
                    status: "ok",
                    login: true,
                    message: "Correct login credentials!"
                });
            } else {
                res.send({
                    status: "ok",
                    login: false,
                    message: "Wrong username!"
                });
            }
        }
    }
    )
}
exports.createUserAccount = (req, res, next) => {
    const EmpId = req.body.data.empId;
    const EmpPassword = req.body.data.empPassword;
    const Status = req.body.data.status;
    const data = {
        empId: EmpId,
        empPassword: EmpPassword,
        status: Status
    }
    loginService.createAccount(data, (err, data) => {
        if (err) {
            res.send({
                status: "error",
                message: "Account is not created!"
            });
        } else {
            res.send({
                status: "ok",
                message: "New account is created!"
            });
        }
    });
}
exports.changeStatusUser = (req, res, next) => {
    const data = {empId: req.params.empId, status: req.params.status};
    
    loginService.changeAccountStatus(data, (err, data) => {
        if (err) {
            res.send({
                status: "error",
                message: "Status is not changed!"
            });
        } else {
            res.send({
                status: "ok",
                message: "Status is changed!"
            });
        }
    })
}