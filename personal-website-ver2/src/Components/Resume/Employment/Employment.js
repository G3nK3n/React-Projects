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
                    <div>
                        <h6>Tennaquip - Senneville</h6>
                        <p>2008-2021</p>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    
);

export default employment;