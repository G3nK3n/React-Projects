import React, { Component } from 'react';
import Header from './AllComponents/Header.js';
import About from './AllComponents/About.js';

class App extends Component {
  render() {
    return(
      <div>
         <Header />
         <About />
      </div>

    );
  }
}

export default App;
