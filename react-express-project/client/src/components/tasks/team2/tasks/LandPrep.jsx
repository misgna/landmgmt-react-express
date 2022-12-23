import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const LandPrep = () => {
    return (
        <Form className="container justify-content-center mb-4">
            <Row className='bg-primary text-white p-2 mt-2'>የሚገኝበት ቦታ</Row>
            <Row className='bg-light mt-2 p-2'>
                <Form.Group as={Col} className="col-3">
                    <Form.Label>ክፍለ ከተማ</Form.Label>
                    <Form.Select type="select" className="p-2" name="">
                        <option className='border-bottom p-2'>ኣዲስ ከተማ</option>
                        <option className='border-bottom p-2'>ኣቃቂ ቃሊቲ</option>
                        <option className='border-bottom p-2'>ኣራዳ</option>
                        <option className='border-bottom p-2'>ቦሌ</option>
                        <option className='border-bottom p-2'>ጉለሌ</option>
                        <option className='border-bottom p-2'>ቂርቆስ</option>
                        <option className='border-bottom p-2'>ኮልፌ ቀራዮ</option>
                        <option className='border-bottom p-2'>ልደታ</option>
                        <option className='border-bottom p-2'>ንፋስ ስልክ ፡ ላፍቶ</option>
                        <option selected className='border-bottom p-2'>የካ</option>
                        <option className='border-bottom p-2'>ለሚ ኩራ</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} className="col-3">
                    <Form.Label>የድሮ ወረዳ</Form.Label>
                    <Form.Control type="text" className="p-2" name="" />
                </Form.Group>
                <Form.Group as={Col} className="col-3">
                    <Form.Label>ኣዲስ ወረዳ</Form.Label>
                    <Form.Control type="text" className="p-2" name="" />
                </Form.Group>
                <Form.Group as={Col} className="col-3">
                    <Form.Label>ቀበሌ</Form.Label>
                    <Form.Control type="text" className="p-2" name="" />
                </Form.Group>
            </Row>
            <Row className='bg-primary text-white p-2 mt-2'>ሰለ ቦታው የተሰበሰበ መረጃ</Row>
            <Row className='bg-light mt-2 p-2'>
                <Form.Group as={Col} className="col-3">
                    <Form.Label>የቦታው ስፋት</Form.Label>
                    <Form.Control type="text" className="p-2" name="" />
                </Form.Group>
                <Form.Group as={Col} className="col-4">
                    <Form.Label>ቦታው ሊውልበት የሚችል ኣግልግሎት</Form.Label>
                    <Form.Select type="select" className="p-2" name="" multiple>
                        <option className='border-bottom p-2'>ለምትክ ቦታ የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለጨረታ የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለስራ ዕድል ፈጠራ የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለሞል የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለባለ ኮኮብ ሆቴል የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለሪልስቴት የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለቅይጥ ኣገልግሎት የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለወጣት ማዕከላት የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለመንግስት ተቋም የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለኃይማኖት ተቋማት የተዘጋጀ ቦታ</option>
                        <option className='border-bottom p-2'>ለሌች ኣገልግሎት የተዘጋጀ</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className='bg-primary text-white p-2 mt-2'>
                ተጨማሪ ኣባሪዎች
            </Row>
            <Row>
                <Form.Group controlId="formFile" className="mb-3 col-5">
                    <Form.Label>የተዘጋጀ ሳይትፕላን</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </Row>
            <Row className='text-center mt-3 mb-3 border-bottom border-top border-primary pb-2 pt-2'>
                <Col className='text-center'>
                    <Button className='btn w-50 btn-success'>
                        መዝግብ
                    </Button>
                </Col>
                <Col className='text-center'>
                    <Button className='btn w-50 btn-danger'>
                        ኣፅዳ
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default LandPrep;