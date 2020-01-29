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
    
    if(iniValue === ""){
      this.setState({
        length: 0
      })
    }
    else{
      for(var i=0;i<string_array.length;i++){
        if(string_array[i]!==" ")
          count++;
      }
    }

    string_array = string_array.join('');

    this.setState({
      length: count, 
      text: string_array
    })

  }

  deleteChar = (charPosition) => { 
    //const splitText = this.state.text.split('');
    //splitText.splice(charPosition, 1);
    //console.log(splitText);
    //const newText = splitText.join('');
    //this.setState({text: newText});
    /*
    const temp = this.state.text.split('').splice(charPosition, 1);
    this.setState({text: temp});
    */
  }

  render() {

    const style = {
      display: 'inline-block', 
      padding: '16px', 
      textAlign: 'center', 
      margin: '16px', 
      border: '1px solid black', 
      cursor: 'crosshair'
    };

    let charGroup = null;

    charGroup = (
      <div>
        {this.state.text.split('').map((someChar, index) => {
          return <Char style={style} char={someChar} click={this.deleteChar(index)}/>
        })}
      </div>
    )
    return (
      <div className="App">
        <h1>Textbox</h1>
        <input type="text" onChange={(event) => this.stringLengthOutput(event)}/>
        <p>The length of the text above is: {this.state.length}</p>

        <Valid thelength={this.state.length} />

        {charGroup}
      
      </div>
      
    );
  }
}
export default App;
