import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, Container, Row, Col, Badge, Modal } from 'react-bootstrap';
import Axios from 'axios';
import lease_types from './constants';

const Search = () => {
    const [search, setSearch] = useState({});
    const [tenants, setTenants] = useState([]);
    const [tenantInfo, setTenantInfo] = useState([{}]);
    const [leaseInfo, setLeaseInfo] = useState([{}]);
    const [landlordInfo, setLandlordInfo] = useState([{}]);
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSearch((values) => ({ ...values, [name]: value }));
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
        setLeaseInfo(res.result);
    }
    const getTenantInfo = async (data) => {
        const response = await Axios.post('http://localhost:4000/tenant/search', data);
        const res = await response.data;
        setTenantInfo(res.result);
    }
    const getLandlordInfo = async (data) => {
        const response = await Axios.post('http://localhost:4000/landlord/search', data);
        const res = await response.data;
        setLandlordInfo(res.result);
    }
    const handleView = (leaseNumber) => {
        const data = { LeaseNumber: leaseNumber }

        getLeaseInfo(data);
        getTenantInfo(data);
        getLandlordInfo(data);
        setShow(true);
        setActive(true);
    }

    const handleEdit = (leaseNumber) => {

    }

    const handleDelete = (leaseNumber) => {

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
                                <Badge
                                    bg="warning"
                                    className='w-25 mx-2 btn'
                                    onClick={() => handleEdit(tenant.LeaseNumber)}>
                                    አስተካክል
                                </Badge>
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
                {
                    active && (
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>ሙሉ የሊዝ መረጃ</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Row >
                                    <Col>የሊዝ ቁጥር</Col><Col>{leaseInfo[0].LeaseNumber}</Col>
                                </Row>
                                <Row >
                                    <Col>የሊዝ ዓይነት</Col><Col>
                                        {
                                            lease_types.map((lt => (
                                                lt.id === leaseInfo[0].LeaseType ? lt.type : null
                                            )))
                                        }
                                    </Col>
                                </Row>
                                <Row >
                                    <Col>የተፈረመበት ቀን</Col><Col>{leaseInfo[0].LeaseSingedDate}</Col>
                                </Row>
                                <Row >
                                    <Col>ዉል ተቀባይ</Col><Col>{tenantInfo[0].TenantName + ' ' + tenantInfo[0].TenantFName + ' ' + tenantInfo[0].TenantGFName}</Col>
                                </Row>
                                <Row >
                                    <Col>ኣድራሻ</Col>
                                    <Col>
                                        <Row><Col>ክ/ከተማ</Col><Col>{tenantInfo[0].TenantSubcity}</Col></Row>
                                        <Row><Col>ወረዳ</Col><Col>{tenantInfo[0].TenantWereda}</Col></Row>
                                        <Row><Col>የቤት ቁጥር</Col><Col>{tenantInfo[0].TenantHouseNumber}</Col></Row>
                                        <Row><Col>ስ/ቁጥር</Col><Col>{tenantInfo[0].TenantPhonenumber}</Col></Row>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer></Modal.Footer>
                        </Modal>
                    )}
            </Row>
        </Container>
    );
}

export default Search;