import React,{Component} from 'react';
import Hoc from './hoc';
import {connect} from 'react-redux';
import { add_msg, delete_msg, edit_msg } from '../actions/ActionCreaters';
class ChatApp extends Component{
    constructor(props)
    {
        super(props)
        this.state={
           user1:"",
           user2:"",
           hover:"",
           editFlag:false
        };
        this.getInput=this.getInput.bind(this);
        this.handleMsg=this.handleMsg.bind(this);
        this.hoverOn=this.hoverOn.bind(this);
        this.hoverOff=this.hoverOff.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleNewtext=this.handleNewtext.bind(this);
        this.handleKeydown=this.handleKeydown.bind(this);
       // this.handleProps=this.handleProps.bind(this);
    }
hoverOn(username,i)
{ 
    
    this.setState({
        hover:username+i
    }); 
}
hoverOff()
{
    this.setState({
        hover:""
    });
}
 componentWillReceiveProps(newprops)
//    handleProps(e)
    {
        if(this.props.flag!==newprops.flag)
        {
            let d=new Date()
            let t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
            console.log("at wiireceive props",t)
            if(this.state.user1!=="")
            {
           let data={
               user:"user1",
               msg:this.state.user1,
               time:t
           }
           console.log("data at wil receilve props",data)
           this.props.dispatch(add_msg(data));
       
        }
        else{
            let data={
                user:"user2",
                msg:this.state.user2,
                time:t
            }
            console.log("data at wil receilve props",data)
            this.props.dispatch(add_msg(data));
        }  
        this.setState({
            user1:"",
            user2:""
        })
       
    }}

    getInput(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleMsg(i)
    {
       // console.log("at handle msg", user)
        let d=new Date()
        let t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
        let data={
            msg:"",
            time:t
        }
        this.props.dispatch(delete_msg(i,data))
        this.setState({
            hover:""
        })
    }

    handleNewtext(e)
    {
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    handleEdit()
    {
        // return <div>
        //     {console.log("at edit msg")}
        //     <input type="text" onChange={this.getInput}/>
        // </div>
        this.setState({
            editFlag:!this.state.editFlag
        })
    }
    handleKeydown(e)
    {
        
    //     if(e.keyCode===13){
    //         console.log("on keydown")
    //     let d=new Date()
    //         let t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
    //         console.log("at wiireceive props",t)
    //         if(this.state.user1!=="")
    //         {
    //        let data={
    //            user:"user1",
    //            msg:this.state.user1,
    //            time:t
    //        }
    //        console.log("data at wil receilve props",data)
    //        this.props.dispatch(edit_msg(data));
    //    this.setState({
    //     editFlag:!this.state.editFlag,
    //     user1:"",
    //     user2:""
    // })
    //     }
    //     else{
    //         let data={
    //             user:"user2",
    //             msg:this.state.user2,
    //             time:t
    //         }
    //         console.log("data at wil receilve props",data)
    //         this.props.dispatch(edit_msg(data));
    //     }
    //     this.setState({
    //         editFlag:!this.state.editFlag,
    //         user1:"",
    //         user2:""
    //     })
    // }   
}
    
   

    render(){
        let d=new Date()
        let t=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
        let style11={color:"green",float:"right"}
        let style12={color:"blue",float:"left"}
        let style21={color:"green",float:"left"}
        let style22={color:"blue",float:"right"}
        let st1={
            background:"green"   ,
            padding:5,
            display:"grid",
            gap:30,
            margin:30
           
            
    }

            let style2={
            height:"500",
            width:"400",
            background:"pink",
            padding:30,
            margin:10,
            display:"grid",
            gap:10,
            float:"left",
            overflow:"scroll"
         
    }
      let style4={
           float:"right",
            height:"500",
            width:"400",
            background:"pink",
            padding:10,
            margin:10,
            overflow:"scroll",
            display:"grid",
            gap:5
    }
    let style5={display:"inline"}

        let m=d.getMinutes()
        let p=eval(m%5)
        let flag_new;
        p===0? flag_new=true:flag_new=false
        
        return(
            <div>
                <table>
                    <tr>
                        <td >
                        <div style={st1}>
                            <div style={style2}>
                                <h3 style={style21}>User1</h3>
                
                                {this.props.list.map((val,i)=>{return  val.msg!=="" ? 
                                <div style={style11} key={i}>   
                                    &nbsp;&nbsp;{val.user==="user1"?<div style={style11} onMouseOver={()=>this.hoverOn(val.user,i)} onMouseLeave={this.hoverOff}><div>{val.msg}&nbsp;&nbsp;{val.time}&nbsp;&nbsp;<div>{this.state.hover===val.user+i? 
                                        <div><button onClick={this.handleEdit}>edit</button>&nbsp;&nbsp;<button onClick={()=>this.handleMsg(i)}>delete</button></div>
                                    : null}</div></div></div>
                                        :
                                        <div style={style12}>{val.msg}&nbsp;&nbsp;{val.time}&nbsp;&nbsp;
                                        </div>
                                        }
                                </div>
                                :
                                <div>{val.user==="user1" ? 
                                    <div style={style11}>you have deleted this msg&nbsp;&nbsp;{val.time}</div>
                                    :<div style={style12}>this msg has been deleted&nbsp;&nbsp;{val.time}</div>}
                                </div>})}<br/>
                                
                                </div>
                          
                            <input type="text" name="user1" onChange={this.getInput} onKeyDown={this.handleProps}/>
                            </div>
                        </td>
                        <td style={st1}>

                            <div style={style4}> 
                                <h3 style={style22}>User2</h3>
                                {this.props.list.map((val,i)=>{ return val.msg!=="" ? 
                            
                                     <div style={style22} key={i}>    
                                        &nbsp;&nbsp;{val.user==="user2"?<div style={style22} onMouseOver={()=>this.hoverOn(val.user,i)} onMouseLeave={this.hoverOff}>{val.msg}&nbsp;&nbsp;{val.time}&nbsp;&nbsp;<div>{this.state.hover==="user2"+i? 
                                        <div><button>edit</button>&nbsp;&nbsp;<button onClick={()=>this.handleMsg(i)}>delete</button></div>
                                        : null}</div></div>
                                        :
                                        <div style={style21}>{val.msg}&nbsp;&nbsp;{val.time}&nbsp;&nbsp;
                                        {/* <div>
                                        {this.state.hover&&val.user==="user2"? 
                                        <div><button>edit</button>&nbsp;&nbsp;<button onClick={()=>this.handleMsg(i)}>delete</button></div>
                                        : null}</div> */}
                                        </div>
                                        }
                                </div>
                                :
                                <div>{val.user==="user2" ? 
                                <div style={style22}>you have deleted this msg&nbsp;&nbsp;{val.time}</div>
                                :<div stytle={style11}>this msg has been deleted&nbsp;&nbsp;{val.time}</div>}
                            </div>})}<br/>
                                
                            </div>
                            <input type="text" name="user2" onChange={this.getInput}/>
                        </td>
                    </tr>

                </table>
           
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return{
        list:state.parentList
    }
}
export default Hoc(connect(mapStateToProps)(ChatApp));