import React, { useState } from 'react';
import ComposeMail from './ComposeMail';
import DisplayMailContent from './DisplayMailContent';
import ShowMails from './ShowMails';
import SentMails from './showSentMails';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Mail = (props) => {
    const user = props.user;
    const team = props.team;
    const [messageOptions, setMessageOptions] = useState("messages");
    return (
            <Row className='p-2 w-100'>
                <Col className='w-25 float-start'>
                    <Row>
                        <Col>
                            <Button 
                                className='mb-2 w-25' 
                                style = {{borderRadius: 0}} 
                                onClick={()=>setMessageOptions("compose")}>
                                መልዕክት ፃፍ
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button 
                                className='mb-2 w-25'
                                style = {{borderRadius: 0}} 
                                onClick={()=>setMessageOptions("messages")}>
                                መልዕክቶች
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button 
                                className='mb-2 w-25' 
                                style = {{borderRadius: 0}} 
                                onClick={()=>setMessageOptions("sent")}>
                                    የተላኩ መልዕክቶች
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col className='w-75'>
                    {messageOptions === 'compose' ? <ComposeMail user={user} team={team}/> : null }
                    {messageOptions === 'messages' ? <ShowMails user={user} team={team}/> : null }
                    {messageOptions === 'sent' ? <SentMails user={user} team={team}/> : null }
                </Col>
               
            </Row>
    )
}

export default Mail;