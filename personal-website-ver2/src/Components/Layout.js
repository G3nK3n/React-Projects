import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from '../Components/Layout.module.css';

import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import ContactMe from '../Components/ContactMe/ContactMe';
import AboutMe from '../Components/AboutMe/AboutMe';
import Resume from '../Components/Resume/Resume';


class Layout extends Component {
    render() {
        return(
            <div>
                <Header />
                <Route path="/" component={Home} exact/>
                <Route path="/resume" component={Resume} exact/>
                {/* <Route path="/project" component={Home} exact/> */}
                <Route path="/about" component={AboutMe} exact/>
                <Route path="/contact" component={ContactMe} exact/>
            </div>
        );
    }
}

export default Layout;