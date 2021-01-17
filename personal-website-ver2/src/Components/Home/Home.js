import React from 'react';
import classes from '../Home/Home.module.css';
import GlitchClip from 'react-glitch-effect/core/Clip'; //Just for fun, will remove later

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const homePage = () => (
    <div>
        <Container>
            <Row>
                <Col>
                    <div className={classes.HomeText}>
                        <GlitchClip duration={"2s"}>
                            <h1>KENNETH SERRANO</h1>
                        </GlitchClip>
                        <div className={classes.JobTitle}>
                            <p>Web Developer - Amateur Photographer</p>
                        </div>        
                    </div>
                </Col>
            </Row>
        </Container>
        
    </div>
);

export default homePage;