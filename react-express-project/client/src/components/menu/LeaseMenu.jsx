import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import JobDesc from '../tasks/team1/info/JobDesc';
import LeaseServices from '../tasks/team1/tasks/LeaseServices';

const LeaseMenu = () => {
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
                    <Button className='btn m-2' onClick={()=>handleClick("")}>
                        የይዞታ ካርታ ማዘጋጀት
                    </Button>
                </Nav.Item>
                <Nav.Item className=''>
                   <Button className='btn m-2' onClick={()=>handleClick("leaseservices")}>
                        የሊዝ ኣግልግሎት
                    </Button>
                </Nav.Item>
            </Nav>
            {task === "tasks" && <JobDesc />}
            {task === "leaseservices" && <LeaseServices />}
        </>
    );
}

export default LeaseMenu;