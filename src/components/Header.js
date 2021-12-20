import React from 'react'
import logo from '../components/intern-medha-logo.png'

const Header = () => {
    return (
        <div id='header' className="d-flex justify-content-around">
            <div className="logo">
                <img src={logo} alt="Logo" style={{height:"58px", width:"129px", cursor:"pointer"}}/>
            </div>
            <div className="center d-flex justify-content-center">
                <div className="discovery adjust mx-5">
                    <i style={{fontSize:"25px"}} className="fas fa-compass"></i>
                    <h5>Discovery</h5>
                </div>   
                <div className="invited adjust mx-5">
                    <i style={{fontSize:"25px"}} className="fas fa-user-friends"></i>
                    <h5>Invited</h5>
                </div>   
                <div className="support adjust mx-5">
                    <i style={{fontSize:"25px"}} className="fas fa-headset"></i>
                    <h5>Support</h5>
                </div>   
            </div>
            <div className="button">
                <button type="button" className="btn btn-outline-success mx-3">Post Job</button>
                <button type="button" className="btn btn-success mx-3">Sign In</button>
            </div>
        </div>
    )
}

export default Header
