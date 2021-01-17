import React from 'react';
import classes from '../ContactMe/ContactMe.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const contactme = () => (
    <div>
        <Container className={classes.ContactMeContainer}>
            <Row>
                <Col>
                    <div className={classes.ContactMe}>
                        <h1>Contact Me</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default contactme;