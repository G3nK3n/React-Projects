import React, { Component } from 'react';
import classes from '../Components/Layout.module.css';

import Header from '../Components/Header/Header';

import Home from '../Components/Home/Home';

import ContactMe from '../Components/ContactMe/ContactMe';


class Layout extends Component {
    render() {
        return(
            <div>
                <Header />
                <ContactMe />
                {/* <Home /> */}
            </div>
        );
    }
}

export default Layout;