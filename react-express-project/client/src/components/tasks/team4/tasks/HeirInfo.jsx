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
                    <InputGroup.Text id="basic-addon1">ወራሽ ካለ (የወላጅ የቤት ቁጥር)</InputGroup.Text>
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
                            የወራሾች መረጃ
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
                        <Form.Label>ስም</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="የወራሽ ስም"
                            name="Name"
                            onChange={handleChange}
                            value={heirInfo.Name || ""} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>የኣባት ስም</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="የኣባት ስም"
                            name="FName"
                            onChange={handleChange}
                            value={heirInfo.FName || ""} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>የኣያት ስም</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="የኣያት ስም"
                            name="GFName"
                            onChange={handleChange}
                            value={heirInfo.GFName || ""} />
                    </Form.Group>
                </Row>
                <Row className="mb-3 border-bottom pb-2 bg-light">
                    <Form.Label>የመኖርያ ኣድራሻ</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Label>ክፍለ ከተማ</Form.Label>
                        <Form.Select
                            defaultValue="Choose..."
                            name="RA_Subcity"
                            onChange={handleChange}
                            value={heirInfo.RA_Subcity || ""}
                        >
                            <option>ምረጥ...</option>
                            <option value="ኣዲስ ከተማ">ኣዲስ ከተማ</option>
                            <option value="ኣቃቂ ቃሊቲ">ኣቃቂ ቃሊቲ</option>
                            <option value="ኣራዳ">ኣራዳ</option>
                            <option value="ቦሌ">ቦሌ</option>
                            <option value="ጉለሌ">ጉለሌ</option>
                            <option value="ቂርቆስ">ቂርቆስ</option>
                            <option value="ኮልፌ ቀራንዮ">ኮልፌ ቀራንዮ</option>
                            <option value="ልደታ">ልደታ</option>
                            <option value="ንፋስ ስልክ ላፍቶ">ንፋስ ስልክ ላፍቶ</option>
                            <option value="የካ">የካ</option>
                            <option value="ለሚ ኩራ">ለሚ ኩራ</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ወረዳ</Form.Label>
                        <Form.Control
                            type="text"
                            name="RA_Wereda"
                            placeholder="የመኖርያ ኣድራሻ: ወረዳ"
                            onChange={handleChange}
                            value={heirInfo.RA_Wereda || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ብሎክ</Form.Label>
                        <Form.Control
                            type="text"
                            name="RA_Block"
                            placeholder="የመኖርያ ኣድራሻ: ብሎክ"
                            onChange={handleChange}
                            value={heirInfo.RA_Block || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>የቤት ቁጥር</Form.Label>
                        <Form.Control
                            type='text'
                            name='RA_HouseNumber'
                            placeholder="የመኖርያ ኣድራሻ: የቤት ቁጥር"
                            onChange={handleChange}
                            value={heirInfo.RA_HouseNumber || ""} />
                    </Form.Group>
                </Row>
                <Row className='mb-3 border-bottom pb-2 bg-light'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>ፎቶ</Form.Label>
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
                            መዝግብ
                        </Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-danger' onClick={handleClear}>
                            ኣፅዳ
                        </Button>
            </Col>*/}
                </Row>
                
            </form>
        {/*
            <Row>
                <Col className='large'>
                    <h3 className='text-primary border-bottom'>የወራሾች ዝርዝር</h3>
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
                            
                            <Row className='text-secondary small'><Col>ሙሉ ስም</Col></Row>
                            <Row>
                                <Col>{value.HeirName} {value.HeirFName} {value.HeirGFName}</Col>
                            </Row>
                            <Row className='text-secondary small'><Col>ኣድራሻ</Col></Row>
                            <Row>
                                <Row><Col className='text-secondary'>ክ/ከተማ:</Col><Col> {value.RA_Subcity}</Col></Row>
                                <Row><Col className='text-secondary'>ወረዳ: </Col><Col>{value.RA_Wereda}</Col></Row>
                                <Row><Col className='text-secondary'>ብሎክ: </Col><Col>{value.RA_Block}</Col></Row>
                                <Row><Col className='text-secondary'>የቤት ቁጥር: </Col><Col>{value.RA_HouseNumber}</Col></Row>
                            </Row>
                        </Col>
                    </Row>
                ))
                */}
            
        </div>
    );
}

export default HeirInfo;