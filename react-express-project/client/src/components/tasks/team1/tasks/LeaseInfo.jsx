import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import ContactInfo from './ContactInfo';

const LeaseInfo = () => {
    const contactInfo = {
        'title': 'የዉል ሰጪ እማኝ',
        'api': 'landlord'
    }
    return (
        <>
            <Form className="container justify-content-center mb-4">
                <Row className='bg-primary text-white p-2'>
                    <Col>የዉል መረጃ</Col>
                </Row>
                <Row className='bg-primary opacity-50 text-white p-2 m-2'>
                    <Col>ዉል ሰጪ</Col>
                </Row>
                <Row className='bg-light p-2 mb-2 big m-2'>
                    <Row><Col className='text-center'>በኣዲስ ኣበባ ኣስተዳደር</Col></Row>
                    <Row><Col className='text-center'>በኣራዳ ክፍለ ከተማ መሬት ልማትና ማኔጅመንት</Col></Row>
                    <Row><Col className='text-center'>የመሬት ባንክና ማስተላለፍ ፅህፈት-ቤት</Col></Row>
                </Row>

                <Row className='bg-light p-2 m-2'>
                    <Form.Group as={Col} className="col-3">
                        <Form.Label>የዉል ቁጥር</Form.Label>
                        <Form.Control type="text" className="p-2" name="" />
                    </Form.Group>
                    <Form.Group as={Col} className="col-3">
                        <Form.Label>የተፈረመበት ቀን</Form.Label>
                        <Form.Control type="text" className="p-2" name="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>የዉል ዓይነት</Form.Label>
                        <select className='form-select form-select-sm p-2'>
                            <option className='m-2'>ከውርስ በስተቀር በማንኛውም መንገድ ለ3ኛ ወገን የሚተላለፍ ከ 175 ካ.ሜ በላይ የሆነ ነባር ይዞታ የሊዝ ውል</option>
                            <option className='m-2'>በሊዝ ስርዓት ለሚተዳደሩ እና የተናጠል ካርታ ላቀረቡ አልሚዎች የሚሰጥ የሊዝ ውል</option>
                            <option className='m-2'>ከውርስ በስተቀር በማንኛውም መንገድ ለ3ኛ ወገን የሚተላለፍ ከ 175 ካ.ሜ በታች የሆነ የጋራ ግቢ ነባር ይዞታ የሊዝ ውል</option>
                            <option className='m-2'>ከውርስ በስተቀር በማንኛውም መንገድ ለ3ኛ ወገን የሚተላለፍ ከ 175 ካ.ሜ በታች የሆነ ነባር ይዞታ የሊዝ ውል</option>
                            <option className='m-2'>በሊዝ ጨረታ የተላለፈ ቦታ የሊዝ ውል</option>
                            <option className='m-2'>በሊዝ አግባብ የተገኘ ይዞታ በሽያጭ ወይም በስጦታ ሲተላለፍ ከገዢ ወይም ከስጦታ ተቀባይ ጋር የገባ ውል የሊዝ መብት ማስተላለፊያ ውል</option>
                            <option className='m-2'>በቋሚ ሊዝ በጨረታ፣ በድርድር እና በምደባ አግባብ የተገኘ ይዞታ የተሻሻለ የሊዝ ውል</option>
                            <option className='m-2'>የቋሚ ሊዝ የግንባታ መጀመሪያ ጊዜ ማሻሻያ ውል</option>
                            <option className='m-2'>የግንባታ ማጠናቀቂያ ጊዜ ማራዘሚያ ውል</option>
                            <option className='m-2'>በሊዝ ስሪት የተያዙ ይዞታዎች ሲቀላቀሉ የሊዝ ውል የሚገቡ ቅጽ</option>
                            <option className='m-2'>የግንባታ ማጠናቀቂያ ጊዜ ማራዘሚያ እና የእፎይታ ጊዜ የሊዝ ውል</option>
                            <option className='m-2'>በሊዝ አግባብ የተገኘ ይዞታ በሽያጭ ወይም በስጦታ ሲተላለፍ ከገዢ ወይም ከስጦታ ተቀባይ ጋር የገባ ውል የሊዝ መብት ማስተላለፊያ ውል</option>
                            <option className='m-2'>ከውርስ በስተቀር በማንኛውም መንገድ ለ3ኛ ወገን የሚተላለፍ ከ 175 ካ.ሜ በላይ የሆነ ነባር ይዞታ የሊዝ ውል</option>
                            <option className='m-2'>በሊዝ አግባብ የተገኘ ይዞታ በሽያጭ ወይም በስጦታ ሲተላለፍ የገዢ/ከስጦታ ተቀባይ/ጋር የተገባ የአፓርትመንት የተናጠል ሊዝ ውል</option>
                            <option className='m-2'>ከውርስ በስተቀር በማንኛውም መንገድ የተሻሻለ የሊዝ ውል</option>
                        </select>
                    </Form.Group>
                </Row>
                
                <ContactInfo data={ contactInfo }/>
                
            </Form>
        </>
    )
}

export default LeaseInfo;