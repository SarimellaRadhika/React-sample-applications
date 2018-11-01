import React, {Component} from 'react';
import {connect} from 'react-redux';
import './veg.css';
import { increment_count, decrement_count, } from '../actions/actionCreaters';
//import cart from './cart';
class Veg extends Component{
constructor(props){
    super(props)
    this.state={
        data:[
            {path:"andhra bhojanam.jpg",name:"andhra bhojanam",cost:20,ordered_count:0},
            {path:"brinjal curry.jpg",name:"brinjal curry",cost:30,ordered_count:0},
            {path:"full meals.jpg",name:"full meals",cost:45,ordered_count:0},
            {path:"fruit salad.jpg",name:"fruit salad",cost:50,ordered_count:0},
            {path:"south indian thali.jpg",name:"south indian thali",cost:30,ordered_count:0},
            {path:"veg biryani.jpg",name:"veg biryani",cost:55,ordered_count:0}
        ]
    }
}
handleDecrement=(i)=>{
    let temp=this.state.data

    // if(temp[i].ordered_count<=1){
    //     temp[i].flag=!temp[i].flag
    //    this.setState({
    //        data:temp
    //    })}
    // else{
    
 
    temp[i].ordered_count=temp[i].ordered_count-1
    this.setState({
        data:temp
    })

    this.props.dispatch(decrement_count("veg",i))
}
handleIncrement=(i)=>{
    let temp=this.state.data
    temp[i].ordered_count=temp[i].ordered_count+1
    this.setState({
        data:temp
    })
    this.props.dispatch(increment_count("veg",i))
}

// handleFlag=(i)=>{
//     let temp=this.state.data
//     temp[i].flag=!temp[i].flag
// this.setState({
//     data:temp
// });
// document.getElementById("add"+i).style.display="none";
// document.getElementById("division").style.display="block";
//}

render(){
    let data=this.state.data
  console.log("at render",data)
 
    return(
        <div className="maindiv">
        {this.props.children}
            {
                data.map((val,i)=>{
                    return <div>
                                <div className="card"><img src={require("../veg/"+val.path)} alt="hi" style={{height:150, width:180}}/>
                                    <br/>{val.name}<br/><br/>{val.cost}/-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {val.ordered_count===0?
                
                                        <button onClick={()=>this.handleIncrement(i)}>add</button>
                                                :
                                        <i className="add-item" id={"div"+i}><button onClick={()=>this.handleDecrement(i)}>-</button>{data[i].ordered_count}<button onClick={()=>this.handleIncrement(i)}>+</button></i>
                    
                                        // <button onClick={()=>this.handleFlag(i)}>{val.flag}</button>}
                                    }</div>
                                {(i+1)%3===0?<div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>:null}
                            </div>})
            }
       

        </div>
    );
}
}

export default connect(null)(Veg);