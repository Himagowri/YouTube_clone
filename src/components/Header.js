import React from 'react';
import './Header.css';
import Contact from './ContactUs';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Navbar,NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return(

        <div className="header">

            <div className="header_middle"> 
                <NavLink to="/"><img className="header_logo" src="https://image.flaticon.com/icons/svg/889/889160.svg" alt=""/></NavLink>
            </div>
            
            <div className="header_icons">
                <NavLink classname="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                </NavLink>
            </div>
            
            

        </div>
        
    )
}
export default Header;