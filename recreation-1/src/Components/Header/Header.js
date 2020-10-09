import React from 'react';
import classes from '../Header/Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Must include this to make Bootstrap work? Not sure....
//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Links from '../Header/HeaderList/HeaderList';



const header = props => (
    <div className={classes.Header}>
        <Navbar>
            <Navbar.Brand href="#home">SAVERIO SALERMO</Navbar.Brand>
            <Links />
            {/* Make container and add css modules for these links to match recreation */}
        </Navbar>
    </div>
);

export default header;