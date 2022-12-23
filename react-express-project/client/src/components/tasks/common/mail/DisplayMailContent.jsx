import React from 'react';
import {Row} from 'react-bootstrap';

const DisplayMailContent = (props) => {
   
    return (
        <Row>  
            {props.message}
        </Row>
    )
}

export default DisplayMailContent;