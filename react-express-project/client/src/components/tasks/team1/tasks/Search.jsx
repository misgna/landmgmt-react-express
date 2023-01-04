import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, Container, Row, Col, Badge } from 'react-bootstrap';
import SearchModal from './searchresults/SearchModal';
import Axios from 'axios';

const Search = () => {
    const [search, setSearch] = useState({});
    const [tenants, setTenants] = useState([]);
    const [tenantInfo, setTenantInfo] = useState([{}]);
    const [leaseInfo, setLeaseInfo] = useState([{}]);
    const [landlordInfo, setLandlordInfo] = useState([{}]);
    const [loadModal, setLoadModal] = useState(false);
    const [lease, setLease] = useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSearch((values) => ({...values, [name]: value}));
    }

    const handleSearch = () => {
        if (['1', '2'].includes(search.filterBy)) {
           Axios.post("http://localhost:4000/search", search)
            .then((response) => {
                const data = response.data;
                setTenants(data.result);
                setTenantInfo(data.result);
            })

        } else {
           alert('Please select one of the filtering mechanims');
        }
    }

    const handleView = (leaseNumber) => {
        const endpoints = [
            'http://localhost:4000/leaseinfo/search',
            'http://localhost:4000/landlord/search'
        ];
        const data = {LeaseNumber: leaseNumber}

        Axios.all(endpoints.map((endpoint) => Axios.post(endpoint, data)))
            .then(Axios.spread(({data: leaseinfo}, {data: landlord}) => {
                setLeaseInfo(leaseinfo.result);
                setLandlordInfo(landlord.result);
                setLease({
                    leaseInfo: leaseinfo.result,
                    landlordInfo: landlord.result,
                    tenantInfo: tenantInfo
                })
            }));
           
            alert(JSON.stringify(leaseInfo));
            setLoadModal(true);
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
                        name = "filterBy" value={search.filterBy || ''} 
                        onChange = {handleChange}>
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
                    <Row className = "w-75 mt-2 bg-light p-2">
                        <Col className='col-2'>{tenant.LeaseNumber}</Col>
                        <Col>{tenant.TenantName + ' ' + tenant.TenantFName + ' ' + tenant.TenantGFName}</Col>
                        <Col>
                            <Badge 
                                bg="primary"   
                                className='w-25 mx-2 btn'
                                onClick={()=>handleView(tenant.LeaseNumber)}>
                                    እይ
                            </Badge>
                            <Badge 
                                bg="warning" 
                                className='w-25 mx-2 btn'
                                onClick={()=>handleEdit(tenant.LeaseNumber)}>
                                    አስተካክል
                            </Badge>
                            <Badge 
                                bg="danger" 
                                className='w-25 mx-2 btn'
                                onClick={()=>handleDelete(tenant.LeaseNumber)}>
                                    አስወግድ
                            </Badge>
                        </Col>
                    </Row>
                    )
                }
            </Row>
            { 
                loadModal ? <SearchModal lease={lease}/> : null
            }
            
        </Container>
    );
}

export default Search;