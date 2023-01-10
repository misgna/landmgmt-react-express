import React from 'react';
import ICTMenu from './ICTMenu';
import LeaseMenu from './LeaseMenu';
import LandPrepMenu from './LandPrepMenu';
import LandBankMenu from './LandBankMenu';
import DataCollectorMenu from './DataCollectorMenu';
import Demarcation from './Demarcation';

const Menu = (props) => {
    const team = props.team;
    const user = props.user;
    const teamId = user.teamId;
    
    const menuSelection = (team) => {
        
        if (teamId === 'ቡድን 1') {
            return <LeaseMenu user = {user} team={team}/>;
        } else if (teamId === 'ቡድን 2') {
            return <LandPrepMenu user = {user} team={team}/>;
        } else if (teamId === 'ቡድን 3') {
            return <LandBankMenu user = {user} team={team}/>;
        } else if (teamId === 'ቡድን 4') {
            return <DataCollectorMenu user = {user} team={team}/>;
        } else if (teamId === 'ቡድን 5') {
            return <Demarcation user = {user} team={team}/>;
        } else if (teamId === 'ICT') {
            return <ICTMenu user = {user} team={team}/>;
        } else if (teamId === '') {
            return <ICTMenu />;
        }
    }
    return (
        <>
            { 
                menuSelection(team) 
            }
        </>
    );
}

export default Menu;