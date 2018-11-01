import React, {Component} from 'react';
import {connect} from 'react-redux';
import { decrement_count, increment_count } from '../actions/actionCreaters';
class Snacks extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {path:"1.jpg",name:1,cost:120,ordered_count:0},
                {path:"2.jpg",name:2,cost:130,ordered_count:0},
                {path:"3.jpg",name:3,cost:145,ordered_count:0},
                {path:"fruit salad",name:4,cost:150,ordered_count:0},
                {path:"5.jpg",name:5,cost:130,ordered_count:0},
                {path:"6.jpg",name:6,cost:155,ordered_count:0},
                {path:"7.jpg",name:7,cost:145,ordered_count:0},
                {path:"8.jpg",name:8,cost:150,ordered_count:0},
                {path:"9.jpg",name:9,cost:130,ordered_count:0},
                {path:"10.jpg",name:10,cost:155,ordered_count:0}
            ]
        }
    }
    handleDecrement=(i)=>{
        let temp=this.state.data
        temp[i].ordered_count=temp[i].ordered_count-1
        this.setState({
            data:temp
        })
        this.props.dispatch(decrement_count("snacks",i))
    }
    handleIncrement=(i)=>{
        let temp=this.state.data
        temp[i].ordered_count=temp[i].ordered_count+1
        this.setState({
            data:temp
        })
        this.props.dispatch(increment_count("snacks",i))
    }
render(){
    let data=this.state.data
    return(
        <div className="maindiv">
            {
                data.map((val,i)=>{
                    return <div>
                                <div className="card"><img src={require("../snacks/"+val.path)} alt="hi" style={{height:150, width:180}}/>
                                    <br/>{val.name}<br/>{val.cost}/-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
export default connect(null)(Snacks);