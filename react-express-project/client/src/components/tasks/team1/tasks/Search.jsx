import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, Container, Row, Col, Badge, Modal, Table } from 'react-bootstrap';
import Axios from 'axios';
import lease_types from './constants';

const Search = () => {
    const [search, setSearch] = useState({});
    const [tenants, setTenants] = useState([]);
    const [leaseInfo, setLeaseInfo] = useState({});
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSearch((values) => ({ ...values, [name]: value }));
    }

    const handleInfoChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setLeaseInfo((values) => ({ ...values, [name]: value }));
    }

    const handleSearch = () => {
        if (['1', '2'].includes(search.filterBy)) {
            Axios.post("http://localhost:4000/search", search)
                .then((response) => {
                    const data = response.data;
                    setTenants(data.result);
                })

        } else {
            alert('Please select one of the filtering mechanims');
        }
    }
    const handleClose = () => {
        setShow(false);
    }
    const getLeaseInfo = async (data) => {
        const response = await Axios.post('http://localhost:4000/leaseinfo/search', data);
        const res = await response.data;
        setLeaseInfo(res.result[0]);
    }
    // const getTenantInfo = async (data) => {
    //     const response = await Axios.post('http://localhost:4000/tenant/search', data);
    //     const res = await response.data;
    //     setTenantInfo(res.result[0]);
    // }
    // const getLandlordInfo = async (data) => {
    //     const response = await Axios.post('http://localhost:4000/landlord/search', data);
    //     const res = await response.data;
    //     setLandlordInfo(res.result);
    // }
    const handleView = (leaseNumber) => {
        const data = { LeaseNumber: leaseNumber }

        getLeaseInfo(data);
        //getTenantInfo(data);
        //getLandlordInfo(data);
        setShow(true);
        setActive(true);
    }

    const handleEdit = (leaseNumber) => {
        const data = { LeaseNumber: leaseNumber }
       
        Axios.put(`http://localhost:4000/leaseinfo`, leaseInfo)
            .then((data) => {
                alert(JSON.stringify(data));
            });

        setLeaseInfo({});
        setTenants([]);

    }

    const handleDelete = (leaseNumber) => {
        const data = { LeaseNumber: leaseNumber }
       
        Axios.delete(`http://localhost:4000/leaseinfo`, {data})
            .then((data) => {
                alert(JSON.stringify(data));
            });

        setLeaseInfo({});
        setTenants([]);
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <InputGroup className='w-75 border-primary'>
                    <Form.Select className='w-25 border-primary bg-primary text-white shadow-none'
                        name="filterBy" value={search.filterBy || ''}
                        onChange={handleChange}>
                        <option selected>ምረጥ</option>
                        <option value='1'>የውል ቁጥር</option>
                        <option value='2'>ስም</option>
                    </Form.Select>
                    <Form.Control
                        type="text"
                        className='w-50 border-primary shadow-none'
                        name='keywords'
                        value={search.keywords || ''}
                        onChange={handleChange}
                    />
                    <Button
                        className='w-25 border-primary shadow-none'
                        onClick={handleSearch}>
                        ፈልግ
                    </Button>
                </InputGroup>
            </Row>
            <Row className='justify-content-center mt-2'>
                {
                    tenants.map((tenant) =>
                        <Row className="w-75 mt-2 bg-light p-2">
                            <Col className='col-2'>{tenant.LeaseNumber}</Col>
                            <Col>{tenant.TenantName + ' ' + tenant.TenantFName + ' ' + tenant.TenantGFName}</Col>
                            <Col>
                                <Badge
                                    bg="primary"
                                    className='w-25 mx-2 btn'
                                    onClick={() => handleView(tenant.LeaseNumber)}>
                                    እይ
                                </Badge>
                                {/* <Badge
                                    bg="warning"
                                    className='w-25 mx-2 btn'
                                    onClick={() => handleEdit(tenant.LeaseNumber)}>
                                    አስተካክል
                                </Badge> */}
                                <Badge
                                    bg="danger"
                                    className='w-25 mx-2 btn'
                                    onClick={() => handleDelete(tenant.LeaseNumber)}>
                                    አስወግድ
                                </Badge>
                            </Col>
                        </Row>
                    )
                }
            </Row>
            <Row className="container justify-content-center">
                {/*
                    active && (*/
                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header>
                            <Modal.Title>ሙሉ የሊዝ መረጃ</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <Row className='border bg-primary text-white p-2 mt-2'>
                                <Col>የሊዝ መረጃ</Col>
                            </Row>
                            <Row className=' bg-light p-2 m-2'>
                                <Form.Group as={Col} className="col-3">
                                    <Form.Label>የዉል ቁጥር</Form.Label>
                                    <Form.Control type="text" className="p-2" name="LeaseNumber"
                                        value={leaseInfo.LeaseNumber || ""}
                                        onChange={handleInfoChange}
                                        style={{ borderColor: leaseInfo.LeaseNumber ? "gray" : "red" }} disabled/>
                                </Form.Group>
                                <Form.Group as={Col} className="col-3">
                                    <Form.Label>የተፈረመበት ቀን</Form.Label>
                                    <Form.Control type="text" className="p-2" name="SignedDate"
                                        value={leaseInfo.SignedDate || ""}
                                        onChange={handleInfoChange}
                                        style={{ borderColor: leaseInfo.SignedDate ? "gray" : "red" }} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>የዉል ዓይነት</Form.Label>
                                    <select className='form-select form-select-sm p-2' name="LeaseType"
                                        value={leaseInfo.LeaseType || ""}
                                        onChange={handleInfoChange}
                                        style={{ borderColor: leaseInfo.LeaseType ? "gray" : "red" }}>
                                        <option value="" className='font-weight-bold'>የሊዝ ዓይነት የምረጡ</option>
                                        {
                                            lease_types.map((lease_type) => (
                                                <option value={lease_type.id}>{lease_type.type}</option>
                                            ))
                                        }
                                    </select>
                                </Form.Group>
                            </Row>
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
                                        <Form.Control type="text" className="" name="TenantName"
                                            value={leaseInfo.TenantName || ""}
                                            onChange={handleInfoChange}
                                             />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>የኣባት ስም</Form.Label>
                                        <Form.Control type="text" className="" name="TenantFName"
                                            value={leaseInfo.TenantFName || ""}
                                            onChange={handleInfoChange}
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>የኣያት ስም</Form.Label>
                                        <Form.Control type="text" className="" name="TenantGFName"
                                            value={leaseInfo.TenantGFName || ""}
                                            onChange={handleInfoChange}
                                             />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>ዜግነት</Form.Label>
                                        <Form.Control type="text" className="" name="TenantNationality" 
                                        value={leaseInfo.TenantNationality || ""} onChange={handleInfoChange} />
                                    </Form.Group>
                                </Row>
                                <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                                    <Col>ኣድራሻ</Col>
                                </Row>
                                <Row className='bg-light p-2 m-2'>
                                    <Form.Group as={Col}>
                                        <Form.Label>ክፍለ ከተማ</Form.Label>
                                        <Form.Control type="text" className="" name="TenantSubcity" 
                                        value={leaseInfo.TenantSubcity || ""} onChange={handleInfoChange} />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>ወረዳ</Form.Label>
                                        <Form.Control type="text" className="" name="TenantWereda" 
                                        value={leaseInfo.TenantWereda || ""} onChange={handleInfoChange} />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>የቤት ቁጥር</Form.Label>
                                        <Form.Control type="text" className="" name="TenantHouseNumber" 
                                        value={leaseInfo.TenantHouseNumber || ""} onChange={handleInfoChange} />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>ስልክ ቁጥር</Form.Label>
                                        <Form.Control type="text" className="" name="TenantPhonenumber" 
                                        value={leaseInfo.TenantPhonenumber || ""} onChange={handleInfoChange} />
                                    </Form.Group>
                                </Row>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button 
                                onClick={handleEdit}
                                className='btn-warning w-25'>
                                አስተካክል
                            </Button>
                            <Button
                                className='btn-danger w-25'
                                onClick={handleClose}>
                                ዝጋ
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    /*)*/}
            </Row>
        </Container>
    );
}

export default Search;