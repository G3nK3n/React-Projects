import React, { Component } from 'react';
import classes from '../Components/Layout.module.css';

import Header from '../Components/Header/Header';

import Home from '../Components/Home/Home';


class Layout extends Component {
    render() {
        return(
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

export default Layout;