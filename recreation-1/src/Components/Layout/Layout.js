import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import classes from '../Layout/Layout.module.css';

import Header from '../Header/Header';
import MainPage from '../MainBody/MainBody';
import MainPage2 from '../MainBody2/MainBody2';
import Footer from '../Footer/Footer';

const layout = props => (
    <div>
        <Container className={classes.Container} fluid>
            <Header />
            <MainPage />
            <MainPage2 />
            <Footer />
        </Container> 
    </div>
);

export default layout;