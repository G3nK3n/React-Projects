import React, { Component } from 'react';
import './App.css';
import Input from './User/UserInput';
import Output from './User/UserOutput';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Input />
        <Output username="Ken"/>
        <Output />
        <Output />
      </div>
    );
  }
  
}

export default App;
