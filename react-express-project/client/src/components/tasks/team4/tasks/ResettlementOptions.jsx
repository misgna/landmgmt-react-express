import React from 'react';
import {Row, Form, Col, Button} from 'react-bootstrap';
import Axios from 'axios';

const ResettlementOptions = () => {
    const ParentHouseNumber = JSON.parse(localStorage.getItem("houseNumber"));
    const handleAdd = () => {
        const checkedSettlementOptions = document.getElementsByName("settlementChoice[]");
        const selectedOptions = [];

        for(let index = 0; index < checkedSettlementOptions.length; index++) {
            if (checkedSettlementOptions[index].checked)
                selectedOptions.push(checkedSettlementOptions[index].value);
        }

        const input = {
            "ParentHouseNumber": ParentHouseNumber,
            "ResettlementChoice": selectedOptions.toString()
        }

        Axios.post("http://localhost:4000/resettlementoptions", input)
        .then((res) => {
            const response = res.data;
            alert(JSON.stringify(response));
        })
    }

    const handleClear = () => {

    }
    return (
        <div className='container justify-content-center mb-4'>
            { /*ParentHouseNumber !== "" && (*/
                <>
                <Row className='bg-primary text-white p-2'>
                        <Col>የተነሺዎች ፍላጎትና ምርጫ</Col>
                    </Row>
            <Row className="mb-3 border-bottom pb-2 bg-light">
                <Form.Label></Form.Label>
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <input type="checkbox" value="ኮንዶሚኒየም" name="settlementChoice[]"/> ኮንዶሚኒየም
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <input type="checkbox" value="ንግድ በኣክስዮን የሚደራጁ" name="settlementChoice[]"/> ንግድ በኣክስዮን የሚደራጁ
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <input type="checkbox" value="ምትክ ቦታ:- ማስፋፍያ" name="settlementChoice[]"/> ምትክ ቦታ:- ማስፋፍያ
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <input type="checkbox" value="መልሶ ማልማት" name="settlementChoice[]"/> መልሶ ማልማት
                    </Form.Group>
                </Row>
                <Row className='text-center mt-3 mb-3 border-bottom pb-2 pt-2'>
                    {/*<Col className='text-center'>
                        <Button className='btn w-50 btn-success' onClick={handleAdd}>
                            መዝግብ
                        </Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-danger' onClick={handleClear}>
                            ኣፅዳ
                        </Button>
    </Col>*/}
            </Row>
            </>
            /*)*/}
        </div>
    )
}

export default ResettlementOptions;