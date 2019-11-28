import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'wtv1', name: 'Ken' },
      { id: 'wtv2', name: 'Kev' }, 
      { id: 'wtv3', name: 'wtv' }
    ],
    anotherState: 'Some value', 
    showPersons: false
  }

  deletePersonHandler = (personDeleting) => {
    //Slice creates a copy of the state array instead of using the original one.
    const persons = this.state.persons.slice();
    persons.splice(personDeleting, 1);
    this.setState({persons: persons});
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

  let persons = null;

  if(this.state.showPersons) {
    persons = (
      <div>
        
        {this.state.persons.map((thePerson, index) => {
          //This outputs all the components using map functions
          //Key props identifies each component uniquely
          return <Person name={thePerson.name} click={() => this.deletePersonHandler(index)} key={thePerson.id} />
        })}
      </div>
    )
  }

    return (
      <div className="App">
        <h1>People</h1>
        <button style={style} onClick={this.togglePersonHandler}>Show Person</button>
        {persons}    
      </div>
    );
  }
}

export default App;
