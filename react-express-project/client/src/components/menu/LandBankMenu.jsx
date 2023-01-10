import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import JobDesc from '../tasks/team3/info/JobDesc';
import Mail from '../tasks/common/mail/Mail';

const LandBankMenu = (props) => {
    const user = props.user;
    const team = props.team;
    const [task, setTask] = useState("");
    const handleClick = (task) => {
        setTask(task);
    }
    return (
        <>
            <Nav className="justify-content-center border-bottom mb-3">
                <Nav.Item className="">
                    <Button className='btn m-2' onClick={()=>handleClick("tasks")}>
                        ዝርዝር ተግባራት
                    </Button>
                </Nav.Item>
                <Nav.Item className="">
                    <Button className='btn m-2' onClick={()=>handleClick("bank")}>
                        የመሬት ባንክ
                    </Button>
                </Nav.Item>
                <Nav.Item className=''>
                    <Button className='btn m-2' onClick={()=>handleClick("")}>
                        የመሬት ወረራ
                    </Button>
                </Nav.Item>
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("message")}>
                    መልዕክት
                    </Button>
                </Nav.Item>
            </Nav>
            {task === "tasks" ? <JobDesc /> : null}
            {task === "message" ? <Mail user={user} team={team}/> : null }
        </>
    );
}

export default LandBankMenu;