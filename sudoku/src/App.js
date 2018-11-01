import React, { Component } from 'react';
import './App.css';
import BigSudoku from './BigSudoku';

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     type:""
  //   }
  // }
  // getType=(e)=>{
  //   this.setState({
  //     type:e.target.value
  //   })
  // }
  render() {
    return (
      <div className="App">
      <h2 className="heading">Welcome To Sudoku</h2>
      {/* <h4 className="heading">Select Type::<select onChange={this.getType}>
        <option>select</option>
        <option>3X3 sudoku</option>
        <option>9X9 sudoku</option>
      </select></h4><br/>
      {this.state.type!==""?
    this.state.type==="3X3 sudoku"? */}
      <BigSudoku/>
    
      </div>
    );
  }
}

export default App;
