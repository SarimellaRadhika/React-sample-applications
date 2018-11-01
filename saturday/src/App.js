import React, { Component } from 'react';
import Counter from './counter.js'
import ToDoList from './ToDoList.js'
import './App.css';

class App extends Component {
  constructor(props)
  {
    console.log("constructor")
    super(props)
    this.state={
      name:false
    };
  }

  changState=(e)=>
  {
    this.setState(
      {name : true}
    );
  }
  componentDidMount()
  {
    console.log("did mount")
  }
  
  /*shouldComponentUpdate()
  {
    console.log("should update")
  }*/
  componentDidUpdate()
  {
    console.log("did update")
  }
  componentWillMount()
  {
    console.log("will mount")
  }
  componentWillUpdate()
  {
    console.log("will update")
  }
  componentWillUnmount()
  {
    console.log("will unmount")
  }
  render() {
    console.log("render")
  
    return (
      <div>
        <h1>hello world</h1>
        <button onClick={this.changState}>ChangeState</button>
        <Child value={this.state.name}/>
        <Counter/>
        <ToDoList/>
        

      </div>
    );
  }
}

class Child extends Component{
  componentWillReceiveProps()
  {
    console.log("will receive props")
  }
  render()
  {
    
    return(
      <div>
      <h3>{this.props.value}</h3>
      </div>
    );
  }
}
export default App;
