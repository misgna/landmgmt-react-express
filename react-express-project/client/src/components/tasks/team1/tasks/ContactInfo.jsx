import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const ContactInfo = (props) => {
    const basicInfo = props.data;
    return (
        <>  
            
            <Form border="primary" className="container justify-content-center mt-4 mb-4 border" >
                <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                    <Col>{basicInfo.title}</Col>
                </Row>
                <Row className='bg-light p-2 m-2'>
                    <Form.Group as={Col}>
                        <Form.Label>ስም</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>የኣባት ስም</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>የኣያት ስም</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>ዜግነት</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                </Row>
                <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                    <Col>ኣድራሻ</Col>
                </Row>
                <Row className='bg-light p-2 m-2'>
                    <Form.Group as={Col}>
                        <Form.Label>ክፍለ ከተማ</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>ወረዳ</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>የቤት ቁጥር</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>ስልክ ቁጥር</Form.Label>
                        <Form.Control type="text" className="" name="" />
                    </Form.Group>
                </Row>
            </Form>
        </>
    )
}

export default ContactInfo;