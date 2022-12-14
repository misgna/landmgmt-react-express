import React, { useState, useEffect } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import Axios from 'axios';

const HeirInfo = () => {
    const ParentHouseNumber = JSON.parse(localStorage.getItem("houseNumber"));
    const [addMore, setAddMore] = useState(1);
    const [heirInfo, setHeirInfo] = useState({});
    const [heirInfos, setHeirInfos] = useState([{}]);
    const [photo, setPhoto] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setHeirInfo(values => ({ ...values, [name]: value }));
    }
    const handleAdd = () => {
        const formData = new FormData();
        formData.append("ParentHouseNumber", ParentHouseNumber);
        formData.append("HeirName", heirInfo.Name);
        formData.append("HeirFName", heirInfo.FName);
        formData.append("HeirGFName", heirInfo.GFName);
        formData.append("RA_Subcity", heirInfo.RA_Subcity);
        formData.append("RA_Wereda", heirInfo.RA_Wereda);
        formData.append("RA_Block", heirInfo.RA_Block);
        formData.append("RA_HouseNumber", heirInfo.RA_HouseNumber);
        formData.append("Photo", photo.data);

        Axios.post("http://localhost:4000/heirinfo", formData)
            .then((res) => {
                const response = res.data;
                alert(JSON.stringify(response));
            })
    }
    const handleClear = () => {
        setHeirInfo({});
    }
    const handlePhoto = (event) => {
        setPhoto(
            {
                'preview': URL.createObjectURL(event.target.files[0]),
                'data': event.target.files[0]
            }
        );
    }
    const handleAddMore = () => { 
        setAddMore(addMore + 1);
    }
    const handleRemoveOne = () => { 
        setAddMore(addMore - 1);
    }

    useEffect(() => {
        Axios.get(`http://localhost:4000/heirinfo/${ParentHouseNumber}`)
            .then((res) => {
                const response = res.data.result;
                setHeirInfos(response);
            });
    }, [heirInfos]);
    return (
        <div className="container justify-content-center mb-4 border border-light">
            { /*ParentHouseNumber !== "" && (*/
                <>
            <form className="w-100" enctype='multipart/form-data'>

                {/*<InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">????????? ?????? (???????????? ????????? ?????????)</InputGroup.Text>
                    <Form.Control
                        type="text"
                        className="col-6"
                        name="ParentHouseNumber"
                        value={ParentHouseNumber}
                        disabled />
                    </InputGroup>
                */}
                <Row className='bg-primary text-white p-2'>
                        <Col>
                            ??????????????? ?????????
                            <span 
                                className='float-end btn text-white'
                                onClick={handleAddMore}>
                                    +
                            </span>
                            { addMore > 1 && (
                                <span 
                                className='float-end btn text-white'
                                onClick={handleRemoveOne}>
                                    -
                                </span>
                            )
                            }
                        </Col> 
                </Row>
                { Array.apply(1, Array(addMore)).map(() => (

                
                    <>
                <Row className="mb-3 border-bottom border-top bg-light pb-2 ">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>??????</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="???????????? ??????"
                            name="Name"
                            onChange={handleChange}
                            value={heirInfo.Name || ""} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>???????????? ??????</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="???????????? ??????"
                            name="FName"
                            onChange={handleChange}
                            value={heirInfo.FName || ""} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>???????????? ??????</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="???????????? ??????"
                            name="GFName"
                            onChange={handleChange}
                            value={heirInfo.GFName || ""} />
                    </Form.Group>
                </Row>
                <Row className="mb-3 border-bottom pb-2 bg-light">
                    <Form.Label>??????????????? ????????????</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Label>????????? ?????????</Form.Label>
                        <Form.Select
                            defaultValue="Choose..."
                            name="RA_Subcity"
                            onChange={handleChange}
                            value={heirInfo.RA_Subcity || ""}
                        >
                            <option>?????????...</option>
                            <option value="????????? ?????????">????????? ?????????</option>
                            <option value="????????? ?????????">????????? ?????????</option>
                            <option value="?????????">?????????</option>
                            <option value="??????">??????</option>
                            <option value="?????????">?????????</option>
                            <option value="????????????">????????????</option>
                            <option value="????????? ????????????">????????? ????????????</option>
                            <option value="?????????">?????????</option>
                            <option value="????????? ????????? ?????????">????????? ????????? ?????????</option>
                            <option value="??????">??????</option>
                            <option value="?????? ??????">?????? ??????</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>?????????</Form.Label>
                        <Form.Control
                            type="text"
                            name="RA_Wereda"
                            placeholder="??????????????? ????????????: ?????????"
                            onChange={handleChange}
                            value={heirInfo.RA_Wereda || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>?????????</Form.Label>
                        <Form.Control
                            type="text"
                            name="RA_Block"
                            placeholder="??????????????? ????????????: ?????????"
                            onChange={handleChange}
                            value={heirInfo.RA_Block || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>????????? ?????????</Form.Label>
                        <Form.Control
                            type='text'
                            name='RA_HouseNumber'
                            placeholder="??????????????? ????????????: ????????? ?????????"
                            onChange={handleChange}
                            value={heirInfo.RA_HouseNumber || ""} />
                    </Form.Group>
                </Row>
                <Row className='mb-3 border-bottom pb-2 bg-light'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>??????</Form.Label>
                        <Form.Control
                            type="file"
                            name="photo"
                            onChange={handlePhoto} />
                    </Form.Group>
                </Row>
                </>
                ))
                }
                <Row className='text-center mt-3 bg-light mb-3 border-bottom pb-2 pt-2'>
                    {/*<Col className='text-center'>
                        <Button className='btn w-50 btn-success' onClick={handleAdd}>
                            ????????????
                        </Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-danger' onClick={handleClear}>
                            ?????????
                        </Button>
            </Col>*/}
                </Row>
                
            </form>
        {/*
            <Row>
                <Col className='large'>
                    <h3 className='text-primary border-bottom'>??????????????? ????????????</h3>
                </Col>
        </Row>*/}
            </>
            /*)*/}
            {/*
                heirInfos.map((value) => (
                    <Row className='border-bottom col-6 text-primary'>
                        <Col>
                            <img 
                                src={`http://localhost:4000/images/${value.HeirPhoto}`} 
                                width="100px"
                                height="100px" />
                        </Col>
                        <Col>
                            
                            <Row className='text-secondary small'><Col>?????? ??????</Col></Row>
                            <Row>
                                <Col>{value.HeirName} {value.HeirFName} {value.HeirGFName}</Col>
                            </Row>
                            <Row className='text-secondary small'><Col>????????????</Col></Row>
                            <Row>
                                <Row><Col className='text-secondary'>???/?????????:</Col><Col> {value.RA_Subcity}</Col></Row>
                                <Row><Col className='text-secondary'>?????????: </Col><Col>{value.RA_Wereda}</Col></Row>
                                <Row><Col className='text-secondary'>?????????: </Col><Col>{value.RA_Block}</Col></Row>
                                <Row><Col className='text-secondary'>????????? ?????????: </Col><Col>{value.RA_HouseNumber}</Col></Row>
                            </Row>
                        </Col>
                    </Row>
                ))
                */}
            
        </div>
    );
}

export default HeirInfo;