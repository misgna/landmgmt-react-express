import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import JobDesc from '../tasks/team2/info/JobDesc';
import LandPrep from '../tasks/team2/tasks/LandPrep';
import Mail from '../tasks/common/mail/Mail';

const LandPrepMenu = (props) => {
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
                    <Button className='btn m-2' onClick={()=>handleClick("land")}>
                        የመሬት ዝግጅት ሥራ
                    </Button>
                </Nav.Item>
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("message")}>
                    መልዕክት
                    </Button>
                </Nav.Item>
                
            </Nav>
            {task === "tasks" ? <JobDesc /> : null}
            {task === "land" ? <LandPrep /> : null}
            {task === "message" ? <Mail user = {user} team={team}/> : null}
        </>
    );
}

export default LandPrepMenu;