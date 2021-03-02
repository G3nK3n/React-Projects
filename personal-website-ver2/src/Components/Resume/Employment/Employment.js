import React from 'react';
import classes from '../Employment/Employment.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const employment = () => (
    <div className={classes.OuterEmploymentBorder}>
        <Row>
            <Col>
                <div className={classes.EmploymentTitle}>
                    <h4>Employment</h4>
                </div>
            </Col>
        </Row>
            <div className={classes.InnerEmploymentBorder}>
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
                    <Row className={classes.EmploymentSecondRow}>
                        <Col className={classes.EmploymentCol}>
                            <div className={classes.WorkPositionTitle}>
                                <div className={classes.PreviousWorkPositionInside} >
                                    <h5>OFFICE ASSISTANT</h5>
                                </div>
                                <div className={classes.PreviousWork}>
                                    <h6>VILLE DE D.D.O. - DOLLARD-DES-ORMEAUX</h6>
                                    <p>May 2019 - March 2020</p>
                                    <p>
                                        Previously worked as an office assistant in the civic center of DDO. Some of the task I have done would be
                                        entering data and filing documents, handling customer service duties, both in person and over the phone, and 
                                        converting documents into digital formats, which makes them more accessible online.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.WorkPositionTitle}>
                                <div className={classes.PreviousWorkPositionInside} >
                                    <h5>WEB DEVELOPER INTERN</h5>
                                </div>
                                <div className={classes.PreviousWork}>
                                    <h6>TENAQUIP - SENNEVILLE</h6>
                                    <p>May - Juky 2018</p>
                                    <p>
                                        Previously worked as a Web Developer intern during the summer. Some of the task I have done would be
                                        converting SCN dealer's website onto a new platform, which includes mobile friendly languages such as Bootstrap 3.
                                        Other task included were styling the dealer's websites using CSS and JavaScript, and creating an SSL certificate form
                                        for our customers using CSS, JavaScript and JQuery.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className={classes.EmploymentSecondRow}>
                        <Col className={classes.EmploymentCol}>
                            <div className={classes.WorkPositionTitle}>
                                <div className={classes.PreviousWorkPositionInside} >
                                    <h5>SOFTWARE DEVELOPER INTERN</h5>
                                </div>
                                <div className={classes.PreviousWork}>
                                    <h6>CANADA POST - MONTREAL</h6>
                                    <p>May 2017 - August 2017</p>
                                    <p>
                                        Previously worked as a software developer intern during the summer. Some of the task I have done would be 
                                        optimizing their database to make it more faster and efficient while using MS Access. Other tasks included are
                                        reworking the back-end of their VBA application according to the newly optimized database and also creating a new 
                                        version of their VBA app. Some minor tasks included were debugging their report page, fixing minor bugs and errors.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={classes.WorkPositionTitle}>
                                <div className={classes.PreviousWorkPositionInside} >
                                    <h5>WEB DEVELOPER INTERN</h5>
                                </div>
                                <div className={classes.PreviousWork}>
                                    <h6>EXCENDIA - MONTREAL</h6>
                                    <p>August - December 2012</p>
                                    <p>
                                        Previosuly worked as a Web Developer intern during my final semester in CEGEP. Some of the task included were
                                        debugging their support page, fixing minor bugs and errors. Other tasks included were creating a SOAP web services application 
                                        using PHP, testing webpages on different type of mobile phones, and creating different color themes for their main website.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
    </div>
    
);

export default employment;