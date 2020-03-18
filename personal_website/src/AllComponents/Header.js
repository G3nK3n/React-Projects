import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

//Bootstrap Imports
import Navbar from 'react-bootstrap/Nav';

const headerComponent = (props) => {
    return(
        <div className="header">
         <Navbar className="NavBar">
            <Navbar.Item>
                <Navbar.Link className="NavBarLink" href="#"> About </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
                <Navbar.Link className="NavBarLink" href="#"> Contact </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
                <Navbar.Link className="NavBarLink" href="#"> Portfolio </Navbar.Link>
            </Navbar.Item>
         </Navbar>
         {/*
            <a href="#">
                <img className="homeIcon" src="https://i.pinimg.com/236x/da/e0/92/dae092a545e4c09714ee9842ab15dc10.jpg" alt="home_icon" />
            </a>

            <div className="top_right_links">
                <a className="linkDisplay" href="#">About</a>
                <a className="linkDisplay" href="#">Contact</a>
            </div>
         */}
        </div>
    );
}

export default headerComponent;