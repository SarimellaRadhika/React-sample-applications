import React,{Component} from 'react';
import JSEMOJI from 'emoji-js';
import {connect} from 'react-redux';
import Hoc from './Hoc';
import './main.css';
import EmojiPicker from 'emoji-picker-react'
import { add_msg, delete_msg } from '../actionCreaters/ActionCreaters';
class ChatApp extends Component{
    constructor(props){
        super(props);
        this.state={
            user1:"",
            user2:"",
            editFlag:false
        }
    }

    componentWillReceiveProps(newprops)
    {
        console.log("state variables",this.state.user1,this.state.user2)
        if(this.props.flag!==newprops.flag)
        {
            console.log("enter detected")
            let d=new Date();
            let t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            if(this.state.user1!==""&&this.state.user2==="")
                {
                 
                    let data={
                        user:"user1",
                        msg:this.state.user1,
                        time:t
                    }
                    this.props.dispatch(add_msg(data))
                    this.setState({
                        user1:"",
                        editFlag:false
                    })
                }
            else if(this.state.user1===""&&this.state.user2!=="")
                {
                    let data={
                        user:"user2",
                        msg:this.state.user2,
                        time:t
                    }
                    this.props.dispatch(add_msg(data,this.state.editFlag))
                    this.setState({
                        user2:"",
                        editFlag:false
                    })
                }
            else{
                console.log("hellooo")
            }
        }
            
    }

getMsg=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

onMouseOver=(i,msg)=>{
    console.log("on mouse over",msg)
    if(msg!=="")
    {
    let id="btn"+i
    let id1="edit"+i
    console.log("++++++++********",id)
    document.getElementById(id).style.display="block";
    document.getElementById(id1).style.display="block";
    }
}

onMouseLeave=(i)=>{
    let id="btn"+i
    let id1="edit"+i
    console.log("++++++++",id)
    document.getElementById(id).style.display="none";
    document.getElementById(id1).style.display="none";
}

handleEdit=(i)=>{
    let msg=this.props.parentList[i].msg
    let user=this.props.parentList[i].user
    if(user==="user1"){
        this.setState({
            user1:msg,
            editFlag:true
        })
    }
    else{
        this.setState({
            user2:msg,
            editFlag:true,
            emojiFlag:false
        })
    }
}

handleDelete=(i)=>{
    let id="btn"+i
    console.log("++++++++",id)
    document.getElementById(id).style.display="none";
    let d=new Date();
    let time=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
    this.props.dispatch(delete_msg(i,time))
}

handleEmoji=()=>{
this.setState({emojiFlag:true})
//prompt("enter emoji name here")
}

handleEmojiClick=(e)=>{
   let jsemoji=new JSEMOJI();
    let a=jsemoji.replace_colons(`:${e}:`);
    console.log("+++++++",a)
   let temp=this.state.user2+a
    this.setState({user2:temp})
}
render(){
        
        console.log("at render********",this.props.parentList )
        let style1={
            background:"green",
            padding:5,
            height:500,
            width:350,
            gap:20,
            marginLeft:100,
            float:"left"
        }
        return[
            <div key="main" style={style1}>
                <div key="span" className="chatbox">
                    {this.props.parentList.map((val,i)=>{return <div key={i}>{val.user==="user1"?
                            <div className="user1Msg" onMouseOver={()=>this.onMouseOver(i,val.msg)} onMouseLeave={()=>this.onMouseLeave(i)}>
                                 <sup style={{fontSize:"20"}}>{val.msg!==""?val.msg:"you have deleted this msg"}</sup>&nbsp;&nbsp;<sub>{val.time}</sub>
                                 <button id={"btn"+i} style={{display:"none"}} onClick={()=>this.handleDelete(i)}>delete</button> 
                                  <button id={"edit"+i} style={{display:"none"}} onClick={()=>this.handleEdit(i)}>edit</button> 
                            </div>
                            :
                            val.msg!==""?
                            <div className="user2Msg"><sup style={{fontSize:"20"}}>{val.msg}</sup>&nbsp;&nbsp;<sub>{val.time}</sub></div>
                              :
                            <div className="user2Msg"><sup style={{fontSize:"20"}}>this msg has been deleted</sup>&nbsp;&nbsp;<sub>{val.time}</sub></div>
                            
                        }</div>
                    })}
                </div>
                <div><input type="text" name="user1" value={this.state.user1} onChange={this.getMsg}/>
                </div>
            </div>,

            <div key="main2" style={style1}>
                <div key="span2" className="chatbox">
                    {this.props.parentList.map((val,i)=>{return <div key={i}>{val.user==="user2"?
                           <div className="user2Msg" onMouseOver={()=>this.onMouseOver(i,val.msg)} onMouseLeave={()=>this.onMouseLeave(i)}>
                               <sup style={{fontSize:"20"}}>{val.msg!==""?val.msg:"you have deleted this msg"}</sup>&nbsp;&nbsp;<sub>{val.time}</sub>
                               <button id={"btn"+i} style={{display:"none"}} onClick={()=>this.handleDelete(i)}>delete</button>
                               <button id={"edit"+i} style={{display:"none"}} onClick={()=>this.handleEdit(i)}>edit</button>
                           </div>
                           :
                           val.msg!==""?
                           <div className="user1Msg"><sup style={{fontSize:"20"}}>{val.msg}</sup>&nbsp;&nbsp;<sub>{val.time}</sub></div>
                              :
                           <div className="user1Msg"><sup style={{fontSize:"20"}}>"this msg has been deleted"</sup>&nbsp;&nbsp;<sub>{val.time}</sub></div>
                        }</div>
                    })}
                </div>
                <div className="fake-input"><input type="text" name="user2" value={this.state.user2} onChange={this.getMsg} style={{width:"300px"}}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png" alt="no_image" style={{width:"20px",height:"20px"}} onClick={this.handleEmoji}/>
                {this.state.emojiFlag?<EmojiPicker onEmojiClick={this.handleEmojiClick}/>:null}
                </div>
            </div>,
            
        ];
    }
}

function mapStateToProps(store){
return{
    parentList:store.parentList
}
}
export default Hoc(connect(mapStateToProps)(ChatApp));