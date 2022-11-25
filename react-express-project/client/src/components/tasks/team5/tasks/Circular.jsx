import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Circular = () => {
    const handleAdd = () => {

    }
    const handleClear = () => {

    }
    return (
        <Form className="container justify-content-center mb-4">
            <Form.Group className="mb-3 col-6 bg-light p-2" as = {Col}>
                <Form.Label>የሰርኩላር ቁጥር</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="የሰርኩላር ቁጥር" />
            </Form.Group>
            <Form.Group className="mb-3 col-6 bg-light p-2" as = {Col}>
                <Form.Label>የሰርኩላር ቀን</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="የሰርኩላር ቀን" />
            </Form.Group>
            <Form.Group className="mb-3 col-6 bg-light p-2" as = {Col}>
                <Form.Label>ሰርኩላሩ ተግባራዊ የሚሆንበት ቀን</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="ሰርኩላሩ ተግባራዊ የሚሆንበት ቀን" />

            </Form.Group>
            <Form.Group className="mb-3 col-6 bg-light p-2" as = {Col}>
                <Form.Label>የሰርኩላሩ ርዕስ</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="የሰርኩላሩ ርዕስ" />
            </Form.Group>
            <Form.Group className="mb-3 col-6 bg-light p-2" as = {Col}>
                <Form.Label>የሰርኩላሩ ጠቅላላ መልዕክት</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="የሰርኩላሩ ጠቅላላ መልዕክት"
                    style={{ height: '100px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3 col-6 bg-light p-2" as = {Col}>
                <Form.Label>የሰርኩላሩ ስካን ኮፒ</Form.Label>
                <Form.Control 
                    type="file" 
                    placeholder="የሰርኩላሩ ጠቅላላ መልዕክት" />
            </Form.Group>
            <Row className='text-center mt-3 mb-3 border-bottom pb-2 pt-2 col-6' as={Col}>
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
        </Form>
    )
}

export default Circular;