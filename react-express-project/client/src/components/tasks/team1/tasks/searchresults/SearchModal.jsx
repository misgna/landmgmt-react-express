import React, {useState} from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

const SearchModal = (props) => {
    const leaseInfo = props.leaseinfo;
    const tenantInfo = props.tenantinfo;
    const landlordInfo = props.landlordinfo;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>

            </Modal.Header>

            <Modal.Body>
                <Row><Col>Lease number</Col><Col>{leaseInfo[0].LeaseNumber}</Col></Row>
                <Row><Col>Lease number</Col><Col>{tenantInfo[0].LeaseNumber}</Col></Row>
                <Row><Col>Lease number</Col><Col>{landlordInfo[0].LeaseNumber}</Col></Row>
               
            </Modal.Body>

            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    )
}

export default SearchModal;