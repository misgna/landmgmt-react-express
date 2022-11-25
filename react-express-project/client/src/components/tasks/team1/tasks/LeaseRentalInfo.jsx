import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ContactInfo from './ContactInfo';

const LeaseRentalInfo = () => {
    const basicInfoRenterWitness = {
        'title': 'የዉል ተቀባይ እማኝ',
        'api': 'renterwitness'
    };

    const basicInfoRenter = {
        'title': 'ዉል ተቀባይ',
        'api': 'renter'
    }
    return (
        <>
            <Form className="container justify-content-center mb-4">
                <Row className='bg-primary text-white p-2'>
                    <Col>የውል ተቀባይ መረጃ</Col>
                </Row>
                <ContactInfo data={basicInfoRenter} />
                <ContactInfo data={basicInfoRenterWitness} />
            </Form>
        </>
    );
}

export default LeaseRentalInfo;