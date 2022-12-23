import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

const Search = () => {
    const [search, setSearch] = useState({});
    const [tenants, setTenants] = useState([{}]);
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSearch((values) => ({...values, [name]: value}));
    }

    const handleSearch = () => {
        alert(JSON.stringify(tenants));
    }

    useEffect(() => {
        Axios.get('http://localhost:4000/tenant')
            .then((response) => {
                const result = response.data;
                setTenants(result.result);
            });
    }, [tenants]);
    
    return (
        <Container>
            <Row className='justify-content-center '>
                <InputGroup className='w-75 border-primary'>
                    <Form.Select className='w-25 border-primary shadow-none' 
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
            <Row>
                {
                    tenants.map((tenant) => 
                        <Col>{tenant.TenantName}</Col>
                    )
                }
            </Row>
        </Container>
    );
}

export default Search;