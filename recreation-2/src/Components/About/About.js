import React from 'react';
import classes from '../About/About.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import About2 from '../About/About2';

const aboutPage = () => (
    <div>
        <div className={classes.AboutDivRow}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.AboutDiv}>
                            <h1>About</h1>
                            <h2>We have free templates for everyone</h2>
                            <p>
                                Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. 
                                What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, 
                                so long as you agree with the Terms of Use. You can even remove all our links if you want to.
                            </p>
                        </div>
                    </Col>
                </Row>
                
                {/* Find the right props to store background of About row */}
            </Container>
        </div>
        <About2 />
    </div>
);

export default aboutPage;