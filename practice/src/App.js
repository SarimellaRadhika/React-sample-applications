import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';
import ToDoText from './ToDoText.js';

class App extends Component {
  constructor(props)
  {
    super()
    this.state={
      count:0
    };
  }
  shoppingList=(e)=>
  {
    this.setState(
      {count:this.state.count+1}
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.shoppingList}>ShoppingList</button>
         {this.state.count?
           <Parent/>
           :
           <h1></h1>
          
        }
        <ToDoText/>
        
       
        
      </div>
    );
  }
}

export default App;
