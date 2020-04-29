import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

//Bootstrap Imports
import Navbar from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const headerComponent = (props) => {
    return(
        <div className="header">
         <Container fluid>
         <Navbar className="wholeNav">
            <Row>
                <Col sm={2}>
                    <NavbarBrand className="NavBarBrand" href="#"> KEN SERRANO </NavbarBrand>
                </Col>
                <Col sm={10}>
                    <div className="NavBarItems">
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickAbout} className="NavBarLink" href="#"> About </Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickPhotog} className="NavBarLink" href="#"> Photography </Navbar.Link>
                        </Navbar.Item>
                    </div>
                </Col>
            </Row>
         </Navbar>
         </Container>
        </div>
    );
}

export default headerComponent;