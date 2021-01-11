import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

class Layout extends Component {
    render() {
        return(
            <div>
                {/* Added Link so that page would not reload, which would reset everything */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
            </div>
        )
    }
}

export default Layout;