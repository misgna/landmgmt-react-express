import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import JobDesc from '../tasks/team2/info/JobDesc';

const LandPrepMenu = () => {
    const [task, setTask] = useState("");
    const handleClick = (task) => {
        setTask(task);
    }
    return (
        <>
            <Nav className="justify-content-center border-bottom mb-3">
                <Nav.Item className="">
                    <Button className='btn' onClick={()=>handleClick("tasks")}>
                        ዝርዝር ተግባራት
                    </Button>
                </Nav.Item>
                <Nav.Item className="">
                    <Button className='btn' onClick={()=>handleClick("land")}>
                        የመሬት ዝግጅት ሥራ
                    </Button>
                </Nav.Item>
                
            </Nav>
            {task === "tasks" && <JobDesc />}
        </>
    );
}

export default LandPrepMenu;