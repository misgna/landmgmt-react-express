import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import JobDesc from '../tasks/team5/info/JobDesc';

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
                    <Button className='btn' onClick={()=>handleClick("")}>
                    የካስና ምትክ ሰርቲፊኬት
                    </Button>
                </Nav.Item>
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("")}>
                    መልዕክት
                    </Button>
                </Nav.Item>
                
            </Nav>
            {task === "tasks" && <JobDesc />}
        </>
    );
}

export default Demarcation;