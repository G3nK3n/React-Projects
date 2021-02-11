import React from 'react';
import classes from '../Employment/Employment.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const employment = () => (
    <div>
        <Row>
            <Col>
                <div className={classes.EmploymentTitle}>
                    <h4>Employment</h4>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className={classes.WorkPositionTitle}>
                    <h5>Warehouse Clerk</h5>
                </div>
            </Col>
        </Row>
    </div>
    
);

export default employment;