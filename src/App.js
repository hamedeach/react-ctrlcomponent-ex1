import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Echo from './echoCtrlComponent';

class App extends Component {

  state={
    mytext:'',
  }

  updateText(text){
    this.setState(()=>({

      mytext:text
    }))
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={this.state.mytext} onChange={(event=>this.updateText(event.target.value))} />
         
          <Echo mytext={this.state.mytext}></Echo>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
