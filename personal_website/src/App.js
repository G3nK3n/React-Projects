import React, { Component } from 'react';
import Header from './AllComponents/Header.js';
import About from './AllComponents/About.js';
import Photography from './AllComponents/Photography.js';
import '../src/App.css';
import { CSSTransition } from 'react-transition-group';

class App extends Component {

  state = {
    showAbout: false, 
    showPhotography: true
  }

  showAboutPage = () => {
    const wtv = this.state.showAbout
    this.setState({showAbout: !wtv, showPhotography: false})
  }

  showPhotogPage = () => {
    const wtv = this.state.showPhotography
    this.setState({showAbout: false, showPhotography: !wtv})
  }

  render() {

  let thePage = null;

  if(this.state.showAbout) {
    thePage = (
      <div>
         <About />
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
    
  
  return(
      <div>
        <Header clickAbout={this.showAboutPage} clickPhotog={this.showPhotogPage}/>
         {/*
         <Header clickAbout={this.showAboutPage} clickPhotog={this.showPhotogPage}/>
         <CSSTransition
              in={this.state.showAbout}
              timeout={{enter:3000, exit:5000 }}
              classNames={'fade'}>
            <div>
              {thePage}
            </div>
         </CSSTransition>
         */}
         {thePage}
      </div>

    );
  }
}

export default App;


// FIX THE EXIT OF REACT TRANSITION GROUP