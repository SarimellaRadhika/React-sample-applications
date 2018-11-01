import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatApp from './components/ChatApp';
//import InlineEdit from 'react-edit-inline';
//import profile from './profile.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      flag:false,
      pic:"",
      user1:"Radhika"
    };
  }
  getInput=(e)=>{
   this.setState({
     user1:e.target.value
    });
  }
  handlePic=(e)=>{
    console.log(e.target.files[0])
    console.log(e.target.value)
    this.setState({
      pic:e.target.files[0].name,
      flag:!this.state.flag
    })
  }
  handleClick=()=>{
    return <input type="file" name="pic" onChange={this.handlePic}/>
  }
  handleChange=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }
  render() {
    let path=this.state.pic!==""?
    this.state.pic
    :
    "profile.png"
    
    return (
      <div className="App">
        <ChatApp/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* let path={this.state.pic!==""?this.state.pic:"./profile.png"}
        <input type="text" name="user1" onChange={this.getInput}/> */}
        <p className="App-intro">
         {this.state.user1===""? <input type="text" name="user1" onChange={this.getInput} value={this.state.user1}/>:this.state.user1}
          <button className="buttn" onClick={this.handleChange}><img src={require("./images/"+path)} className="profile" alt="no_img"/></button>
          {this.state.flag?this.handleClick():null}
         
        </p>
        {/* <InlineEdit 
           activeClassName="editing"
           text={this.state.user1}
           paramName="user1"
           change={this.getInput}/> */}
       
      </div>
    );
  }
}

export default App;
