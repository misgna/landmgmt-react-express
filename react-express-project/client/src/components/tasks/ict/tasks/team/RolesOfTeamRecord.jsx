import React from "react";
import { Button, Card, Form, InputGroup, Alert } from "react-bootstrap";
import Axios from 'axios';
import { useState, useEffect } from "react";

const RolesOfTeamRecord = () => {
    const [numRoles, setNumRoles] = useState(1);
    const [message, setMessage] = useState({});
    const [teamRole, setTeamRole] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [teamRoles, setTeamRoles] = useState([{}]);
    const [teams, setTeams] = useState([{}]);

    const handleAdd = () => {
        if (teamRole.teamRole) {
            const roles = [];
            roles.push(teamRole);
        Axios.post("http://localhost:4000/teamrole", roles)
            .then((res) => {
                setMessage(res.data);
                setShowAlert(true);
            });
        } else {
        setMessage({message: "የስራ ድርሻ ኣላስገቡም!"});
        setShowAlert(true);
    }
    }
    const handleEdit = () => {
        Axios.put(`http://localhost:4000/teamRole/${teamRole.teamId}/${teamRole.prevTeamRole}`, teamRole)
            .then((res) => {
                setMessage(res.data);
                setShowAlert(true);
                setTeamRole({});
            })
    }
    const handleDelete = () => {
        Axios.delete(`http://localhost:4000/teamRole/${teamRole.teamId}/${teamRole.teamRole}`)
            .then((res) => {
                setMessage(res.data);
                setShowAlert(true);
                setTeamRole({});
            })
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTeamRole((values) => ({ ...values, [name]: value }));
    }
    const handleClear = () => {
        setMessage({});
        setShowAlert(false);
        setTeamRole({});
    }
    const handleAddMore = () => {
        setNumRoles(numRoles + 1);
    }
    const handleRemoveOne = () => {
        setNumRoles(numRoles - 1);
    }

    useEffect(() => {
        Axios.get("http://localhost:4000/team").
            then((res) => {
                setTeams(res.data);
            })
    }, [teams]);

    useEffect(() => {
        Axios.get("http://localhost:4000/teamrole").
            then((res) => {
                setTeamRoles(res.data);
            })
    });

    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-6">
                    <Card className="mb-4">
                        <Card.Header closeButton style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}>
                            <Card.Title style={{ "color": "RGB(1, 57, 144" }} className='text-center'>የስራ ድርሻዎች መመዝገብያ ቅፅ</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {
                                showAlert && (
                                    <Alert variant={message.status === 'success' ? 'success' : 'danger'} onClose={() => setShowAlert(false)} dismissible>
                                        <Alert.Heading className="text-center">{message.status}</Alert.Heading>
                                        <p className='text-center'>
                                            {message.message}
                                        </p>
                                    </Alert>
                                )
                            }
                            <Form>
                                <InputGroup className="mb-3 border-bottom pb-4" style={{ "border-color": "#C0C0C0" }}>
                                    <Form.Select name="teamId" 
                                        value={teamRole.teamId || ""}
                                        onChange={handleChange}
                                        >
                                        {
                                            teams.map((team) => (
                                                <option value={team.teamId}>{team.teamName}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </InputGroup>
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ "color": "#2F4F4F" }}>
                                        የስራ ድርሻ
                                    </Form.Label>
                                 
                                
                                            <Form.Control
                                                type="text"
                                                placeholder="የስራ ድርሻ"
                                                style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}
                                                className="mb-2"
                                                name="teamRole"
                                                value={teamRole.teamRole || ""}
                                                onChange={handleChange}
                                            />
                                     
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer className='' style={{ "background-color": "#e8e8e8", 'border-color': "#C0C0C0" }}>
                            <Button variant="primary"
                                className='m-2'
                                onClick={handleClear}>
                                ኣፅዳ
                            </Button>
                            <Button variant="success" className='m-2' onClick={handleAdd}>
                                ጨምር
                            </Button>
                            <Button variant="warning" className='m-2 text-white' onClick={handleEdit}>
                                ኣስተካክል
                            </Button>
                            <Button variant="danger" className='m-2' onClick={handleDelete}>
                                ኣስወግድ
                            </Button>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="col-6 small">
                    {
                        teamRoles.map((t) => (
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form.Group className="" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="w-100">{t.teamId}</Form.Label>
                                        <Form.Label className="w-100">{t.teamRole}</Form.Label>
                                    </Form.Group>
                                </Card.Body>
                                <Card.Footer style={{ "padding": 0 }}>
                                    <Button variant="warning badge" className='m-2' onClick={() => setTeamRole({teamId: t.teamId, teamRole: t.teamRole, prevTeamRole: t.teamRole})}>
                                        በመመዝገብያ ቅፅ ኣሳይ
                                    </Button>
                                </Card.Footer>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default RolesOfTeamRecord;