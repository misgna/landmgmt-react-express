const loginService = require('../services/Login');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.verifyUser = (req, res, next) => {
    const empId = req.body.empId;
    const empPassword = req.body.empPassword;

    loginService.verifyUser(empId, (err, data) => {
        
        if (err) {
            res.send({
                status: "error"
            });
        } else {
            if (data.length > 0) {
                bcrypt.compare(empPassword, data[0].empPassword)
                    .then((passwordCheck) => {
                        if (!passwordCheck) {
                            return res.send({
                                login: false,
                                status: "ok",
                                message: "Passwords does not match",
                            });
                        }

                        const token = jwt.sign(
                            {
                                empId: data[0].empId,
                                empPassword: data[0].empPassword
                            },
                            'RANDOM-TOKEN',
                            { expiresIn: "24h" }
                        );
                        res.send({
                            status: "ok",
                            login: true,
                            message: "Correct login credentials!"
                        });
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
    const empPassword = req.body.data.empPassword;
    const status = req.body.data.status;

    console.log(req.body.data);
    bcrypt.hash(empPassword, 10)
        .then((hashedPassword) => {
            const data = {
                empId: EmpId,
                empPassword: hashedPassword,
                status: status
            };
            loginService.createAccount(data, (err, data) => {
                if (err) {
                    res.send({
                        status: "error"
                    });
                } else {
                    res.send({
                        status: "ok",
                        message: "New account is created!"
                    });
                }
            });
        })

}