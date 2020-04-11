import React, { Component } from 'react';
import Header from './AllComponents/Header.js';
import About from './AllComponents/About.js';
import Photography from './AllComponents/Photography.js';

class App extends Component {

  state = {
    showAbout: false, 
    showPhotography: false
  }

  showAboutPage = () => {
    const showOrNot = this.state.showAbout;
    this.setState({showAbout: !showOrNot})
  }

  showPhotogPage = () => {
    const showOrNot2 = this.state.showPhotography;
    this.setState({showPhotography: !showOrNot2})
  }

  render() {

  let thePage = null;

  if(this.state.showAbout) {
    // this.setState({showPhotogPage: false})
    thePage = (
      <div>
        <About />
      </div>
    )
  }
  
  if (this.state.showPhotography) {
    // this.setState({showAboutPage: false})
    thePage = (
      <div>
        <Photography />
      </div>
    )
  }
  
    return(
      <div>
         <Header clickAbout={this.showAboutPage} clickPhotog={this.showPhotogPage}/>
         {thePage}
      </div>

    );
  }
}

export default App;
