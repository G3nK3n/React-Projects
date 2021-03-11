import React from 'react';
import classes from '../Resume/Resume.module.css';
import Employment from '../Resume/Employment/Employment';
import Education from '../Resume/Education/Education';


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

            <Row className={classes.SkillRow}>
                <Col>
                    <div className={classes.SkillTitle}>
                        <h4>Skills</h4>
                    </div>
                </Col>
            </Row>
            <Row className={classes.SkillListRow}>
                <Col>
                    <div className={classes.SkillList}>
                        <h5>Highly Proficient</h5>
                        <div>
                            <ul>
                                <li>Java</li>
                                <li>Visual Basic</li>
                                <li>VBA</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={classes.SkillList}>
                        <h5>Basic Knowledge</h5>
                        <ul>
                            <li>C++</li>
                            <li>ASP.NET</li>
                            <li>ReactJS</li>
                            <li>Python</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className={classes.SkillList}>
                        <h5>Environments</h5>
                        <ul>
                            <li>Eclipse</li>
                            <li>Visual Studio Code</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Employment />
            <Education />
        </Container>
    </div>
)

export default resume;