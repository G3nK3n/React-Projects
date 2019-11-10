import React, { Component } from 'react';
import './App.css';
import Input from './User/UserInput';
import Output from './User/UserOutput';

class App extends Component {
  
  state = {
    usernames: [
      { name: "Kenneth" },
      { name: "Kev" },
      { name: "Data Binding Name :)" }
    ]
  }

  switchNameHandler = (newname) => {
    this.setState({
      usernames: [
        { name: "Kenneth" },
        { name: "Kev" },
        { name: newname }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      usernames: [
        { name: "Kenneth" },
        { name: "Kev" },
        { name: event.target.value }
      ]
    })
  }

  render(){

    return (
      <div className="App">
        <Input changename={this.changeNameHandler}/>
        <Output click={this.switchNameHandler.bind(this, "Sorey")} username="Ken" />
        <Output username={this.state.usernames[1].name}/>
        <Output username={this.state.usernames[2].name}/> 
      </div>
      //In the rnder function, we chose the last Output component for changing the name with the event handler.
    );
  }
  
}

export default App;
