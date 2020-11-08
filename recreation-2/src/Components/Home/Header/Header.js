import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../Header/Header.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../../logo.png';


const header = () => (
    <div className={classes.Header}>
        <Container>
            <Navbar >
                <a href="javascript:void(0)" ><img src={logo} /></a>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    <Nav.Link>Projects</Nav.Link>
                    <Nav.Link>Blog</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    </div>
)

export default header;