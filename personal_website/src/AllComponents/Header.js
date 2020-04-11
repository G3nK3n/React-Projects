import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

//Bootstrap Imports
import Navbar from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Container from 'react-bootstrap/Container';

const headerComponent = (props) => {
    return(
        <div className="header">
         <Container fluid>
         <Navbar>
            <NavbarBrand className="NavBarBrand" href="#"> KEN SERRANO </NavbarBrand>
            <Navbar.Item>
                <Navbar.Link onClick={props.clickAbout} className="NavBarLink" href="#"> About </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
                <Navbar.Link onClick={props.clickPhotog} className="NavBarLink" href="#"> Photography </Navbar.Link>
            </Navbar.Item>
            <Navbar.Item>
                <Navbar.Link className="NavBarLink" href="#"> Portfolio </Navbar.Link>
            </Navbar.Item>
         </Navbar>
         </Container>
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