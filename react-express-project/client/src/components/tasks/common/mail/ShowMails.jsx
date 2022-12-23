import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Row, Col, Accordion } from 'react-bootstrap';
import DisplayMailContent from './DisplayMailContent';

const ShowMails = (props) => {
    const user = props.user;
    const team = props.team;
    const [messages, setMessages] = useState([{}]);
    const receiver = user.empId;

    useEffect(() => {
        Axios.get(`http://localhost:4000/mail/received/${receiver}`)
            .then((response) => {
                const res = response.data;
                setMessages(res.result);
            })
    }, [messages]);


    return (
        <>
            {
                messages.map((message) => (
                    <Accordion className='w-100'>
                        <Accordion.Item eventKey="">
                            <Accordion.Header>
                                <Row>
                                    <Col className='me-auto'>{message.sender}</Col>
                                    <Col className=''>{message.subject}</Col>
                                    <Col className='ms-auto'>{message.created_at}</Col>
                                </Row>
                            </Accordion.Header>
                            <Accordion.Body>
                                {message.message}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))
            }
        </>
    )
}

export default ShowMails;