import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Ken' },
      { name: 'Kev' }, 
      { name: 'wtv' }
    ]
  }

  switchMethodHandler = () => {
    //console.log('It is clicked!');
    // DONT DO THIS this.state.persons[0].name = "Other name";
    this.setState({
      persons: [
      { name: 'NewName' },
      { name: 'Kev' }, 
      { name: 'wtv' }
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! lol</h1>
        <button onClick={this.switchMethodHandler}>Some Button</button>
        <Person name={this.state.persons[0].name}>Is this working?</Person>
        <Person name={this.state.persons[1].name}>Now?</Person>
        <Person name={this.state.persons[2].name}>How about now?</Person>
      </div>
    );
  }
}

export default App;
