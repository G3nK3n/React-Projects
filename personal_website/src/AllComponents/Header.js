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
                <Col sm md lg={2}>
                    <NavbarBrand onClick={props.clickHome}className="NavBarBrand" href="#"> KEN SERRANO </NavbarBrand>
                </Col>
                <Col sm md lg={10}>
                    <div className="NavBarItems">
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickResume} className="NavBarLink" href="#"> Resume </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickProject} className="NavBarLink" href="#"> Projects </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickPhotog} className="NavBarLink" href="#"> Photography </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link className="NavBarLink" onClick={props.clickAbout} href="#"> About Me </Navbar.Link>
                        </Navbar.Item>
                        <vl className="someVerticalLine2"/>
                        <Navbar.Item>
                            <Navbar.Link onClick={props.clickContact} className="NavBarLink" href="#"> Contact Me </Navbar.Link>
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