import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import Axios from 'axios';

const DataCollectedFrom = () => {
    const ParentHouseNumber = JSON.parse(localStorage.getItem("houseNumber"));
    const [dataCollectedFrom, setDataCollectedFrom] = useState({});

    const handleAdd = () => {
        dataCollectedFrom["ParentHouseNumber"] = ParentHouseNumber;
        Axios.post("http://localhost:4000/datacollectedfrom", dataCollectedFrom)
            .then((res) => {
                const response = res.data;
                alert(JSON.stringify(response));
            })
    }
    const handleClear = () => {

    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setDataCollectedFrom(values => ({ ...values, [name]: value }));
    }
    return (
        <>
            <div className="container justify-content-center mb-4">
                { /*ParentHouseNumber !== "" && (*/
                    <>
                        <Row className='bg-primary text-white p-2'>
                            <Col>መረጃው የሰጠው ግለሰብ (ተነሺ)ስም</Col>
                        </Row>
                        <Row className="mb-3 border-bottom pb-2 bg-light">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>ስም</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>የኣባት ስም</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>የኣያት ስም</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>ቀን</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>ስ.ቁጥር</Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 border-bottom pb-2 bg-light">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="የተነሺው ስም"
                                    name="Name1"
                                    value={dataCollectedFrom.Name1 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="የኣባት ስም"
                                    name="FName1"
                                    value={dataCollectedFrom.FName1 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="የኣያት ስም"
                                    name="GFName1"
                                    value={dataCollectedFrom.GFName1 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="ቀን"
                                    name="Date1"
                                    value={dataCollectedFrom.Date1 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="ስ.ቁጥር"
                                    name="Phonenumber1"
                                    value={dataCollectedFrom.Phonenumber1 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 border-bottom pb-2 bg-light">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="የተነሺው ስም"
                                    name="Name2"
                                    value={dataCollectedFrom.Name2 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="የኣባት ስም"
                                    name="FName2"
                                    value={dataCollectedFrom.FName2 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="የኣያት ስም"
                                    name="GFName2"
                                    value={dataCollectedFrom.GFName2 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="ቀን"
                                    name="Date2"
                                    value={dataCollectedFrom.Date2 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="ስ.ቁጥር"
                                    name="Phonenumber2"
                                    value={dataCollectedFrom.Phonenumber2 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 border-bottom pb-2 bg-light">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="የተነሺው ስም"
                                    name="Name3"
                                    value={dataCollectedFrom.Name3 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="የኣባት ስም"
                                    name="FName3"
                                    value={dataCollectedFrom.FName3 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="የኣያት ስም"
                                    name="GFName3"
                                    value={dataCollectedFrom.GFName3 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="ቀን"
                                    name="Date3"
                                    value={dataCollectedFrom.Date3 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="ስ.ቁጥር"
                                    name="Phonenumber3"
                                    value={dataCollectedFrom.Phonenumber3 || ""}
                                    onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Row className='text-center mt-3 mb-3 border-bottom pb-2 pt-2'>
                            <Col className='text-center'>
                                <Button className='btn w-50 btn-success' onClick={handleAdd}>
                                    መዝግብ
                                </Button>
                            </Col>
                            <Col className='text-center'>
                                <Button className='btn w-50 btn-danger' onClick={handleClear}>
                                    ኣፅዳ
                                </Button>
                            </Col>
                        </Row>
                    </>
                /*)*/}
            </div>
        </>
    )
}

export default DataCollectedFrom;