import React, { Component } from 'react';
import Header from './AllComponents/Header.js';
import About from './AllComponents/About.js';
import Photography from './AllComponents/Photography.js';

class App extends Component {
  render() {
    return(
      <div>
         <Header />
         {/*<About />*/}
         <Photography />
      </div>

    );
  }
}

export default App;
