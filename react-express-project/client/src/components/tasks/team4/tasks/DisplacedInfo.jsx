import React, { useState, useEffect } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import Axios from 'axios';

const DisplacedInfo = () => {
    const [displacedInfo, setDisplacedInfo] = useState({});
    const [numberOfOwners, setNumberOfOwners] = useState({});
    const [houseNumber, setHouseNumber] = useState("");

    const handleAdd = (event) => {
        const checkBox = document.getElementsByName("NumberOfOwners")[0];
        displacedInfo["NumberOfOwners"] = checkBox.checked;
        setHouseNumber(displacedInfo.RA_HouseNumber);
        
        Axios.post("http://localhost:4000/displacedinfo", displacedInfo)
        .then((response) => {
            alert(JSON.stringify(response.data));
        })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDisplacedInfo(values => ({...values, [name]:value}));
    }

    const handleCheck = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name.checked) setNumberOfOwners({[name]: value});
        alert(JSON.stringify(numberOfOwners));
    }

    const handleClear = (event) => {
        setDisplacedInfo({});
    }

    useEffect(()=>{
        localStorage.setItem("houseNumber", JSON.stringify(houseNumber));
    }, [houseNumber]);

    return (
        <div className="container justify-content-center mb-4">
                <Row className='bg-primary text-white p-2'>
                        <Col>የተነሺው መረጃ</Col>
                    </Row>
                <Row className="mb-3 border-bottom pb-2 bg-light">
                    <Form.Label className="dark">የተነሺው</Form.Label>
                    <Form.Group as={Col} className="mb-3 col-1">
                        <Form.Label>እነ</Form.Label>
                        <Form.Check 
                            type="checkbox" 
                            label="" 
                            name="NumberOfOwners"
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>ስም</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="የተነሺው ስም" 
                            name="Name"
                            onChange={handleChange}
                            value={displacedInfo.Name || ""}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>የኣባት ስም</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="የኣባት ስም" 
                            name="FName"
                            onChange={handleChange}
                            value={displacedInfo.FName || ""}
                            />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>የኣያት ስም</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="የኣያት ስም" 
                            name="GFName"
                            onChange={handleChange}
                            value={displacedInfo.GFName || ""}/>
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
                                value={displacedInfo.RA_Subcity || ""}
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
                            value={displacedInfo.RA_Wereda || ""}
                            />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ብሎክ</Form.Label>
                        <Form.Control 
                            type="text"
                            name="RA_Block"
                            placeholder="የመኖርያ ኣድራሻ: ብሎክ"
                            onChange={handleChange}
                            value={displacedInfo.RA_Block || ""}
                            />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>የቤት ቁጥር</Form.Label>
                        <Form.Control 
                            type='text'
                            name='RA_HouseNumber'
                            placeholder="የመኖርያ ኣድራሻ: የቤት ቁጥር"
                            onChange={handleChange}
                            value={displacedInfo.RA_HouseNumber || ""}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3 border-bottom pb-2 bg-light">
                    <Form.Label>ኣድራሻ</Form.Label>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>የቀድሞ ወረዳ</Form.Label>
                        <Form.Control 
                            type="text"
                            name="OA_Wereda"
                            placeholder="የቀድሞ ኣድራሻ: ወረዳ"
                            onChange={handleChange}
                            value={displacedInfo.OA_Wereda || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>ቀበሌ</Form.Label>
                        <Form.Control 
                            type="text"
                            name="OA_Kebelle"
                            placeholder="የቀድሞ ኣድራሻ: ቀበሌ"
                            onChange={handleChange}
                            value={displacedInfo.OA_Kebelle || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ብሎክ</Form.Label>
                        <Form.Control 
                            type="text"
                            name="OA_Block"
                            placeholder="የቀድሞ ኣድራሻ: ብሎክ"
                            onChange={handleChange}
                            value={displacedInfo.OA_Block || ""}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>የቤት ቁጥር</Form.Label>
                        <Form.Control 
                            type="text"
                            name="OA_HouseNumber"
                            placeholder="የቀድሞ ኣድራሻ: የቤት ቁጥር"
                            onChange={handleChange}
                            value={displacedInfo.OA_HouseNumber || ""}/>
                    </Form.Group>
                </Row>
                <Row className='text-center'>
                    {/*<Col className='text-center'>
                        <Button className='btn w-50 btn-success' onClick={handleAdd}>
                            መዝግብ
                        </Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-danger' onClick={handleClear}>
                            ኣፅዳ
                        </Button>
                    </Col>
    */}
                </Row>
        </div>
    );

}

export default DisplacedInfo;