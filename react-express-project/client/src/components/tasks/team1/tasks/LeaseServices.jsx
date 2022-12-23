import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import lease_types from './constants';

const LeaseServices = () => {
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
            let leaseBasicData = { LeaseNumber: lease.leaseNumber, LeaseType: lease.leaseType, SignedDate: lease.signedDate };
            let tenantData = { LeaseNumber: lease.leaseNumber, TenantName: lease.tenantName, TenantFName: lease.tenantFName, TenantGFName: lease.tenantGFName,
                                TenantNationality: lease.tenantNationality, TenantSubcity: lease.tenantSubcity, TenantWereda: lease.tenantWereda, 
                                TenantHouseNumber: lease.tenantHouseNumber, TenantPhonenumber: lease.tenantPhonenumber, TenantWitnessName: lease.tenantWitnessName, 
                                TenantWitnessFName: lease.tenantWitnessFName, TenantWitnessGFName: lease.tenantWitnessGFName, TenantWitnessNationality: lease.tenantWitnessNationality, 
                                TenantWitnessSubcity: lease.tenantWitnessSubcity, TenantWitnessWereda: lease.tenantWitnessWereda, 
                                TenantWitnessHouseNumber: lease.tenantWitnessHouseNumber,TenantWitnessPhonenumber: lease.tenantWitnessPhonenumber };
            let landlordData = {LeaseNumber: lease.leaseNumber, WitnessName: lease.witnessName, WitnessFName: lease.witnessFName, WitnessGFName: lease.witnessGFName,
                                WitnessNationality: lease.witnessNationality, WitnessSubcity: lease.witnessSubcity, WitnessWereda: lease.witnessWereda, 
                                WitnessHouseNumber: lease.witnessHouseNumber, WitnessPhonenumber: lease.witnessPhonenumber};
            

            Axios.post('http://localhost:4000/leaseinfo', leaseBasicData)
                .then((response) => {
                    alert(JSON.stringify(response.data));
                }).catch((err) => {
                    console.log(err);
                });
            
                Axios.post('http://localhost:4000/leaseinfo/landlord', landlordData)
                .then((response) => {
                    alert(JSON.stringify(response.data));
                }).catch((err) => {
                    console.log(err);
                });

                Axios.post('http://localhost:4000/leaseinfo/tenant', tenantData)
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
                    <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                        <Col>ዉል ሰጪ</Col>
                    </Row>
                    <Row className='bg-light p-2 mb-2 big m-2'>
                        <Row><Col className='text-center'>በኣዲስ ኣበባ ኣስተዳደር</Col></Row>
                        <Row><Col className='text-center'>በኣራዳ ክፍለ ከተማ መሬት ልማትና ማኔጅመንት</Col></Row>
                        <Row><Col className='text-center'>የመሬት ባንክና ማስተላለፍ ፅህፈት-ቤት</Col></Row>
                    </Row>

                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col} className="col-3">
                            <Form.Label>የዉል ቁጥር</Form.Label>
                            <Form.Control type="text" className="p-2" name="leaseNumber"
                                value={lease.leaseNumber || ""}
                                onChange={handleChange}
                                style={{ borderColor: lease.leaseNumber ? "gray" : "red" }} />
                        </Form.Group>
                        <Form.Group as={Col} className="col-3">
                            <Form.Label>የተፈረመበት ቀን</Form.Label>
                            <Form.Control type="text" className="p-2" name="signedDate"
                                value={lease.signedDate || ""}
                                onChange={handleChange}
                                style={{ borderColor: lease.signedDate ? "gray" : "red" }} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የዉል ዓይነት</Form.Label>
                            <select className='form-select form-select-sm p-2' name="leaseType"
                                value={lease.leaseType || ""}
                                onChange={handleChange}
                                style={{ borderColor: lease.leaseType ? "gray" : "red" }}>
                                <option value="" className='font-weight-bold'>የሊዝ ዓይነት የምረጡ</option>
                                {
                                    lease_types.map((lease_type) => (
                                        <option value={lease_type.id}>{lease_type.type}</option>
                                    ))
                                }
                            </select>
                        </Form.Group>
                    </Row>

                    {/*<ContactInfo data={ contactInfo }/>*/}
                    <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                        <Col>የዉል ሰጪ እማኝ</Col>
                    </Row>
                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col}>
                            <Form.Label>ስም</Form.Label>
                            <Form.Control type="text" className="" name="witnessName" value={lease.witnessName || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የኣባት ስም</Form.Label>
                            <Form.Control type="text" className="" name="witnessFName" value={lease.witnessFName || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የኣያት ስም</Form.Label>
                            <Form.Control type="text" className="" name="witnessGFName" value={lease.witnessGFName || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ዜግነት</Form.Label>
                            <Form.Control type="text" className="" name="witnessNationality" value={lease.witnessNationality || ""} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                        <Col>ኣድራሻ</Col>
                    </Row>
                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col}>
                            <Form.Label>ክፍለ ከተማ</Form.Label>
                            <Form.Control type="text" className="" name="witnessSubcity" value={lease.witnessSubcity || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ወረዳ</Form.Label>
                            <Form.Control type="text" className="" name="witnessWereda" value={lease.witnessWereda || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የቤት ቁጥር</Form.Label>
                            <Form.Control type="text" className="" name="witnessHouseNumber" value={lease.witnessHouseNumber || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ስልክ ቁጥር</Form.Label>
                            <Form.Control type="text" className="" name="witnessPhonenumber" value={lease.witnessPhonenumber || ""} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                </Row>

                {/*<LeaseRentalInfo />*/}
                <Row className='bg-primary text-white p-2 mt-2'>
                    <Col>የዉል ተቀባይ መረጃ</Col>
                </Row>
                <Row className='border p-2 justify-content-center '>

                    <Row className='bg-primary  opacity-50  text-white p-2 m-2'>
                        <Col>ዉል ተቀባይ</Col>
                    </Row>
                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col}>
                            <Form.Label>ስም</Form.Label>
                            <Form.Control type="text" className="" name="tenantName" 
                                value={lease.tenantName || ""} 
                                onChange={handleChange} 
                                style={{ borderColor: lease.tenantName ? "gray" : "red" }}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የኣባት ስም</Form.Label>
                            <Form.Control type="text" className="" name="tenantFName" 
                                value={lease.tenantFName || ""} 
                                onChange={handleChange} 
                                style={{ borderColor: lease.tenantFName ? "gray" : "red" }}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የኣያት ስም</Form.Label>
                            <Form.Control type="text" className="" name="tenantGFName" 
                                value={lease.tenantGFName || ""} 
                                onChange={handleChange} 
                                style={{ borderColor: lease.tenantGFName ? "gray" : "red" }}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ዜግነት</Form.Label>
                            <Form.Control type="text" className="" name="tenantNationality" value={lease.tenantNationality || ""} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                        <Col>ኣድራሻ</Col>
                    </Row>
                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col}>
                            <Form.Label>ክፍለ ከተማ</Form.Label>
                            <Form.Control type="text" className="" name="tenantSubcity" value={lease.tenantSubcity || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ወረዳ</Form.Label>
                            <Form.Control type="text" className="" name="tenantWereda" value={lease.tenantWereda || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የቤት ቁጥር</Form.Label>
                            <Form.Control type="text" className="" name="tenantHouseNumber" value={lease.tenantHouseNumber || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ስልክ ቁጥር</Form.Label>
                            <Form.Control type="text" className="" name="tenantPhonenumber" value={lease.tenantPhonenumber || ""} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                        <Col>የዉል ተቀባይ እማኝ</Col>
                    </Row>
                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col}>
                            <Form.Label>ስም</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessName" value={lease.tenantWitnessName || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የኣባት ስም</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessFName" value={lease.tenantWitnessFName || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የኣያት ስም</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessGFName" value={lease.tenantWitnessGFName || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ዜግነት</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessNationality" value={lease.tenantWitnessNationality || ""} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                        <Col>ኣድራሻ</Col>
                    </Row>
                    <Row className='bg-light p-2 m-2'>
                        <Form.Group as={Col}>
                            <Form.Label>ክፍለ ከተማ</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessSubcity" value={lease.tenantWitnessSubcity || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ወረዳ</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessWereda" value={lease.tenantWitnessWereda || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>የቤት ቁጥር</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessHouseNumber" value={lease.tenantWitnessHouseNumber || ""} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ስልክ ቁጥር</Form.Label>
                            <Form.Control type="text" className="" name="tenantWitnessPhonenumber" value={lease.tenantWitnessPhonenumber || ""} onChange={handleChange} />
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

export default LeaseServices;