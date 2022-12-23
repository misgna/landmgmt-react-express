import React, {useContext, createContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const HeaderUser = (props) => {
    const team = props.team.teamName;
    const user = props.user;
    return (
        <div className='text-white mb-3 navbar' style={{ "background-color": "#2b5797" }}>
            <div className='p-2 float-start'>
                <h4>{team}</h4>
            </div>
            <div className='ms-auto'>
                    {
                        user.empName + ' ' + user.empFName + ' ' + user.empGFName
                    }
                </div>
            <div className='p-2 float-end'>
                
                <Dropdown>
                    <Dropdown.Toggle  style={{"background-color" : "#2b5797", "border" : "none"}}>
                        <FontAwesomeIcon icon={faUserCircle} size='2x'></FontAwesomeIcon>
                       
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" className='border-bottom'>የይለፍ ቃል ይቀይሩ</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className='border-bottom'>ፎቶ ያስገቡ</Dropdown.Item>
                        <Dropdown.Item href="/" className=''>ዉጣ</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>

    );
}
export default HeaderUser;