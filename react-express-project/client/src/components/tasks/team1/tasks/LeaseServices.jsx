import React from 'react';
import LeaseInfo from './LeaseInfo';
import LeaseRentalInfo from './LeaseRentalInfo';
import { Button, Row, Col } from 'react-bootstrap';

const LeaseServices = () => {

    return (
        <>
            <LeaseInfo />
            <LeaseRentalInfo />
            <Row className='text-center mt-3 mb-3 border-bottom pb-2 pt-2'>
                <Col className='text-center'>
                    <Button className='btn w-50 btn-success'>
                        መዝግብ
                    </Button>
                </Col>
                <Col className='text-center'>
                    <Button className='btn w-50 btn-danger'>
                        ኣፅዳ
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default LeaseServices;