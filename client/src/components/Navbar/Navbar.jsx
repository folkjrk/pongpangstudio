import React, { useState } from 'react';
import './Navbar.css';
import { Link,useNavigate } from 'react-router-dom';

const Navbar = () =>{
    const navigate = useNavigate();

    return(
        <div className='navbar'>
            <img src= "" alt="" className='logo'/>
            <ul>
                <button 
                    className='button'
                    onClick={() => navigate("/Graphic")}
                    >Graphic</button>
                <button className='button'  onClick={() => navigate("/Illustration")}>Illustration</button>
                <button className='button'  onClick={() => navigate("/UxUi")}>UX/UI</button>
                <button className='button'  onClick={() => navigate("/About")}>About</button>
                <button className='button'  onClick={() => navigate("/Instagram")}>Instagram</button>
            </ul>
        </div>
    )
}
 
export default Navbar