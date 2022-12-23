import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import ListOfTasks from '../tasks/coordinator/ListOfTasks';
import EmployeeRecord from '../tasks/ict/tasks/acct/EmployeeRecord';
import TeamRecord from '../tasks/ict/tasks/team/TeamRecord';
import TeamRoleRecord from '../tasks/ict/tasks/team/RolesOfTeamRecord';
import Mail from '../tasks/common/mail/Mail';
//import Page from '../../pages/Page';

const ICTMenu = () => {
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
                        <Button className='btn' onClick={()=>handleClick("account")}>
                            የመለያ ቅፅ
                        </Button>
                </Nav.Item>
                <Nav.Item className='m-2'>
                    <Button className='btn'  onClick={()=>handleClick("team")}>
                        የቡድን ቅፅ
                    </Button>
                </Nav.Item>
                <Nav.Item className='m-2'>
                    <Button className='btn'  onClick={()=>handleClick("teamrole")}>
                        የቡድን ስራ ድርሻዎች
                    </Button>
                </Nav.Item>
                <Nav.Item className="m-2">
                    <Button className='btn' onClick={()=>handleClick("message")}>
                    መልዕክት
                    </Button>
                </Nav.Item>
            </Nav>
            {task === "tasks" ? <ListOfTasks /> : null}
            {task === "account" ? <EmployeeRecord /> : null}
            {task === "team" ? <TeamRecord /> : null}
            {task === "teamrole" ? <TeamRoleRecord /> : null}
            {task === "message" ? <Mail /> : null}
        </>
    );
}

export default ICTMenu;