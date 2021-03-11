import React from 'react';
import classes from '../Education/Education.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const education = () => (
    <div>
        <Row>
            <Col>
                <div className={classes.EducationTitle}>
                    <h4>Education</h4>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className={classes.EducationColumn}>
                <div className={classes.EducationSection}>
                    <div className={classes.EducationYear}>
                        <h5>2009-2013</h5>
                    </div>
                    <div>
                        <h6>CEGEP VANIER </h6>
                        <h6>DEC IN COMPUTER SCIENCE </h6>
                        <p>
                            Received my DEC in Computer Science and technology in 2013
                        </p>
                    </div>
                </div>
            </Col>
            <Col className={classes.EducationColumn}>
                <div className={classes.EducationSection}>
                    <div className={classes.EducationYear}>
                        <h5>2014-2021</h5>
                    </div>
                    <div>
                        <h6>CONCORDIA UNIVERSITY </h6>
                        <h6>BACHELORS IN COMPUTER SCIENCE</h6>
                        <p>
                            Currently pursuing my Bachelor's Degree in Computer Science, Option: Web Services and Application.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
);

export default education;