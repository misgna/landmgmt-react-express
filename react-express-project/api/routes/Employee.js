var express = require('express');
var router = express.Router();
var employeeControllers = require('../controllers/Employee');

router.get('/', employeeControllers.getAllEmployees);
router.get('/:empId', employeeControllers.getEmployeeById);
router.post('/', employeeControllers.recordEmployee);
router.put('/:empId', employeeControllers.updateEmployeeById);
router.put('/', employeeControllers.updateEmployeeById);
//router.delete('/:empId', employeeControllers.deleteEmployeeById);
router.delete('/', employeeControllers.deleteEmployeeById);

module.exports = router;