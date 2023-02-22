const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "misgna",
    password: "",
    database: "landmgmt"
});

conn.connect();

//Create displacedin
const sql_displacedinfo = "CREATE TABLE if not exists displacedinfo (Name varchar(255) NOT NULL, FName varchar(255) NOT NULL, GFName varchar(255), RA_Subcity varchar(255) NOT NULL, RA_Wereda varchar(255) NOT NULL, RA_Block varchar(255), RA_HouseNumber varchar(255), OA_Wereda varchar(255) NOT NULL, OA_Kebelle varchar(255) NOT NULL, OA_Block varchar(255), OA_HouseNumber varchar(255), NumberOfOwners varchar(10));";
conn.query(sql_displacedinfo, (err) => {
    if (err) throw err;
    console.log("Table Created!");
})

const sql_heirinfo = "CREATE TABLE if not exists heirinfo (ParentHouseNumber varchar(255) NOT NULL, HeirName varchar(255), HeirFName varchar (255) NOT NULL, HeirGFName varchar(255), RA_Subcity varchar(255) NOT NULL, RA_Wereda varchar(255) NOT NULL, RA_Block varchar(255), RA_HouseNumber varchar(255), HeirPhoto text, CONSTRAINT HeirID PRIMARY KEY(ParentHouseNumber, HeirName));";
conn.query(sql_heirinfo, (err) => {
    if (err) throw err;
    console.log("Table Created!");
})

const sql_propertyinfo = "CREATE TABLE if not exists propertyinfo (ParentHouseNumber varchar(255) NOT NULL, PropertyOwner varchar(255) NOT NULL, PropertyService varchar(255) NOT NULL, PropertyDocs varchar(255) NOT NULL, PRIMARY KEY(ParentHouseNumber));";
conn.query(sql_propertyinfo, (err) => {
    if (err) throw err;
    console.log("Table Created!")
})

const sql_developmentinfo = "CREATE TABLE if not exists developmentinfo (ParentHouseNumber varchar(255) NOT NULL, ProjectName varchar(255) NOT NULL, PropertyTypes TEXT NOT NULL, PRIMARY KEY(ParentHouseNumber));";
conn.query(sql_developmentinfo, (err) => {
    if (err) throw err;
    else console.log("Table created!");
})

const sql_resettlementoptions = "CREATE TABLE if not exists resettlementoptions (ParentHouseNumber varchar(255), ResettlementChoice text, PRIMARY KEY (ParentHouseNumber));";
conn.query(sql_resettlementoptions, (err) => {
    if (err) throw err;
    else console.log("Table created!");
});

const sql_datasource = "CREATE TABLE if not exists datasource (ParentHouseNumber varchar(255), Name1 varchar(255), FName1 varchar(255), GFName1 varchar(255), Date1 varchar(255), Phonenumber1 varchar(25), Name2 varchar(255), FName2 varchar(255), GFName2 varchar(255), Date2 varchar(255), Phonenumber2 varchar(25), Name3 varchar(255), FName3 varchar(255), GFName3 varchar(255), Date3 varchar(255), Phonenumber3 varchar(25), PRIMARY KEY(ParentHouseNumber));";
conn.query(sql_datasource, (err) => {
    if (err) throw err;
    else console.log("Table created!");
});

const sql_leaseinfo = "CREATE TABLE if not exists leaseinfo (LeaseNumber varchar(255), LeaseType text, SignedDate varchar(50), WitnessInfo text, RentalInfo text, RentalWitnessInfo text, PRIMARY KEY (LeaseNumber))";
conn.query(sql_leaseinfo, (err) => {
    if (err) throw err;
    else console.log("Table created!");
})

const sql_leasefollowup = "CREATE TABLE if not exists leasefollowup (LeaseNumber varchar(255), LeaseFollowupType varchar(255), LeaseFollowupResult varchar(255), LeaseFollowupDecision varchar(255), LeaseFollowupDate varchar(50), PRIMARY KEY(LeaseNumber, LeaseFollowupDate))";
conn.query(sql_leasefollowup, (err) => {
    if (err) throw err;
    else console.log("Table created!");
})
module.exports = conn;
