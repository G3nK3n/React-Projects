import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Need this for Bootstrap as well

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Fade-in animation and const
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const TheFade = styled.div`
  animation: 0.3s ${fadeAnimation};
`;

//MORE PROJECTS WILL BE ADDED ONCE I CREATE MORE PROJECTS
const projectPage = props => {
    return(
        <div>
            <TheFade>
                <Container className="AboutDiv2">
                    <Row>
                        <Col>
                            <div className="AboutMeTitle">
                                <h1 className="ResumeTitle2">UNDER CONSTRUCTION!!</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </TheFade>
        </div>
    )
}

export default projectPage;