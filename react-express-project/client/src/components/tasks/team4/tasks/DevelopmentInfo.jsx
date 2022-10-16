import React from 'react';
import {Row, Form, Col, Button} from 'react-bootstrap';
import Axios from 'axios';

const developmentInfo = () => {
    const ParentHouseNumber = JSON.parse(localStorage.getItem("houseNumber"));
    const handleAdd = () => {
        const ProjectName = document.getElementsByName("ProjectName")[0].value;
        const checkPropertyType = document.getElementsByName("TypeOfProperty[]");
        const selectedPropertyTypes = [];

        for(let index = 0; index < checkPropertyType.length; index++) {
            if(checkPropertyType[index].checked)
                selectedPropertyTypes.push(checkPropertyType[index].value);
        }

        const input = {
            "ParentHouseNumber": ParentHouseNumber,
            "ProjectName": ProjectName,
            "PropertyTypes": selectedPropertyTypes.toString()
        }

        Axios.post("http://localhost:4000/developmentinfo", input)
        .then((res) => {
            const response = res.data;
            alert(JSON.stringify(response));
        })
    }
    const handleClear = () => {

    }
    return (
        <div className='container justify-content-center mb-4'>
            {
                /*ParentHouseNumber !== "" && (*/
            <>
            <Row className='bg-primary text-white p-2'>
                        <Col>ለልማት የተፈለገው ንብረት</Col>
            </Row>
            <Row className="mb-3 border-bottom bg-light pb-2">
                <Form.Label>ለልማት የተፈለገው ንብረት ዓይነት</Form.Label>
                    <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                        <input type="checkbox" value="ቤት" name="TypeOfProperty[]"/> ቤት
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                        <input type="checkbox" value="ኣጥር" name="TypeOfProperty[]"/> ኣጥር
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                        <input type="checkbox" value="ተነቅሎ የሚተከል" name="TypeOfProperty[]"/> ተነቅሎ የሚተከል
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                        <input type="checkbox" value="የእርሻ መሬት" name="TypeOfProperty[]"/> የእርሻ መሬት
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                        <input type="checkbox" value="የግጦሽ መሬት" name="TypeOfProperty[]"/> የግጦሽ መሬት
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                        <input type="checkbox" value="የተክል መሬት" name="TypeOfProperty[]"/> የተክል መሬት
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                        <input type="checkbox" value="የጓሮ ኣትክልት መሬት" name="TypeOfProperty[]"/> የጓሮ ኣትክልት መሬት
                    </Form.Group>
                    
                </Row>
                <Row className="mb-3 border-bottom bg-light pb-2">
                    <Form.Label>ይዞታው የተፈለገበት የልማት ኣይነት</Form.Label>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>የፕሮጀክት መጠርያ</Form.Label>
                        <Form.Control name='ProjectName'/>
                    </Form.Group>
                </Row>
                <Row className='text-center mt-3 mb-3 border-bottom pb-2 pt-2'>
                    {/*
                        <Col className='text-center'>
                        <Button className='btn w-50 btn-success' onClick={handleAdd}>
                            መዝግብ
                        </Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-danger' onClick={handleClear}>
                            ኣፅዳ
                        </Button>
                    </Col>*/
                }
            </Row>
            </>
            /*)*/}
        </div>
    )
}

export default developmentInfo;