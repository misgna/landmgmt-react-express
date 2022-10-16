import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/fontawesome-svg-core";
import Axios from 'axios';
import { useState, useEffect } from "react";
import Select from 'react-select';
import Alert from 'react-bootstrap/Alert';

const TeamRecord = () => {
    const [team, setTeam] = useState({});
    const [teams, setTeams] = useState([{}]);
    const [search, setSearch] = useState({});
    const [message, setMessage] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleAdd = (event) => {
        Axios.post("http://localhost:4000/team/", team)
            .then((response) => {
                setMessage(response.data);
                setShowAlert(true);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    const handleEdit = (event) => {
        Axios.put(`http://localhost:4000/team/${team.teamId}`, team)
            .then((response) => {
                setMessage(response.data);
                setShowAlert(true);
                setTeam({});
                setSearch([{}]);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleDelete = (event) => {
        Axios.delete(`http://localhost:4000/team/${team.teamId}`)
            .then((response) => {
                setMessage(response.data);
                setShowAlert(true);
                setTeam({});
                setSearch([{}]);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setTeam((values) => ({ ...values, [name]: value }));
    }
    useEffect(() => {
        Axios.get("http://localhost:4000/team")
            .then((res) => {
                setTeams(res.data);
            });
        setSearch();
    }, [teams]);

    useEffect(() => {

    }, [search, teams]);

    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-6">
                    <Card className="mb-4">
                        <Card.Header closeButton style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}>
                            <Card.Title style={{ "color": "RGB(1, 57, 144" }} className='text-center'>የቡድን መመዝገብያ ቅፅ</Card.Title>
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
                                    <Select
                                        className='w-100'
                                        name="search"
                                        options={teams}
                                        value={search}
                                        onChange={(option) => setTeam(option)}
                                        getOptionLabel={(option) => option.teamName}
                                        getOptionValue={(option) => option.teamId}
                                    />
                                </InputGroup>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ "color": "#2F4F4F" }}>የቡድን ኮድ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="የቡድን ኮድ"
                                        style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}
                                        name="teamId"
                                        value={team.teamId || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ "color": "#2F4F4F" }}>የቡድን ስም</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="የቡድን ስም"
                                        style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}
                                        name="teamName"
                                        value={team.teamName || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer className='' style={{ "background-color": "#e8e8e8", 'border-color': "#C0C0C0" }}>
                            <Button variant="primary"
                                className='m-2'
                                onClick={() => {
                                    setTeam({});
                                    setMessage({});
                                    setShowAlert(false);
                                    setSearch({});
                                }}>
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
                        teams.map((t) => (
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form.Group className="" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="w-100">የቡድን ኮድ: {t.teamId}</Form.Label>
                                        <Form.Label className="w-100">የቡድን ስም: {t.teamName}</Form.Label>
                                    </Form.Group>
                                </Card.Body>
                                <Card.Footer style={{ "padding": 0 }}>
                                    <Button variant="warning badge" className='m-2' onClick={() => setTeam({ teamId: t.teamId, teamName: t.teamName })}>
                                        በመመዝገብያ ቅፅ ኣሳይ
                                    </Button>
                                    <Button variant="success badge" className='m-2' onClick={() => setTeam({ teamId: t.teamId, teamName: t.teamName })}>
                                        የስራ ድርሻዎች ጨምር
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

export default TeamRecord;