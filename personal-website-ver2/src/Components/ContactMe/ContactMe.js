import React from 'react';
import classes from '../ContactMe/ContactMe.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const contactme = () => (
    <div className={classes.FormBorder}>
        <Container className={classes.ContactMeContainer}>
            <Row>
                <Col>
                    <div className={classes.ContactMe}>
                        <div className={classes.ContactMeInsideDiv}>
                            <h1>Contact Me</h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Name"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control size="sm" type="text" placeholder="Enter Email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={7} size="sm" type="text" placeholder="Enter Message"/>
                            </Form.Group>
                            <Button variant="secondary" type="button">
                                Send
                            </Button>
                        </Form>            
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default contactme;