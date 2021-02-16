import React from 'react';
import classes from '../Employment/Employment.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const employment = () => (
    <div className={classes.EmploymentBorder}>
        <Row>
            <Col>
                <div className={classes.EmploymentTitle}>
                    <h4>Employment</h4>
                </div>
            </Col>
        </Row>
        <div className={classes.EmploymentSection}>
            <Row>
                <Col>
                    <div className={classes.WorkPositionTitle}>
                        <div className={classes.WorkPositionInside} >
                            <h5>WAREHOUSE CLERK</h5>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.CurrentWork}>
                        <h6>TENAQUIP - SENNEVILLE</h6>
                        <p>2008-2021</p>
                        <div>
                            <p>
                                Currently working in this company as a warehouse clerk. Some of the task I currently do would be picking orders using
                                an RF scanner in the warehouse, receiving shipments from the company's many suppliers and preparing orders that would
                                would be ready to ship.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    
);

export default employment;