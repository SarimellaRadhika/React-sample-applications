import React, { Component } from 'react';
//import logo from './logo.svg';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './App.css';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      search:""
    }
  }
  getInput=(e)=>{
    this.setState({
      search:e.target.value
    })
  }
  render() {
     let data=["full meals","fruit salad","brinjal curry","andhra bhojanam","south indian thali",
    "veg biryani","chicken fry","chicken lollypops","chicken biryani","fried chicken","dham biryani",
  "dosa","vada","idly","punugu","upma","chocolate bites","mirchi baggi","chat masala"]
     const reg=new RegExp(this.state.search,'i')
     data= data.filter((value)=>
    {   console.log("at render data map",value.match(reg))
        return(value.match(reg))})
    return (
      <div className="App">
        <header className="App-header">
        <b className="welcome"> Welcome to Swiggy</b>
          <input className="search-location" type="text" style={{float:"left"}} placeholder="location..."/>
          {/* <header className="App-title">Welcome to Swiggy</header> */}
          <header className="right-panel">
            <input className="search" type="text" onChange={this.getInput} placeholder="search item...."/>&nbsp;&nbsp;&nbsp;

            <Link to="/signin">Sign in</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/veg/cart">Cart</Link>
              <img src={require("./cart.png")} alt="no_img"/>
              
          </header>
    
             {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div className="searched_item">{data.map((val,i)=>{return <div>{val}</div>})}</div>
        <div className="sidenav">
                <br/>
                <Link to="/home" activeStyle={{color:"white"}}>Home</Link><br/><br/>
                <Link to="/tiffins" activeStyle={{color:"white"}}>Tiffins</Link><br/><br/>
                <Link to="/veg" activeStyle={{color:"white"}}>Veg</Link><br/><br/>
                <Link to="/nonveg" activeStyle={{color:"white"}}>Nonveg</Link><br/><br/>
                <Link to="/snacks" activeStyle={{color:"white"}}>Snacks</Link>
        </div>
        {this.props.children}
        {/* <Link to="/home">Home</Link> */}
      </div>
    );
  }
}
function mapStateToProps(store){
  return {
    list:store.parentObject.veg
  }
}
export default connect(mapStateToProps)(App);
