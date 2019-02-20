import React, { Component } from 'react';
import SomeList from './FullList';
//import Theme from './ThemeSwitcher'
import './App.css';
//import Input from './InputOfList';
//import ToDo from './ToDoList.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SomeList> </SomeList>
      </div>
    );
  }
}

export default App;
