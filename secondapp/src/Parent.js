import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child.js';
import Child2 from './Child2.js';

class Parentclass extends Component {
    constructor(props)
    {
        super(props);
        
            this.state={
                details:null
            };
        
    }
    showParent=(childData)=>
    {
        this.setState(
            {
                details : childData
               
            }
        );
       

    }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.details==null ?
        <Child showParent={this.showParent}/>
        :
        <Child2 final={this.state.details}/>
        }
       </div>
    );
  }
}

export default Parentclass;
