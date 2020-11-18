import React from 'react';

import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import classes from '../LinksFooter/LinksFooter.module.css';


const linkfooter = () => (
    <div>
        <Row className={classes.RowMargin}>
            <div className={classes.SocialMedia}>
                <h1>Follow our Missions on</h1>
                <div>
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
            </div>
        </Row>
    </div>
)

export default linkfooter;