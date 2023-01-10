import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const ResettlementDecision = () => {
    const handleAdd = () => {

    }
    const handleClear = () => {

    }
    return (
        <>

            <Form className="container justify-content-center mb-4">
                <Row className='p-4 mb-2 justify-content-center'>
                    <Col className="text-center"><h3>የካሳና ምትክ መወሰኛ ፎርማት</h3></Col>
                </Row>
                <Row className='bg-primary text-white p-2'>
                    <Col >ለልማት የተፈለገዉ ንብረት</Col>
                </Row>
                <Row>
                    <Form.Group className="mb-3 bg-light p-2" as={Col}>
                        <Form.Label>የሚነሳበት አግባብ</Form.Label>
                        <Form.Check type="radio" name="displacementOption" label="ሙሉ በሙሉ" />
                        <Form.Check type="radio" name="displacementOption" label="በከፊል" />
                    </Form.Group>
                    <Form.Group className="mb-3 bg-light p-2" as={Col}>
                        <Form.Label>የመሬት ይዞታ መጠን (ካ/ሜትር)</Form.Label>
                        <Form.Control type="text" name="propertyArea" />
                    </Form.Group>
                </Row>
                <Row className='bg-primary text-white p-2'>
                    <Col>የይዞታዉ የባለ መብትነት ማረጋገጫ</Col>
                </Row>
                <Row className="mb-3 bg-light p-2">
                    <Form.Group as={Col}>
                        <Form.Label>ይዞታዉ ከይገባኛል ባይ </Form.Label>
                        <Form.Check type="radio" name="" label="ነጻ ነዉ" />
                        <Form.Check type="radio" name="" label="ነጻ አይደለም" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>ነፃ ካልሆነ ምክንያት</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className='bg-primary text-white p-2'>
                    <Col>የካሳና ምትክ ባለመብትነት አግባብ</Col>
                </Row>
                <Row>
                    <Form.Group className="mb-3 bg-light p-2" as={Col}>
                        <Form.Label className="">የካሳ ባለመብት </Form.Label>
                        <Form.Check type="radio" className="" name="" label="ነዉ" />
                        <Form.Check type="radio" className="" name="" label="አይደለም" />
                    </Form.Group>
                    <Form.Group className="mb-3 bg-light p-2" as={Col}>
                        <Form.Label className=""> የምትክ ቦታ ባለመብት </Form.Label>
                        <Form.Check type="radio" className="" name="" label="ነዉ" />
                        <Form.Check type="radio" className="" name="" label="አይደለም" />
                    </Form.Group>
                    <Form.Group className="mb-3 bg-light p-2" as={Col}>
                        <Form.Label className=""> የምትክ ቤት ባለመብት </Form.Label>
                        <Form.Check type="radio" className="" name="" label="ነዉ" />
                        <Form.Check type="radio" className="" name="" label="አይደለም" />
                    </Form.Group>
                </Row>
                <Row className='bg-primary text-white p-2'>
                    <Col>
                        ዉሳኔ
                    </Col>
                </Row>

                <Row className="p-2">
                    <Col className="bg-light border p-2">
                        <Form.Label className='bg-secondary text-white p-2 w-100'>የግንባታ ምትክ የካሳ ክፍያ መጠን</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Label>በአሀዝ</Form.Label>
                            <Form.Control type="text" className="" name="" />
                            <Form.Label>በፊደል</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ደጋፊ ሰርኩላር ደብዳቤ</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                    </Col>
                    <Col className="bg-light p-2 border">
                        <Form.Label className='bg-secondary text-white p-2 w-100'>የሁለት አመት ቤት መከራያ</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Label>በአሀዝ</Form.Label>
                            <Form.Control type="text" className="" name="" />
                            <Form.Label>በፊደል</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>ደጋፊ ሰርኩላር ደብዳቤ</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3 border-bottom border-primary">
                    <Col></Col>
                    <Col className="bg-light p-2">
                        <Row>
                            <Col className='bg-secondary text-white col-2'>
                                <Form.Label className='mt-4'>ጠቅላላ ድምር</Form.Label>
                            </Col>
                            <Col>
                                <Form.Group as={Row} className="mb-2">
                                    <Col className="col-2">
                                        <Form.Label className="">በአሀዝ</Form.Label>
                                    </Col>
                                    <Col className="col-10">
                                        <Form.Control type="text" className="w-100" name="" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-2">
                                    <Col className="col-2">
                                        <Form.Label className="">በፊደል</Form.Label>
                                    </Col>
                                    <Col className="col-10">
                                        <Form.Control type="text" className="w-100" name="" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>

                <Row className="p-2 ">
                    <Col className="mb-3 bg-light border p-2">
                        <Form.Label className='bg-secondary text-white p-2 w-100'>ለስም ዝውውር (የአገልግሎት) የሚቀነስ</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Label>በአሀዝ</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>በፊደል</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                    </Col>

                    <Col className="mb-3 bg-light border p-2">
                        <Form.Label className='bg-secondary text-white p-2 w-100'>የእቃ ማጓጓዣ</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Label>በአሀዝ</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>በፊደል</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                    </Col>

                    <Col className="mb-3 bg-light p-2 border">
                        <Form.Label className='bg-secondary text-white p-2 w-100'>የስነ ልቦና</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Label>በአሀዝ</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>በፊደል</Form.Label>
                            <Form.Control type="text" className="" name="" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3 border-bottom border-primary">
                    <Col></Col>
                    <Col className="bg-light p-2">
                        <Row>
                            <Col className='col-2 text-white bg-secondary bold'>
                                <Form.Label className='mt-4'>ጠቅላላ ተከፋይ</Form.Label>
                            </Col>
                            <Col>
                                <Form.Group as={Row} className="mb-2">
                                    <Col className="col-2">
                                        <Form.Label>በአሀዝ</Form.Label>
                                    </Col>
                                    <Col className="col-10">
                                        <Form.Control type="text" className="" name="" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Col className="col-2">
                                        <Form.Label>በፊደል</Form.Label>
                                    </Col>
                                    <Col className="col-10">
                                        <Form.Control type="text" className="" name="" />
                                    </Col>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                </Row>

                <Row className='bg-primary text-white p-2'>
                    <Col>የምትክ ቦታ መጠን</Col>
                </Row>
                <Row>
                    <Form.Group className="mb-3 bg-light p-2" as={Col}>
                        <Form.Label>ለመኖርያ (በካ/ሜትር)</Form.Label>
                        <Form.Control type="text" name="propertyArea" />
                    </Form.Group>
                    <Form.Group className="mb-3 bg-light p-2" as={Col}>
                        <Form.Label>ለድርጅት (ካ/ሜትር)</Form.Label>
                        <Form.Control type="text" name="propertyArea" />
                    </Form.Group>
                </Row>
                <Row className='bg-primary text-white p-2'>
                    <Col>የምትክ ቤት መጠንና ዓይነት</Col>
                </Row>
                <Row className='bg-light mb-2'>
                    <Form.Group>
                        <Form.Label as={Col} className="col-4"> ዓይነት </Form.Label>
                        <Form.Check type="radio" as={Col} className="col-4" name="" label="ባለ 1 ክፍል" />
                        <Form.Check type="radio" as={Col} className="col-4" name="" label="ባለ 2 ክፍል" />
                        <Form.Check type="radio" as={Col} className="col-4" name="" label="ባለ 2 ክፍል" />
                    </Form.Group>
                </Row>
                <Row className='bg-primary text-white p-2'>
                    <Col>ካሳ ያልተከፈለ እና ምትክ ቦታ ወይም ቤት ያልተሰጥ ከሆነ ያልተሰጠበት ምክን ያት</Col>
                </Row>
                <Row className='mt-2 bg-light p-2'>
                    <Form.Group>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Row>
                <Row className='text-center mt-3 mb-3 border-bottom border-top border-primary pb-2 pt-2'>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-success' onClick={handleAdd}>
                            መዝግብ
                        </Button>
                    </Col>
                    <Col className='text-center'>
                        <Button className='btn w-50 btn-danger' onClick={handleClear}>
                            ኣፅዳ
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default ResettlementDecision;