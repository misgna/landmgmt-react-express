import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form, InputGroup, Container, Card } from 'react-bootstrap';
import Axios from 'axios';
import lease_types from './constants';

const LeaseFollowUp = () => {
    const [leaseFollowup, setLeaseFollowup] = useState({});
    const [search, setSearch] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setLeaseFollowup(values => ({ ...values, [name]: value }));
    }

    const handleRecord = () => {
        const leaseFollowupServiceTypes = document.getElementsByName('leaseFollowupServiceType')[0].selectedOptions;
        const leaseFollowupServiceTypes_ = Array.from(leaseFollowupServiceTypes).map(({ value }) => value);
       
        const leaseFollowupDecision = document.getElementsByName('leaseFollowupDecision')[0].selectedOptions;
        const leaseFollowupDecision_ = Array.from(leaseFollowupDecision).map(({ value }) => value);

        const projectStatusStart = Array.from(document.getElementsByName("projectstatus_start")).find(value => value.checked).value;
        const projectStatusEnd = Array.from(document.getElementsByName("projectstatus_end")).find(value => value.checked).value;
        const projectStatusServiceChange = Array.from(document.getElementsByName("projectstatus_service")).find(value => value.checked).value;


        // if(document.getElementsByName('projectstatus_start')[0].checked) {
        //     alert(document.getElementsByName('projectstatus_start')[0].value);
        // }
        //alert(projectstatus_start) 

        if (leaseFollowupServiceTypes) {
            let leaseFolloupData = { 
                                   LeaseNumber: leaseFollowup.leaseNumber, 
                                   LeaseFolloupServiceTypes: leaseFollowupServiceTypes_.toString(), 
                                   LeaseFollowupDecision: leaseFollowupDecision_.toString(),
                                   ProjectStatusStart: projectStatusStart,
                                   ProjectStatusEnd: projectStatusEnd,
                                   ProjectStatusServiceChange: projectStatusServiceChange

                                };

            alert(JSON.stringify(leaseFolloupData));
            Axios.post('http://localhost:4000/leaseinfo', leaseFolloupData)
                .then((response) => {
                    alert(JSON.stringify(response.data));
                }).catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Please fill the boxes highlighted with red!");
        }
    }

    const handleClear = () => {
        setLeaseFollowup({});
    }
    const searchByLeaseNumber = () => {
        const leaseNumber = { LeaseNumber: leaseFollowup.leaseNumber }
        Axios.post('http://localhost:4000/leaseinfo/search', leaseNumber)
            .then((response) => {
                setSearch(response.data.result[0]);

            }).catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            {/*<LeaseInfo />*/}
            <Form className="container justify-content-center mb-4">
                <Row className='bg-primary text-white p-2'>
                    <Col>የሊዝ ክትትል ቅጽ</Col>
                </Row>
                <Row className='border p-2 justify-content-center'>

                    <Row className='row'>
                        <Form.Group as={Col} className="col-7 bg-light p-2 m-2">
                            <Form.Label>የዉል ቁጥር</Form.Label>
                            <InputGroup>
                                <Form.Control type="text" className="p-2" name="leaseNumber"
                                    value={leaseFollowup.leaseNumber || ""}
                                    onChange={handleChange}
                                    style={{ borderColor: leaseFollowup.leaseNumber ? "gray" : "red" }} />
                                <Button variant="outline-secondary" onClick={() => searchByLeaseNumber(leaseFollowup.leaseNumber)}>
                                    ፈልግ
                                </Button>
                            </InputGroup>
                            {
                                search !== undefined ? (
                                    <Card className="m-2 p-2">
                                        <Row className='small mt-2'>
                                            <Form.Label>ሙሉ ስም: {search.TenantName || '' + ' ' + search.TenantFName || '' + ' ' + search.TenantGFName || ''}</Form.Label>
                                        </Row>
                                        <Row className='small mt-2'>
                                            <Form.Label>
                                                የሊዝ ዓይነት:
                                                {lease_types.map((lease_type) => parseInt(lease_type.id) === parseInt(search.LeaseType) ? lease_type.type : null)}
                                            </Form.Label>
                                        </Row>
                                        <Row className='small mt-2'>
                                            <Form.Label>ሊዝ የተፈረመበት ቀን: {search.SignedDate}</Form.Label>
                                        </Row>

                                    </Card>

                                ) : null
                            }

                        </Form.Group>
                        <Form.Group as={Col} className="col-4 bg-light p-2 m-2">
                            <Form.Label>የኣገልግሎት ክትትል ዓይነት</Form.Label>
                            <Form.Select type="select" className="p-2" name="leaseFollowupServiceType" multiple size={3}>
                                <option value="የግንባታ መጀመር ክትትል" className='border-bottom p-2'>የግንባታ መጀመር ክትትል</option>
                                <option value="የግንባታ መጠናቀቅ ክትትል" className='border-bottom p-2'>የግንባታ መጠናቀቅ ክትትል</option>
                                <option value="የኣገልግሎት ለውጥ ክትትል" className='border-bottom p-2'>የኣገልግሎት ለውጥ ክትትል</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col} className="col-6">
                            <Form.Label>የክትትል ዉጤት</Form.Label>
                            <Form.Group className='p-2'>
                                <Form.Label className='mx-4'>ግንባታው በግዜው </Form.Label>
                                <Form.Check type="radio" className="p-2" name="projectstatus_start" label="ተጀምረዋል" value = "ተጀምረዋል" inline />
                                <Form.Check type="radio" className="p-2" name="projectstatus_start" label="ኣልተጀመረም" value = "ኣልተጀመረም" inline />
                            </Form.Group>
                            <Form.Group className='p-2'>
                                <Form.Label className='mx-4'>ግንባታው በግዜው </Form.Label>
                                <Form.Check type="radio" className="p-2" name="projectstatus_end" label="ኣልቋል" value = "ኣልቋል" inline />
                                <Form.Check type="radio" className="p-2" name="projectstatus_end" label="ኣላለቀም" value = "ኣላለቀም" inline />
                            </Form.Group>
                            <Form.Group className='p-2'>
                                <Form.Label className='mx-4'>የኣገልግሎት ለውጥ</Form.Label>
                                <Form.Check type="radio" className="p-2" name="projectstatus_service" label="ኣለ" value = "ኣለ" inline />
                                <Form.Check type="radio" className="p-2" name="projectstatus_service" label="የለም" value="የለም" inline />
                            </Form.Group>
                        </Form.Group>

                        <Form.Group as={Col} className="col-6">
                            <Form.Label>ዉሳኔ</Form.Label>
                            <Form.Select type="select" className="p-2" name="leaseFollowupDecision" multiple>
                                <option className='border-bottom p-2'>ዉል ማቋረጥ</option>
                                <option className='border-bottom p-2'>የዉል ማሻሻያ ማድረግ</option>
                                <option className='border-bottom p-2'>የኣገልግሎት ለዉጥ ማድረግ</option>
                                <option className='border-bottom p-2'>በጥሩ ሁኔታ ላይ መገኘት</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                </Row>

                <Row className='text-center mt-3 mb-3 border-bottom pb-2 pt-2'>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-success' onClick={handleRecord}>
                            መዝግብ
                        </Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-danger' onClick={handleClear}>
                            ኣፅዳ
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default LeaseFollowUp;