import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import JobDesc from '../tasks/team1/info/JobDesc';
import LeaseServices from '../tasks/team1/tasks/LeaseServices';
import Mail from '../tasks/common/mail/Mail';
import Search from '../tasks/team1/tasks/Search';

const LeaseMenu = (props) => {
    const user = props.user;
    const team = props.team;
    const [task, setTask] = useState("");
    const handleClick = (task) => {
        setTask(task);
    }
    return (
        <>
            <Nav className="justify-content-center border-bottom mb-3">
                <Nav.Item className="col-2 m-2">
                    <Button className='btn w-100 btn-secondary' onClick={()=>handleClick("tasks")}>
                        ዝርዝር ተግባራት
                    </Button>
                </Nav.Item>
                <Nav.Item className="col-2 m-2">
                    <Button className='btn w-100 btn-secondary' onClick={()=>handleClick("")}>
                        የይዞታ ካርታ ማዘጋጀት
                    </Button>
                </Nav.Item>
                <Nav.Item className='col-2 m-2'>
                   <Button className='btn w-100 btn-secondary' onClick={()=>handleClick("leaseservices")}>
                        የሊዝ ኣግልግሎት
                    </Button>
                </Nav.Item>
                <Nav.Item className="col-2 m-2">
                    <Button className='btn w-100 btn-secondary' onClick={()=>handleClick("message")}>
                        መልዕክት
                    </Button>
                </Nav.Item>
                <Nav.Item className="col-2 m-2">
                    <Button className='btn w-100 btn-secondary' onClick={()=>handleClick("search")}>
                        ፈልግ
                    </Button>
                </Nav.Item>
            </Nav>
            {task === "tasks" ? <JobDesc /> : null}
            {task === "leaseservices" ? <LeaseServices /> : null}
            {task === "message" ? <Mail user={user} team={team}/> : null }
            {task === "search" ? <Search /> : null}
        </>
    );
}

export default LeaseMenu;