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

  nameChangeHandler = (event, id) => {
    //Checks and sees if the id matches with the one that is being changed.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //This gets a reference of the state with the index of the one we were looking for.
    //Note that we did the spread operator to get a copy of the state, to not work directly 
    //on the states.
    const person = {
      ...this.state.persons[personIndex]
    };

    //This changes the value of the event(textbox)
    person.name = event.target.value;

    //Gets a copy of the whole state, 
    //then set the updated object to the state that is updating.
    //You should do this to avoid working with the state directly, for security purposes.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //This will update the state to the changes provided above.
    this.setState({persons: persons});
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
          return <Person name={thePerson.name} click={() => this.deletePersonHandler(index)} key={thePerson.id} change={(event) => this.nameChangeHandler(event, thePerson.id )}/>
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
