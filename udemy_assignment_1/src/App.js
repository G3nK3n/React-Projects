import React, { Component } from 'react';
import './App.css';
import Input from './User/UserInput';
import Output from './User/UserOutput';

class App extends Component {
  
  state = {
    usernames: [
      { name: "Kenneth" },
      { name: "Kev" },
      { name: "Wtv" }
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

  render(){
    return (
      <div className="App">
        <Input />
        <Output click={this.switchNameHandler.bind(this, "Sorey")} username="Ken" > </Output>
        <Output username={this.state.usernames[1].name}/>
        <Output username={this.state.usernames[2].name}/>
      </div>
    );
  }
  
}

export default App;
