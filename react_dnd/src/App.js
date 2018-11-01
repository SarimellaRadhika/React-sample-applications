import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

function updateState(text){
  this.setState({text:text})
}

class App extends Component {
  constructor(props){
   super(props)
   this.state={
     text:"initial state"
   }      
  }
  render() {
    return (
      <div className="App">
       {this.state.text}
      </div>
    );
  }
}

class Parent extends Component{
  constructor(props)
  {
    super(props);
    this.setState({})
  }
  updateData(e){
    updateState(e)
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="hellooooo" onChange={(e)=>this.updateData(e.target.value)}/>
        <App/>
      </div>
    );
  }
}

export default Parent;
