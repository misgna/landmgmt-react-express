
const employeeServices = require('../services/Employee');

exports.recordEmployee = (req, res, next) => {
    const data = req.body;
    
    employeeServices.addEmployee(data, function(err, result){
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
exports.getAllEmployees = (req, res, next) => {
    employeeServices.getAllEmployees(function(err, result) {
        if (err) throw err;
        else res.send(result);
    })
};
exports.getEmployeeById = (req, res, next) => {
    const empId = req.params.empId;
    employeeServices.getEmployeeById(empId, function(err, result) {
        if (err) throw err;
        else res.send(result);
    })
};
exports.deleteEmployeeById = (req, res, next) => {
    const data = req.body;
    
    employeeServices.deleteEmployee(data.empId, function(err, result) {
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
exports.updateEmployeeById = (req, res, next) => {
    const data = req.body.data;
    console.log(data.empId);
    employeeServices.updateEmployee(data.empId, data, (err, result) => {
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