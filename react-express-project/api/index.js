const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require("multer");
//const upload = multer();

const loginRouter = require('./routes/Login');
const teamRouter = require('./routes/Team');
const employeeRouter = require('./routes/Employee');
const displacedInfoRouter = require('./routes/DisplacedInfo');
const heirInfoRouter = require('./routes/HeirInfo');
const propertyInfoRouter = require('./routes/PropertyInfo');
const developmentInfoRouter = require('./routes/DevelopmentInfo');
const resettlementOptionsRouter = require('./routes/ResettlementOptions');
const dataSourceRouter = require('./routes/DataSource');

const jwt = require("jsonwebtoken");
const auth = require("./auth");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
//app.use(upload.array());

app.use('/login', loginRouter);
app.use('/team', teamRouter);
app.use('/employee', employeeRouter);
app.use('/displacedinfo', displacedInfoRouter);
app.use('/heirinfo', heirInfoRouter);
app.use('/propertyinfo', propertyInfoRouter);
app.use('/developmentinfo', developmentInfoRouter);
app.use('/resettlementoptions', resettlementOptionsRouter);
app.use('/datacollectedfrom', dataSourceRouter);

app.listen(PORT, ()=>{
    console.log(`listening at ${PORT}`);
})