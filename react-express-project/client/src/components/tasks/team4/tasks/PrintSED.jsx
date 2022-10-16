import Axios  from "axios";
import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const PrintData = () => {
    const ParentHouseNumber = JSON.parse(localStorage.getItem("houseNumber"));
    const [displacedInfo, setDisplacedInfo] = useState([{}]);
    const [heirInfo, setHeirInfo] = useState([{}]);
    const [propertyInfo, setPropertyInfo] = useState([{}]);
    const [developmentInfo, setDevelopmentInfo] = useState([{}]);
    const [resettlementOptions, setResettlementOptions] = useState([{}]);
    const [dataCollectedFrom, setDataCollectedFrom] = useState([{}]);


    const handleClick = () => {
        //let name = document.getElementsByName("name").value;
        //alert(name);
    }
    
    const endpoints = [
        'http://localhost:4000/displacedinfo',
        'http://localhost:4000/heirinfo',
        'http://localhost:4000/propertyinfo',
        'http://localhost:4000/developmentinfo',
        'http://localhost:4000/resettlementoptions',
        'http://localhost:4000/datacollectedfrom'
    ];

    const data = {"ParentHouseNumber": ParentHouseNumber};
    Axios.all(endpoints.map((endpoint) => Axios.get(`endpoint/${data.ParentHouseNumber}`)))
    .then(Axios.spread(
        (
            {data: displacedInfo}, 
            {data: heirInfo},
            {data: propertyInfo},
            {data: developmentInfo},
            {data: resettlementOptions},
            {data: dataCollectedFrom}
        ) => {
            setDisplacedInfo(displacedInfo['result']);
            setHeirInfo(heirInfo['result']);
            setPropertyInfo(propertyInfo['result']);
            setDevelopmentInfo(developmentInfo['result']);
            setResettlementOptions(resettlementOptions['result']);
            setDataCollectedFrom(dataCollectedFrom['result']);
        })
    );
        
    return (
        <div className="container justify-content-center mb-4">
            <Row>
                <Col>የተነሺው ሙሉ ስም: {displacedInfo.Name} {displacedInfo.FName} {displacedInfo.GFName}</Col>
            </Row>
            <Row>
                <Row><Col>የመኖርያ ኣድራሻ</Col></Row>
                <Row>
                    <Col>ክ/ከተማ</Col>
                    <Col>{displacedInfo.RA_Subcity}</Col>
                    <Col>ወረዳ</Col>
                    <Col>{displacedInfo.RA_Wereda}</Col>
                </Row>
                <Row>
                    <Col>ብሎክ</Col>
                    <Col>{displacedInfo.RA_Block}</Col>
                    <Col>የቤት ቁጥር</Col>
                    <Col>{displacedInfo.RA_HouseNumber}</Col>
                </Row>
            </Row>
            <Row>
                <Row><Col>የቀድሞ ኣድራሻ</Col></Row>
                <Row>
                    <Col>ወረዳ</Col>
                    <Col>{displacedInfo.OA_Wereda}</Col>
                    <Col>ቀበሌ</Col>
                    <Col>{displacedInfo.OA_Kebelle}</Col>
                </Row>
                <Row>
                    <Col>ብሎክ</Col>
                    <Col>{displacedInfo.OA_Block}</Col>
                    <Col>የቤት ቁጥር</Col>
                    <Col>{displacedInfo.OA_HouseNumber}</Col>
                </Row>
            </Row>
            <Row>
                <Row><Col>ወራሾች</Col></Row>
                {
                    heirInfo.map((hi) => (
                        <Row className="w-50">
                            <Col>
                                <img src={`http://localhost:4000/images/${hi.HeirPhoto}`} alt = "" />
                            </Col>
                            <Col>
                                <Row><Col>ሙሉ ስም: {hi.HeirName} {hi.HeirFName} {hi.HeirGFName}</Col></Row>
                                <Row><Col>ክ/ከተማ: {hi.RA_Subcity}</Col></Row>
                                <Row><Col>ወረዳ: {hi.RA_Wereda}</Col></Row>
                                <Row><Col>ብሎክ: {hi.RA_Block}</Col></Row>
                                <Row><Col>የቤት ቁጥር: {hi.RA_HouseNumber}</Col></Row>
                            </Col>
                        </Row>
                    ))
                }
            </Row>
            <Row>
                <Col>የይዞታው ባለቤትነት: {propertyInfo.PropertyOwner}</Col>
            </Row>
            <Row>
                <Col>የይዞታው ኣገልግሎት: {propertyInfo.PropertyService}</Col>
            </Row>
            <Row>
                <Col>ስለ ይዞታው የቀረበ ሰነድ: {propertyInfo.PropertyDocs}</Col>
            </Row>
            <Row>
                <Col>ለልማት የተፈለገው ንብረት ዓይነት: {developmentInfo.PropertyTypes}</Col>
            </Row>
            <Row>
                <Col>የተነሺዎች ፍላጎትና ምርጫ: {resettlementOptions.ResettlementChoice}</Col>
            </Row>
            <Row>
                <Col>ይዞታው የተፈለገበት የልማት ዓይነት ወይም ፕሮጀክት መጠርያ: {developmentInfo.ProjectName}</Col>
            </Row>
            <Row>
                <Row><Col>መረጃውን የሰጠው ግለሰብ(ተነሺ) ስም</Col></Row>
                <Row>
                    <Col>ስም {dataCollectedFrom.Name1} {dataCollectedFrom.FName1} {dataCollectedFrom.GFName1}</Col>
                    <Col>ፊርማ</Col>
                    <Col>ቀን: {dataCollectedFrom.Date1}</Col>
                    <Col>ስ/ቁጥር: {dataCollectedFrom.Phonenumber1}</Col>
                </Row>
                <Row>
                    <Col>ስም {dataCollectedFrom.Name2} {dataCollectedFrom.FName2} {dataCollectedFrom.GFName2}</Col>
                    <Col>ፊርማ</Col>
                    <Col>ቀን: {dataCollectedFrom.Date2}</Col>
                    <Col>ስ/ቁጥር: {dataCollectedFrom.Phonenumber2}</Col>
                </Row>
                <Row>
                    <Col>ስም: {dataCollectedFrom.Name3} {dataCollectedFrom.FName3} {dataCollectedFrom.GFName3}</Col>
                    <Col>ፊርማ</Col>
                    <Col>ቀን: {dataCollectedFrom.Date3}</Col>
                    <Col>ስ/ቁጥር: {dataCollectedFrom.Phonenumber3}</Col>
                </Row>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
                    <input type="checkbox" label="" /> የተጠቀሰው መረጃ ተጣርቶ በካሳ መረጃ ኣሰባሰብ ኦፊሰር ተሞልተዋል።
            </Form.Group>
            
            <Button className="btn" onClick={handleClick}>
                ወደ የመረጃ ኣሰባሰብ ቡድን መሪ ላክ
            </Button>

        </div>
    );
}



export default PrintData;