import React, { useState } from 'react';
import {Card, InputGroup, Form, Button} from 'react-bootstrap';
import Axios from 'axios';

const ComposeMail = (props) => {
    const user = props.user;
    const team = props.team;
    const [mail, setMail] = useState({});
    const handleSend = () => {
        mail['sender'] = user.empId;
        mail['status'] = 'active';
        
        Axios.post('http://localhost:4000/mail', mail)
            .then((response) => {
                alert(JSON.stringify(response.data));
            })
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setMail(values => ({ ...values, [name]: value }));
    }

    return (
        <>
            <Card className='w-100'>
                <Card.Header>ኣዲስ መልዕክት</Card.Header>
                <Card.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">ለ</InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="receiver"
                          value={mail.receiver || ""}
                          onChange={handleChange}
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">ጉዳዩ</InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={mail.subject || ""}
                          onChange={handleChange}
                        />
                    </InputGroup>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>መልዕክት</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={10} 
                            name="message"
                            value={mail.message || ""}
                            onChange = {handleChange}/>
                    </Form.Group>
                </Card.Body>
                <Card.Footer>
                    <Button
                        className='w-25 m-2'
                        onClick={() => setMail({})}>
                            ኣፅዳ
                    </Button>
                    <Button 
                        onClick = {handleSend}
                        className='w-25 m-2'>
                            ላክ
                    </Button>
                </Card.Footer>
            </Card>
        
        </>
    )
}

export default ComposeMail;