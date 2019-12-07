import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text: ""
  }

  stringLengthOutput = (event) => {
    const string_array = event.target.value.split(',')
    
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Textbox</h1>
        <input type="text" onChange={(event) => this.stringLengthOutput(event)}/>
        <p>The length of the text above is: {this.state.text}</p>
      </div>
    );
  }
  
}

//FIGURE OUT HOW TO COUNT NUMBER OF CHARACTERS IN ARRAY

export default App;
