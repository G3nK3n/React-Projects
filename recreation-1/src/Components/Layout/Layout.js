import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import classes from '../Layout/Layout.module.css';

import Header from '../Header/Header';
import MainPage from '../MainBody/MainBody';

const layout = props => (
    <div>
        <Container className={classes.Container} fluid>
            <Header />
            <MainPage />
        </Container> 
    </div>
);

export default layout;