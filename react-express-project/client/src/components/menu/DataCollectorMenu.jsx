import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import ListOfTasks from '../tasks/team4/info/ListOfTasks';
//import SocioEconomicData from '../tasks/team4/tasks/socio-economic-data';
import SED from '../tasks/team4/tasks/SED';
import Mail from '../tasks/common/mail/Mail';


const DataCollectorMenu = () => {
    const [task, setTask] = useState("");
    const handleClick = (task) => {
        setTask(task);
    }
    return (
        <>
            <Nav className="justify-content-center border-bottom mb-3">
                <Nav.Item className="m-2">
                        <button className='btn' onClick={()=>handleClick("tasks")}>
                            ዝርዝር ተግባራት
                        </button>
                    </Nav.Item>
                    <Nav.Item className='m-2'>
                        <button className='btn' onClick={()=>handleClick("data")}>
                            የልማት ተነሺ መረጃ
                        </button>
                    </Nav.Item>
                    <Nav.Item className='m-2'>
                        <button className='btn' onClick={()=>handleClick("message")}>
                        መልዕክት
                        </button>
                    </Nav.Item>
            </Nav>
            {task === "tasks" ? <ListOfTasks /> : null}
            {task === "data" ? <SED /> : null}
            {task === "data" ? <Mail /> : null}
        </>
    );
}

export default DataCollectorMenu;