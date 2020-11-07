import React from 'react';
import classes from '../StoreLocator/StoreLocator.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const store = () => (
    <div>
        <Container>    
            <Row className={classes.Row}>
                <Col md={3}>
                    <div className={classes.FormDiv}>   
                        <h3>Store Locator</h3>
                        <Form>
                            <Form.Group>
                                <Form.Label>Enter Country</Form.Label>
                                <Form.Control className={classes.FormControl} type="Name" placeholder="Enter Country" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control className={classes.FormControl} type="City" placeholder="Enter City" />
                            </Form.Group>
                            <Button variant="primary" type="button">Find nearest store</Button>
                        </Form>
                    </div>
                </Col>
                <Col md={9}>
                    <div className={classes.ListStore}>
                        <ul>
                            <li>
                                <div>
                                    <h4>High fashion Store</h4>
                                    <p>Collections: Mens/Womans</p>
                                    <p>Address: This is just a placeholder</p>
                                    <p>
                                        Phone: 904-422-5881 <br />
                                        Hours: 10:00-21:00
                                    </p>
                                    <br />
                                    <a href="javascript:void(0)" >View Map</a>

                                    <br /> <br />
                                    -------------------------------
                                    <br /> <br />
                                    
                                    <h4>Couture Runway Mall</h4>
                                    <p>Collections: Mens/Womans</p>
                                    <p>Address: This is just a placeholder</p>
                                    <p>
                                        Phone: 904-422-5881 <br />
                                        Hours: 10:00-21:00
                                    </p>
                                    <br />
                                    <a href="javascript:void(0)" >View Map</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>High fashion Store</h4>
                                    <p>Collections: Mens/Womans</p>
                                    <p>Address: This is just a placeholder</p>
                                    <p>
                                        Phone: 904-422-5881 <br />
                                        Hours: 10:00-21:00
                                    </p>
                                    <br />
                                    <a href="javascript:void(0)" >View Map</a>

                                    <br /> <br />
                                    -------------------------------
                                    <br /> <br />
                                
                                    <h4>High fashion Store</h4>
                                    <p>Collections: Mens/Womans</p>
                                    <p>Address: This is just a placeholder</p>
                                    <p>
                                        Phone: 904-422-5881 <br />
                                        Hours: 10:00-21:00
                                    </p>
                                    <br />
                                    <a href="javascript:void(0)" >View Map</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>High fashion Store</h4>
                                    <p>Collections: Mens/Womans</p>
                                    <p>Address: This is just a placeholder</p>
                                    <p>
                                        Phone: 904-422-5881 <br />
                                        Hours: 10:00-21:00
                                    </p>
                                    <br />
                                    <a href="javascript:void(0)" >View Map</a>

                                    <br /> <br />
                                    -------------------------------
                                    <br /> <br />
                                
                                    <h4>High fashion Store</h4>
                                    <p>Collections: Mens/Womans</p>
                                    <p>Address: This is just a placeholder</p>
                                    <p>
                                        Phone: 904-422-5881 <br />
                                        Hours: 10:00-21:00
                                    </p>
                                    <br />
                                    <a href="javascript:void(0)" >View Map</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default store;