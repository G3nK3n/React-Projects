import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../Header/Header.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const header = () => (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={classes.Logo}>
                        <h1>Ken Serrano</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.Links}>
                        {/* Used Link so page will not reload and reset everything */}
                        <Link className={classes.HomeLink} to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default header;