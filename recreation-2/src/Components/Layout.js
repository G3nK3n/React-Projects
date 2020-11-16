import React, { Component } from 'react';
import Header from './Home/Header/Header';
import MainBody from './Home/MainBody/MainBody';
import Mission from './Home/Mission/Mission';
import Bottom from './Home/BottomSection/BottomSection';

import classes from './Layout.module.css';


class Layout extends Component {

    render() {
        return(
            <div className={classes.HomeBackground}>
                <Header />
                <MainBody />
                <Mission />
                <Bottom />
            </div>
        );
    }

}

export default Layout;