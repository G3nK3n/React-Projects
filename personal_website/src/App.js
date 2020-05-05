import React, { Component } from 'react';
import Header from './AllComponents/Header.js';
import Resume from './AllComponents/Resume.js';
import About from './AllComponents/About.js';
import Photography from './AllComponents/Photography.js';
import '../src/App.css';
//import { CSSTransition } from 'react-transition-group';

class App extends Component {

  state = {
    showResume: true, 
    showPhotography: false,
    showAbout: false
  }

  showResumePage = () => {
    const wtv = this.state.showResume
    this.setState({showResume: !wtv, showPhotography: false, showAbout: false})
  }

  showPhotogPage = () => {
    const wtv = this.state.showPhotography
    this.setState({showResume: false, showPhotography: !wtv, showAbout: false})
  }

  showAboutPage = () => {
    const wtv = this.state.showAbout
    this.setState({showResume: false, showPhotography: false, showAbout: !wtv})
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
    
  
  return(
      <div>
        <Header clickResume={this.showResumePage} clickPhotog={this.showPhotogPage} clickAbout={this.showAboutPage}/>
         {thePage}
      </div>

    );
  }
}

export default App;


// FIX THE EXIT OF REACT TRANSITION GROUP