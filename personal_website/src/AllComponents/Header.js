import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

//Bootstrap Imports
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//Used for Responsive behavior
import Navbar from 'react-bootstrap/Navbar';

const headerComponent = (props) => {
    
    
    
    return(
        <div className="header">
         <Container fluid>
         <Nav className="wholeNav">
            <Row>
                <Col sm={3} md={3} lg={2} className="d-none d-sm-block" > 
                    <NavbarBrand onClick={props.clickHome}className="NavBarBrand" href="#"> KEN SERRANO </NavbarBrand>
                </Col>

                <Col sm={9} md={9} lg={10} className="d-none d-sm-block">
                    <div className="NavBarItems">
                        <Nav.Item>
                            <Nav.Link onClick={props.clickResume} className="NavBarLink" href="#"> Resume </Nav.Link>
                        </Nav.Item>
                        <vl className="someVerticalLine2"/>
                        <Nav.Item>
                            <Nav.Link onClick={props.clickProject} className="NavBarLink" href="#"> Projects </Nav.Link>
                        </Nav.Item>
                        <vl className="someVerticalLine2"/>
                        <Nav.Item>
                            <Nav.Link onClick={props.clickPhotog} className="NavBarLink" href="#"> Photography </Nav.Link>
                        </Nav.Item>
                        <vl className="someVerticalLine2"/>
                        <Nav.Item>
                            <Nav.Link className="NavBarLink" onClick={props.clickAbout} href="#"> About </Nav.Link>
                        </Nav.Item>
                        <vl className="someVerticalLine2"/>
                        <Nav.Item>
                            <Nav.Link onClick={props.clickContact} className="NavBarLink" href="#"> Contact </Nav.Link>
                        </Nav.Item>
                    </div>
                </Col>

                {/* RESPONSIVE HEADER */}
                <Col xs={12} className="d-block d-sm-none">
                    <Navbar expand="lg" variant="dark">
                    <Navbar.Brand onClick={props.clickHome} className="NavBarBrand"  href="#"> KEN SERRANO </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="NavBarItems">
                            <Nav.Item>
                                <Nav.Link onClick={props.clickResume} className="NavBarLink" href="#"> Resume </Nav.Link>
                            </Nav.Item>
                            <vl className="someVerticalLine2"/>
                            <Nav.Item>
                                <Nav.Link onClick={props.clickProject} className="NavBarLink" href="#"> Projects </Nav.Link>
                            </Nav.Item>
                            <vl className="someVerticalLine2"/>
                            <Nav.Item>
                                <Nav.Link onClick={props.clickPhotog} className="NavBarLink" href="#"> Photography </Nav.Link>
                            </Nav.Item>
                            <vl className="someVerticalLine2"/>
                            <Nav.Item>
                                <Nav.Link className="NavBarLink" onClick={props.clickAbout} href="#"> About </Nav.Link>
                            </Nav.Item>
                            <vl className="someVerticalLine2"/>
                            <Nav.Item>
                                <Nav.Link onClick={props.clickContact} className="NavBarLink" href="#"> Contact </Nav.Link>
                            </Nav.Item>
                        </div>   
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
         </Nav>
         </Container>
        </div>
    );
}

export default headerComponent;