const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "misgna",
    password: "",
    database: "landmgmt"
});

conn.connect();

//Create displacedinfo table
/*
const sql = "CREATE TABLE displacedinfo (Name varchar(255) NOT NULL, FName varchar(255) NOT NULL, GFName varchar(255), RA_Subcity varchar(255) NOT NULL, RA_Wereda varchar(255) NOT NULL, RA_Block varchar(255), RA_HouseNumber varchar(255), OA_Wereda varchar(255) NOT NULL, OA_Kebelle varchar(255) NOT NULL, OA_Block varchar(255), OA_HouseNumber varchar(255), NumberOfOwners varchar(10));";
conn.query(sql, (err) => {
    if (err) throw err;
    console.log("Table Created!");
})

const sql = "CREATE TABLE heirinfo (ParentHouseNumber varchar(255) NOT NULL, HeirName varchar(255), HeirFName varchar (255) NOT NULL, HeirGFName varchar(255), RA_Subcity varchar(255) NOT NULL, RA_Wereda varchar(255) NOT NULL, RA_Block varchar(255), RA_HouseNumber varchar(255), HeirPhoto text, CONSTRAINT HeirID PRIMARY KEY(ParentHouseNumber, HeirName));";
conn.query(sql, (err) => {
    if (err) throw err;
    console.log("Table Created!");
})

const sql = "CREATE TABLE propertyinfo (ParentHouseNumber varchar(255) NOT NULL, PropertyOwner varchar(255) NOT NULL, PropertyService varchar(255) NOT NULL, PropertyDocs varchar(255) NOT NULL, PRIMARY KEY(ParentHouseNumber));";
conn.query(sql, (err) => {
    if (err) throw err;
    console.log("Table Created!")
})

const sql = "CREATE TABLE developmentinfo (ParentHouseNumber varchar(255) NOT NULL, ProjectName varchar(255) NOT NULL, PropertyTypes TEXT NOT NULL, PRIMARY KEY(ParentHouseNumber));";
conn.query(sql, (err) => {
    if (err) throw err;
    else console.log("Table created!");
})

const sql = "CREATE TABLE resettlementoptions (ParentHouseNumber varchar(255), ResettlementChoice text, PRIMARY KEY (ParentHouseNumber));";
conn.query(sql, (err) => {
    if (err) throw err;
    else console.log("Table created!");
});

const sql = "CREATE TABLE datasource (ParentHouseNumber varchar(255), Name1 varchar(255), FName1 varchar(255), GFName1 varchar(255), Date1 varchar(255), Phonenumber1 varchar(25), Name2 varchar(255), FName2 varchar(255), GFName2 varchar(255), Date2 varchar(255), Phonenumber2 varchar(25), Name3 varchar(255), FName3 varchar(255), GFName3 varchar(255), Date3 varchar(255), Phonenumber3 varchar(25), PRIMARY KEY(ParentHouseNumber));";
conn.query(sql, (err) => {
    if (err) throw err;
    else console.log("Table created!");
})
*/


module.exports = conn;