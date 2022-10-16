import React from 'react';
import ICTMenu from './ICTMenu';
import LeaseMenu from './LeaseMenu';
import LandPrepMenu from './LandPrepMenu';
import LandBankMenu from './LandBankMenu';
import DataCollectorMenu from './DataCollectorMenu';
import Demarcation from './Demarcation';

const Menu = (props) => {
    const team = props.team.teamId;
    const menuSelection = (team) => {
        
        if (team === 'ቡድን 1') {
            return <LeaseMenu />;
        } else if (team === 'ቡድን 2') {
            return <LandPrepMenu />;
        } else if (team === 'ቡድን 3') {
            return <LandBankMenu />;
        } else if (team === 'ቡድን 4') {
            return <DataCollectorMenu />;
        } else if (team === 'ቡድን 5') {
            return <Demarcation />;
        } else if (team === 'ICT') {
            return <ICTMenu />;
        } else if (team === '') {
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