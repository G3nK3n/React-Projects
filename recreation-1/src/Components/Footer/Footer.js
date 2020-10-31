import React from 'react';
import classes from '../Footer/Footer.module.css';

import 'bootstrap/dist/css/bootstrap.min.css'; //Must include this to make Bootstrap work? Not sure....
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const footer = props => (
    <div className={classes.Links}>
        <Container>
            <Row>
                <Col>
                    <div className={classes.Leftlinks}>
                        <p>@Kenneth Serrano | <a href="#home">Privacy Policy</a>   | <a href="#home">Terms and Condition</a> </p>
                    </div>
                </Col>
                <Col>
                    <div className={classes.Rightlinks}>
                        <ul>
                            <li>
                                <a href="#twitter">Twitter</a>
                            </li>
                            <li>
                                <a href="#facebook">Facebook</a>
                            </li>
                            <li>
                                <a href="#google+">Google+</a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default footer;