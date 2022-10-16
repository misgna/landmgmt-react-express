import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const url = "http://localhost:4000/login";
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        Axios.post(url, user)
            .then((response)=>{
                //alert(JSON.stringify(user));
                if(response.data.status === "ok" && response.data.login === true) {
                    navigate("/page", {state: {empId: user.empId}});
                }
            })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((values)=> ({...values, [name]: value}));
    }
    return (
        <div className='container'>
            <div className='row justify-content-center mt-4'>
                <div className='col-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="card border-secondary mt-2 w-100 float-end" >
                            <div className="card-header bold text-center">መግብያ</div>
                            <div className="card-body text-secondary">
                                <div className='container '>
                                    <form className="">
                                        <div className='row'>
                                            <label>የመለያ ቁጥር</label>
                                            <input 
                                                type="text" 
                                                className='form-control mb-2' 
                                                name='empId' 
                                                value={user.empId || ""} 
                                                onChange={handleChange}
                                                />
                                        </div>
                                        <div className='row'>
                                            <label>የይለፍ ቃል</label>
                                            <input 
                                                type="password" 
                                                className='form-control mb-2' 
                                                name='empPassword' 
                                                value={user.empPassword || ""} 
                                                onChange={handleChange}
                                                />
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <button className='btn bg-primary text-white text-center w-100'>
                                    ግባ
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;