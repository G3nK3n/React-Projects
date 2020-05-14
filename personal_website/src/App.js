import React, { Component } from 'react';
import Header from './AllComponents/Header.js';
import Resume from './AllComponents/Resume.js';
import About from './AllComponents/About.js';
import Photography from './AllComponents/Photography.js';
import Contact from './AllComponents/Contact.js';
import Home from './AllComponents/Home.js';
import '../src/App.css';
//import { CSSTransition } from 'react-transition-group';

class App extends Component {

  state = {
    showHome: true,
    showResume: false, 
    showPhotography: false,
    showAbout: false,
    showContact: false
  }

  showResumePage = () => {
    const wtv = this.state.showResume
    this.setState({showResume: !wtv, showPhotography: false, showAbout: false, showContact: false, showHome: false})
  }

  showPhotogPage = () => {
    const wtv = this.state.showPhotography
    this.setState({showResume: false, showPhotography: !wtv, showAbout: false, showContact: false, showHome: false})
  }

  showAboutPage = () => {
    const wtv = this.state.showAbout
    this.setState({showResume: false, showPhotography: false, showAbout: !wtv, showContact:false, showHome: false})
  }

  showContactPage = () => {
    const wtv = this.state.showContact
    this.setState({showResume: false, showPhotography: false, showAbout: false, showContact: !wtv, showHome: false})
  }

  showHomePage = () => {
    this.setState({showResume: false, showPhotography: false, showAbout: false, showContact: false, showHome: true})
  }

  render() {

  let thePage = null;

  if(this.state.showResume) {
    thePage = (
      <div>
         <Resume />
      </div>
    )
  } 
  else if (this.state.showPhotography) {
    thePage = (
      <div>
          <Photography />
      </div>
    )
  }
  else if (this.state.showAbout) {
    thePage = (
      <div>
          <About />
      </div>
    )
  }
  else if (this.state.showContact) {
    thePage = (
      <div>
          <Contact />
      </div>
    )
  }
  else if (this.state.showHome) {
    thePage = (
      <div>
        <Home />
      </div>
    )
  } 
    
  return(
      <div>
        <Header clickResume={this.showResumePage} clickPhotog={this.showPhotogPage} clickAbout={this.showAboutPage} 
          clickContact={this.showContactPage} clickHome={this.showHomePage}/>
         {thePage}
      </div>

    );
  }
}

export default App;