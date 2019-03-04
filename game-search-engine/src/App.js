import React, { Component } from 'react';
import './App.css';
import TheHeader from './TheHeader';
import SearchBox from './SearchBox';

class App extends Component {
  render() {
    return (
      <div>
      <TheHeader></TheHeader>
      <SearchBox></SearchBox>
      </div>
    );
  }
}

export default App;
