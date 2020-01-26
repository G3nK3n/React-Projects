import React, { Component } from 'react';
import './App.css';
import Valid from './ValidComponent/ValidationComponent';
import Char from './ValidComponent/CharComponent';

class App extends Component {

  state = {
    text: "", 
    length: 0
  }


  stringLengthOutput = (event) => {
 
    let iniValue = event.target.value;
    console.log("init value: " + iniValue);
    var string_array = iniValue.split('');
    console.log("After split: " + string_array)
    
    let count = 0;
    
    if(iniValue == ""){
      this.setState({
        length: 0
      })
    }
    else{
      for(var i=0;i<string_array.length;i++){
        if(string_array[i]!=" ")
          count++;
      }
    }

    this.setState({
      length: count
    })

  }

  render() {

    const style = {
      display: 'inline-block', 
      padding: '16px', 
      textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black'
    };

    return (
      <div className="App">
        <h1>Textbox</h1>
        <input type="text" onChange={(event) => this.stringLengthOutput(event)}/>
        <p>The length of the text above is: {this.state.length}</p>

      <Valid thelength={this.state.length} />
      <Char style={style}></Char>
      
      </div>
    );
  }
  
}

export default App;
