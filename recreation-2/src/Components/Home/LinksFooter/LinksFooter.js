import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import classes from '../LinksFooter/LinksFooter.module.css';


const linkfooter = () => (
    <div>
        <Row className={classes.RowMargin}>
            <Col>
                <div className={classes.Text}>
                    <h1>Follow our Missions on</h1>
                </div>
            </Col>
            <Col>
                <div className={classes.SocialMedia}>
                    <ul>
                        <li>
                            FB
                        </li>
                        <li>
                            IG
                        </li>
                        <li>
                            G+
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
        <Row className={classes.FooterRow}>
            <Col>
                <div className={classes.Footer}>
                    <p>© 2023 By Space Prospection | All Right Reserved</p>
                </div>
            </Col>
        </Row>
    </div>
)

export default linkfooter;