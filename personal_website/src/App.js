import React, { Component } from 'react';
import Header from './AllComponents/Header.js';
import About from './AllComponents/About.js';
import Photography from './AllComponents/Photography.js';
import { CSSTransition } from 'react-transition-group';

class App extends Component {

  state = {
    showAbout: false, 
    showPhotography: false
  }

  showAboutPage = () => {
    //TEMPORARLY
    let wtv = this.state.showAbout
    this.setState({showAbout: !wtv, showPhotography: false})
  }

  showPhotogPage = () => {
    this.setState({showPhotography: true, showAbout: false})
  }

  render() {

  let thePage = null;

  if(this.state.showAbout) {
    thePage = (
      <div>
        <CSSTransition
              in={this.state.showAbout}
              appear={true}
              timeout={600}
              unmountOnExit
              exit={true}
              classNames="fade"
            >
          <About />
        </CSSTransition>
      </div>
    )
  }
  
  if (this.state.showPhotography) {
    thePage = (
      <div>
          <Photography />
      </div>
    )
  }
  
    return(
      <div>
         <Header clickAbout={this.showAboutPage} clickPhotog={this.showPhotogPage}/>
            <div>
              {thePage}
            </div>
      </div>

    );
  }
}

export default App;


// FIX THE EXIT OF REACT TRANSITION GROUP