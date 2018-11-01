import React,{Component} from 'react';
import {connect} from 'react-redux';
import hoc from '../components/hoc';
import {Link} from 'react-router';
import { add_title, delete_title } from '../actions/ActionCreator';
class NotePad extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            flag:false,
            note:null,
            noteList:[]
        };
        this.handleAddNote=this.handleAddNote.bind(this);
        this.handleNote=this.handleNote.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

componentWillReceiveProps(newProps)
{
    if(this.props.flag!==newProps.flag)
    {
        // let temp=this.state.noteList
        // console.log("type",typeof(temp))
        // temp.push(this.state.note)
        // console.log("at notepad",typeof(temp))
        this.setState({
            flag:false
            
        });
        this.props.dispatch(add_title(this.state.note))
}
}
handleAddNote()
{
    this.setState({
        flag:true
    });
}
handleNote(e)
{
    console.log("at handle note to check type",typeof(a))
    this.setState({
        note:e.target.value
    });
}
handleDelete(val)
{
this.props.dispatch(delete_title(val))
}
    render()
    {
        // let temp=[]
        // for(let a in this.props.noteObj)
        // {
        //     console.log("wth is a",a);
        //     temp.push(a)
        //     console.log("temp>>"+temp)
        // }
       

        return(
            <div>
            <button onClick={this.handleAddNote}>Add Note</button><br/><br/>
            {/* {temp.map((value)=>{let path="/"+value+"/edit"
                return <div><Link to={path}>{value}</Link>&nbsp;&nbsp;&nbsp;<button onClick={()=>this.handleDelete(value)}>Delete</button></div>
            })} */}
            {this.props.children}
            {this.state.flag?<input type="text" name="note" onChange={this.handleNote}/>:null}
            


            </div>
        );
    }
}
function mapStateToProps(state)
{
    console.log("at connect",state.noteObj)
    return{
        noteObj:state.noteObj
    }
   
}
export default AddDataHoc(connect(mapStateToProps)(NotePad));