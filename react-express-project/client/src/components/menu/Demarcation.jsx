import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import JobDesc from '../tasks/team5/info/JobDesc';
import Circular from '../tasks/team5/tasks/Circular';
import ResettlementDecision from '../tasks/team5/tasks/ResettlementDecision';

const Demarcation = () => {
    const [task, setTask] = useState("");
    const handleClick = (task) => {
        setTask(task);
    }
    return (
        <>
            <Nav className="justify-content-center border-bottom mb-3">
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("tasks")}>
                        ዝርዝር ተግባራት
                    </Button>
                </Nav.Item>
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("certificate")}>
                    የካስና ምትክ ሰርቲፊኬት
                    </Button>
                </Nav.Item>
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("circular")}>
                    ሰርኩላር
                    </Button>
                </Nav.Item>
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("")}>
                    መልዕክት
                    </Button>
                </Nav.Item>
                
            </Nav>
            {task === "tasks" && <JobDesc />}
            {task === "circular" && <Circular />}
            {task === "certificate" && <ResettlementDecision />}
        </>
    );
}

export default Demarcation;