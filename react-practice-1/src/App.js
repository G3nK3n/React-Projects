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

  switchMethodHandler = (newName) => {
    //console.log('It is clicked!');
    // DONT DO THIS this.state.persons[0].name = "Other name";
    this.setState({
      persons: [
      { name: newName },
      { name: 'Kev' }, 
      { name: 'wtv' }
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Ken' },
      { name: event.target.value }, 
      { name: 'wtv' }
      ] 
    })
  }

  render() {

  const style = {
    //JSX style of using styles.
    backgroundColor: 'white', 
    font: 'inherit',
    border: '1x solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

    return (
      <div className="App">
        <h1>Hi! lol</h1>
        <button style={style} onClick={() => this.switchMethodHandler("lol")}>Some Button</button>
        <Person name={this.state.persons[0].name}>Is this working?</Person>
        <Person change={this.nameChangeHandler} click={this.switchMethodHandler.bind(this, "LOL")} name={this.state.persons[1].name}>Now?</Person>
        <Person name={this.state.persons[2].name}>How about now?</Person>
      </div>
    );
  }
}

export default App;
