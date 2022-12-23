import React, {useState, useEffect, createContext} from "react";
import HeaderUser from "../components/header/HeaderUser";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/FooterStick";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const Page = () => {
    const location = useLocation();
    const employee = location.state;

    const [user, setUser] = useState({});
    const [team, setTeam] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:4000/employee/${employee.empId}`)
        .then((res) => {
            setUser(res.data[0]);
            Axios.get(`http://localhost:4000/team/${res.data[0].teamId}`)
            .then((response) => {
                setTeam(response.data[0]);
            })
        })
    }, [user, employee]);
    
    return (
        <>
            <HeaderUser user={user} team={team}/>
            <Menu user={user} team={team}/>
            {/*<Footer />*/}
        </>
    );
}

export default Page;