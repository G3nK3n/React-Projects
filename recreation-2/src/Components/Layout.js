import React, { Component } from 'react';
import classes from './Layout.module.css';

//These imports are for the Header links and Footer Links
import Header from './Home/Header/Header';
import LinksFooter from './Home/LinksFooter/LinksFooter';

//These imports are for the Home Page
import MainBody from './Home/MainBody/MainBody';
import Mission from './Home/Mission/Mission';
import Bottom from './Home/BottomSection/BottomSection';

//These imports are for the About Page
import About from './About/About';

//These imports are for the Blog Page
import Blog from '../Components/Blog/Blog';


class Layout extends Component {

    state = {
        showHome: false,
        showAbout: false, 
        showBlog: true
    }

    showHomePage = () => {
        const selectedState = this.state.showHome;
        this.setState({showHome:true, showAbout:false})
    }


    render() {

        let thePage=null;

        if(this.state.showHome){
            thePage= (
                <div>
                    <MainBody />
                    <Mission />
                    <Bottom />
                </div>
            );
        }
        else if(this.state.showAbout) {
            thePage = (
                <div>
                    <About />
                </div>
            )
        }
        else if(this.state.showBlog) {
            thePage = (
                <div>
                    <Blog />
                </div>
            )
        }

        return(
            <div className={classes.HomeBackground}>
                <Header clickHomePage={this.showHomePage}/>
                    {thePage}
                <LinksFooter />
            </div>
        );
    }

}

export default Layout;