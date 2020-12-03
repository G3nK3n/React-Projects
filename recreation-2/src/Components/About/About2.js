import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Img1 from '../../earth-satellite.jpg';
import classes from '../About/About2.module.css';


const about2 = () => (
    <div>
        <div className={classes.About2FirstRow}>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div>
                            <h2>We have more templates for you</h2>
                            <p>
                                Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. 
                                But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. 
                                Maybe you’re looking for something different, something special. 
                                And we love the challenge of doing something different and something special.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <img src={Img1} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
);

export default about2;