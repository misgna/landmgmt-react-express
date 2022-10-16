import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Alert from 'react-bootstrap/Alert';
import Select from 'react-select';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/fontawesome-svg-core";


const EmployeeRecord = () => {
    const [teams, setTeams] = useState([{}]);
    const [employee, setEmployee] = useState({});
    const [employees, setEmployees] = useState([{}]);
    const [search, setSearch] = useState({});
    const [message, setMessage] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleAdd = (event) => {
        alert(JSON.stringify(employee));
        Axios.post("http://localhost:4000/employee/", employee)
            .then((response) => {
                setMessage(response.data);
                setShowAlert(true);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    const handleEdit = (event) => {
        Axios.put(`http://localhost:4000/employee/`, {data:employee})
            .then((response) => {
                setMessage(response.data);
                setShowAlert(true);
                setEmployee({});
                setSearch([{}]);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleDelete = (event) => {
        alert(JSON.stringify(employee));
        Axios.delete(`http://localhost:4000/employee`, {data:employee})
            .then((response) => {
                setMessage(response.data);
                setShowAlert(true);
                setEmployee({});
                setSearch([{}]);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const createUserAccount = (event, emp) => {

        Axios.post(`http://localhost:4000/login/create`, {
            data:{
            "empId": emp.empId,
            "empPassword": "default",
            "status": "Pending"
        }})
            .then((response) => {
                const confirmition = response.data;
                alert(confirmition.message);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    const suspendUserAccount = (event) => {

    }
    const deleteUserAccount = (event) => {

    }
    const resetUserAccount = (event) => {

    }
    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setEmployee((values) => ({ ...values, [name]: value }));
    }


    useEffect(() => {
        Axios.get("http://localhost:4000/employee")
            .then((res) => {
                setEmployees(res.data);
            });
        setSearch();
    }, [employees]);

    useEffect(() => {
        Axios.get("http://localhost:4000/team")
            .then((res) => {
                setTeams(res.data);
            });
        setSearch();
    }, []);

    useEffect(() => {

    }, [search, employee, employees]);
    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col-6">
                    <Card className="mb-4">
                        <Card.Header closeButton style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}>
                            <Card.Title style={{ "color": "RGB(1, 57, 144" }} className='text-center'>የሰራተኞች መመዝገብያ ቅፅ</Card.Title>
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
                                <InputGroup className="mb-3 border-bottom pb-4 bg-light p-2" style={{ "border-color": "#C0C0C0" }}>
                                    <Select
                                        className='w-100'
                                        name="search"
                                        options={employees}
                                        value={search}
                                        onChange={(option) => setEmployee(option)}
                                        getOptionLabel={(option) => option.empName + ' ' + option.empFName + ' ' + option.empGFName}
                                        getOptionValue={(option) => option.empId}
                                    />
                                </InputGroup>
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ "color": "#2F4F4F" }}>የመታወቅያ ቁጥር</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="የመታወቅያ ቁጥር"
                                        style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}
                                        name="empId"
                                        value={employee.empId || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 bg-light p-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ "color": "#2F4F4F" }}>ስም</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="ስም"
                                        style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}
                                        name="empName"
                                        value={employee.empName || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ "color": "#2F4F4F" }}>የኣባት ስም</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="የኣባት ስም"
                                        style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}
                                        name="empFName"
                                        value={employee.empFName || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 bg-light p-2" controlId="exampleForm.ControlTextarea1" style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}>
                                    <Form.Label style={{ "color": "#2F4F4F" }}>የኣያት ስም</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="የኣያት ስም"
                                        style={{ "border-color": "#C0C0C0", 'border-radius': 0 }}
                                        name="empGFName"
                                        value={employee.empGFName || ""}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                
                                <InputGroup className="mb-3 border-bottom pb-4" style={{ "border-color": "#C0C0C0" }}>
                                    <Form.Label style={{ "color": "#2F4F4F" }}>የሚሰሩበት የቡድን ስም</Form.Label>
                                    <select className='w-100 p-2 bg-white text-dark' name="teamId" value={employee.teamId || ""} onChange={handleChange}>
                                        <option className="text-secondary">የቡድን ስም ይምረጡ</option>
                                        {
                                            teams.map((team) => (
                                                <option value={team.teamId} selected={employee.teamId === team.teamId? true : false}>{team.teamName}</option>
                                            ))
                                        }
                                    </select>
                                </InputGroup>
                            </Form>
                        </Card.Body>
                        <Card.Footer className='' style={{ "background-color": "#e8e8e8", 'border-color': "#C0C0C0" }}>
                            <Button variant="primary"
                                className='m-2'
                                onClick={() => {
                                    setEmployee({});
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
                        employees.map((emp) => (
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form.Group className="" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="w-100">የመታውቅያ ቁጥር: {emp.empId}</Form.Label>
                                        <Form.Label className="w-100">ስም: {emp.empName + ' ' + emp.empFName + ' ' + emp.empGFName}</Form.Label>
                                    </Form.Group>
                                </Card.Body>
                                <Card.Footer style={{ "padding": 0 }}>
                                    <Button variant="warning badge" className='m-2' onClick={() => setEmployee(emp)}>
                                        በመመዝገብያ ቅፅ ኣሳይ
                                    </Button>
                                    <Button variant="success badge" className='m-2' onClick={(event)=>createUserAccount(event, emp)}>
                                        መለያ ፍጠር
                                    </Button>
                                    <Button variant="success badge" className='m-2' onClick={(event)=>suspendUserAccount(event, emp)}>
                                        መለያ ኣቁም
                                    </Button>
                                    <Button variant="success badge" className='m-2' onClick={(event)=>deleteUserAccount(event, emp)}>
                                        መለያ ኣጥፋ
                                    </Button>
                                    <Button variant="success badge" className='m-2' onClick={(event)=>resetUserAccount(event, emp)}>
                                        መለያ ኣድስ
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

export default EmployeeRecord;