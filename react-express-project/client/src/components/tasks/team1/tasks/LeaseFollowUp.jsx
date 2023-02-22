import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import lease_types from './constants';

const LeaseFollowUp = () => {
    const [lease, setLease] = useState({});
    const [borderColor, setBorderColor] = useState("gray");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setLease(values => ({ ...values, [name]: value }));
    }

    const handleRecord = () => {
        if (lease.leaseNumber && lease.leaseType && lease.signedDate && lease.tenantName && lease.tenantFName && 
                                lease.tenantGFName ) {
            let leaseBasicData = { LeaseNumber: lease.leaseNumber, LeaseType: lease.leaseType, SignedDate: lease.signedDate, TenantName: lease.tenantName, TenantFName: lease.tenantFName, TenantGFName: lease.tenantGFName,
                TenantNationality: lease.tenantNationality, TenantSubcity: lease.tenantSubcity, TenantWereda: lease.tenantWereda, 
                TenantHouseNumber: lease.tenantHouseNumber, TenantPhonenumber: lease.tenantPhonenumber};
         

            Axios.post('http://localhost:4000/leaseinfo', leaseBasicData)
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
        setLease({});
    }
    return (
        <>
            {/*<LeaseInfo />*/}
            <Form className="container justify-content-center mb-4">
                <Row className='bg-primary text-white p-2'>
                    <Col>የዉል መረጃ</Col>
                </Row>
                <Row className='border p-2 justify-content-center'>
                   
                    <Row className='row'>
                        <Form.Group as={Col} className="col-5 bg-light p-2 m-2">
                            <Form.Label>የዉል ቁጥር</Form.Label>
                            <Form.Control type="text" className="p-2" name="leaseNumber"
                                value={lease.leaseNumber || ""}
                                onChange={handleChange}
                                style={{ borderColor: lease.leaseNumber ? "gray" : "red" }} />
                        </Form.Group>
                        <Form.Group as={Col} className="col-5 bg-light p-2 m-2">
                            <Form.Label>የኣገልግሎት ክትትል ዓይነት</Form.Label>
                            <Form.Select type="select" className="p-2" name="" multiple>
                                <option className='border-bottom p-2'>የግንባታ መጀመር ክትትል</option> 
                                <option className='border-bottom p-2'>የግንባታ መጠናቀቅ ክትትል</option> 
                                <option className='border-bottom p-2'>የኣገልግሎት ለውጥ ክትትል</option> 
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className='bg-light p-2 m-2'>
                    <Form.Group as={Col} className="col-6">
                            <Form.Label>የክትትል ዉጤት</Form.Label>
                            <Form.Group>
                                <Form.Label className='mx-4'>ግንባታው በግዜው </Form.Label>
                                <Form.Check type="radio" className="p-2" name="" label="ተጀምረዋል" inline />
                                <Form.Check type="radio" className="p-2" name="" label="ኣልተጀመረም" inline/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='mx-4'>ግንባታው በግዜው </Form.Label>
                                <Form.Check type="radio" className="p-2" name="" label="ኣልቋል" inline/>
                                <Form.Check type="radio" className="p-2" name="" label="ኣላለቀም" inline/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='mx-4'>የኣገልግሎት ለውጥ</Form.Label> 
                                <Form.Check type="radio" className="p-2" name="" label="ኣለ" inline/>
                                <Form.Check type="radio" className="p-2" name="" label="የለም" inline/>
                            </Form.Group>
                            
                           
                            
                        </Form.Group>

                        <Form.Group as={Col} className="col-6">
                            <Form.Label>ዉሳኔ</Form.Label>
                            <Form.Select type="select" className="p-2" name="" multiple>
                                <option className='border-bottom p-2'>ዉል ማቋረጥ</option> 
                                <option className='border-bottom p-2'>የዉል ማሻሻያ ማድረግ</option> 
                                <option className='border-bottom p-2'>የኣገልግሎት ለዉጥ ማድረግ</option> 
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