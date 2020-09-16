import React from 'react';
import classes from '../Header/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Must include this to make Bootstrap work? Not sure....
//import Container from 'react-bootstrap/Container';
//import NavbarBrand from 'react-bootstrap/NavbarBrand';
//import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const header = props => (
    <div className={classes.Header}>
        <Button>Hello</Button>
    </div>
);

export default header;