import React from 'react';
import classes from '../Resume/Resume.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const resume = () => (
    <div className={classes.ResumeBorder}>
        <Container className={classes.ResumeContainer}>
            <Row>
                <Col>
                    <div className={classes.Resume}>
                        <div className={classes.ResumeInsideDiv}>
                            <h1>Resume</h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default resume;