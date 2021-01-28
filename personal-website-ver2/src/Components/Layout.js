import React, { Component } from 'react';
import classes from '../Components/Layout.module.css';

import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import ContactMe from '../Components/ContactMe/ContactMe';
import AboutMe from '../Components/AboutMe/AboutMe';


class Layout extends Component {
    render() {
        return(
            <div>
                <Header />
                <AboutMe />
                {/* <ContactMe /> */}
                {/* <Home /> */}
            </div>
        );
    }
}

export default Layout;