import React, { Component } from 'react';
import classes from '../Components/Layout.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



import Header from '../Components/Header/Header';



class Layout extends Component {
    render() {
        return(
            <div>
                <div className={classes.MainLayout}>
                    <Container className={classes.Container}>
                        <Header />
                    </Container>
                </div>
            </div>
        )
    }
}

export default Layout;