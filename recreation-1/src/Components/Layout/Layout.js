import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import classes from '../Layout/Layout.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import MainPage from '../MainBody/MainBody';
import MainPage2 from '../MainBody2/MainBody2';

import About from '../About/About';
import Store from '../StoreLocator/StoreLocator';


class Layout extends Component {
    
    state = {
        showHome: true,
        showAbout: false,
        showStore: false
    }

    showHomePage = () => {
        const selectedState = this.state.showHome
        this.setState({showHome:true, showAbout:false, showStore:false})
    }

    showAboutPage = () => {
        const selectedState = this.state.showAbout
        this.setState({showAbout:true, showHome:false, showStore:false})
    }

    showStorePage = () => {
        const selectedState = this.state.showStore
        this.setState({showHome:false, showAbout:false, showStore:true})
    }

    render() {

        let showPage = null;

        if(this.state.showHome) {
            showPage = (
                <div>
                    <MainPage />
                    <MainPage2 />
                </div>
            )
        }
        else if(this.state.showAbout) {
            showPage = (
                <div>
                    <About />
                </div>
            )
        }
        else if(this.state.showStore) {
            showPage = (
                <div>
                    <Store />
                </div>
            )
        }

        
        return (
            <div>
                <Container className={classes.Container} fluid>
                    <Header clickHomePage={this.showHomePage} clickAboutPage={this.showAboutPage} clickStoreLocator={this.showStorePage}/>
                        {showPage}
                    <Footer />
                </Container> 
            </div>
        )
    }

    
};

export default Layout;