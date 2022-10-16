import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const PropertyInfo = () => {
    const ParentHouseNumber = JSON.parse(localStorage.getItem("houseNumber"));
    const handleAdd = () => {
        const checkPropertyOwner = document.getElementsByName("propertyOwner[]");
        const selectedPropertyOwner = [];
        for(let index = 0; index < checkPropertyOwner.length; index++) {
            if (checkPropertyOwner[index].checked)
                selectedPropertyOwner.push(checkPropertyOwner[index].value);
        }
       
        const checkPropertyService = document.getElementsByName("propertyService[]");
        const selectedPropertyService = [];
        for(let index = 0; index < checkPropertyService.length; index++) {
            if (checkPropertyService[index].checked)
                selectedPropertyService.push(checkPropertyService[index].value);
        }

        const checkPropertyDocument = document.getElementsByName("propertyDocument[]");
        const selectedPropertyDocument = [];
        for(let index = 0; index < checkPropertyDocument.length; index++) {
            if (checkPropertyDocument[index].checked)
                selectedPropertyDocument.push(checkPropertyDocument[index].value);
        }

        const input = {
            'ParentHouseNumber' : ParentHouseNumber,
            'PropertyOwner': selectedPropertyOwner.toString(),
            'PropertyService': selectedPropertyOwner.toString(),
            'PropertyDocs' : selectedPropertyDocument.toString()
        }
        Axios.post('http://localhost:4000/propertyinfo', input)
        .then((res) => {
            const response = res.data;
            alert(JSON.stringify(response));
        })
    }
    const handleClear = () => {

    }
    return (
        <div className="container justify-content-center mb-4">
            { /*ParentHouseNumber !== "" && (*/
                <>
                <Row className='bg-primary text-white p-2'>
                        <Col>የይዞታው መረጃ</Col>
                    </Row>
            <Row className="mb-3 border-bottom pb-2 bg-light">
                <Form.Label>የይዞታው ባለቤትነት</Form.Label>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" name = "propertyOwner[]" value="የግል"/> የግል
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የቀበሌ" name = "propertyOwner[]"/> የቀበሌ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የመንግስት ቤቶች ኤጀንሲ" name = "propertyOwner[]"/> የመንግስት ቤቶች ኤጀንሲ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="መያድ"  name = "propertyOwner[]"/> መያድ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የሕዝባዊ ድርጅት" name = "propertyOwner[]"/> የሕዝባዊ ድርጅት
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የሃይማኖት ተቋም" name = "propertyOwner[]"/> የሃይማኖት ተቋም
                </Form.Group>
            </Row>

            <Row className="mb-3 border-bottom pb-2 bg-light">
                <Form.Label>የይዞታው ኣገልግሎት</Form.Label>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="መኖርያ" name = "propertyService[]"/> መኖርያ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="ድርጅት" name = "propertyService[]"/> ድርጅት
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="መኖርያና ድርጅት" name = "propertyService[]"/> መኖርያና ድርጅት
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የእርሻ ቦታ" name = "propertyService[]"/> የእርሻ ቦታ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የጓሮ ኣትክልት" name = "propertyService[]"/> የጓሮ ኣትክልት
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የግጦሽ ቦታ" name = "propertyService[]"/> የግጦሽ ቦታ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የተክል ቦታ" name = "propertyService[]"/> የተክል ቦታ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="ጊዜያዊ መጠቀሚያ ቦታ" name = "propertyService[]"/> ጊዜያዊ መጠቀሚያ ቦታ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="ሌላ" name = "propertyService[]"/> ሌላ
                </Form.Group>
            </Row>

            <Row className="mb-3 border-bottom pb-2 bg-light">
                <Form.Label>ስለ ይዞታው የቀረበ ሰነድ</Form.Label>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የይዞታ ማረጋገጫ ካርታ" name = "propertyDocument[]"/> የይዞታ ማረጋገጫ ካርታ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የቦታ መጠቀምያ ደረሰኝ" name = "propertyDocument[]"/> የቦታ መጠቀምያ ደረሰኝ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="ቅድመ ካርታ" name = "propertyDocument[]"/> ቅድመ ካርታ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="ደብተር" name = "propertyDocument[]"/> ደብተር
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የመሰረተ ልማት ኣቅርቦት ደረሰኝ ቢል" name = "propertyDocument[]"/> የመሰረተ ልማት ኣቅርቦት ደረሰኝ ቢል
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የሀይለስላሴ ካርታ" name = "propertyDocument[]"/> የሀይለስላሴ ካርታ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የመንግስት ቤት ውል" name = "propertyDocument[]"/> የመንግስት ቤት ውል
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የቦታ ጊዜያዊ መጠቀምያ ውል" name = "propertyDocument[]"/> የቦታ ጊዜያዊ መጠቀምያ ውል
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የግብር ደረሰኝ" name = "propertyDocument[]"/> የግብር ደረሰኝ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="ዉሃ የገባበት ውል" name = "propertyDocument[]"/> ዉሃ የገባበት ውል
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="መብራት የገባበት ውል" name = "propertyDocument[]"/> መብራት የገባበት ውል
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="የኪራይ ደረሰኝ" name = "propertyDocument[]"/> የኪራይ ደረሰኝ
                </Form.Group>
                <Form.Group as={Col} className="mb-3 col-2" id="formGridCheckbox">
                    <input type="checkbox" value="ሌላ" name = "propertyDocument[]"/> ሌላ
                </Form.Group>
            </Row>

            <Row className='text-center mt-3 mb-3 border-bottom pb-2 pt-2'>
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
            </>
            /*)*/}            
        </div>
    )
}

export default PropertyInfo;