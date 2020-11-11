import React, { Component } from 'react';
import Header from './Home/Header/Header';
import MainBody from './Home/MainBody/MainBody';

import classes from './Layout.module.css';


class Layout extends Component {

    render() {
        return(
            <div className={classes.HomeBackground}>
                <Header />
                <MainBody />
            </div>
        );
    }

}

export default Layout;