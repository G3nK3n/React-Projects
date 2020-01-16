import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text: "", 
    length: ""
  }


  stringLengthOutput = (event) => {
 
    this.setState({
      text: event.target.value
    })

    var string_array = this.state.text.split('');
    
    let count = null;
    
    for(var i=0;i<string_array.length;i++){
      if(string_array[i] == " ")
        count = 0;
      else
        count++;
    }
    
    this.setState({
      length: count
    })
  }




  render() {
    return (
      <div className="App">
        <h1>Textbox</h1>
        <input type="text" onChange={(event) => this.stringLengthOutput(event)}/>
        <p>The length of the text above is: {this.state.length}</p>
      </div>
    );
  }
  
}

//FIX THE LENGTH COUNT WHEN IT IS EMPTY

export default App;
