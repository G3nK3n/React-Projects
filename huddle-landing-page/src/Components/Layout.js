import React, { Component } from 'react';
import classes from '../Components/Layout.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



import Header from '../Components/Header/Header';
import MainBody from '../Components/MainBody/MainBody';
import Footer from '../Components/Footer/Footer';



class Layout extends Component {
    render() {
        return(
            <div>
                <div className={classes.MainLayout}>
                    <div className={classes.TheContainer}>
                        <Header />
                        <MainBody />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;