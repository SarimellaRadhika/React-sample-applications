import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { add_title, delete_note } from '../actions/ActionCreater';
import AddDataHoc from './hoc';
class NotePad extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            flag:false,
            title:"",
            search:""
        };
        this.handleAddNote=this.handleAddNote.bind(this);
        this.handleNote=this.handleNote.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }

handleAddNote()
{
    this.setState({
        flag:true
    });
}
handleNote(e)
{
    this.setState({
        [e.target.name]:e.target.value
    });
}
handleDelete(i)
{
    console.log("at delete",i)
    this.props.dispatch(delete_note(i))
}
componentWillReceiveProps(newProps){
    if(this.props.flag!==newProps.flag)
    {
        this.setState({
            flag:false
        });
        console.log("at componentwillreceiveprops, title",this.state.title)
        let data={
            title:this.state.title,
            note:""
        }
        this.props.dispatch(add_title(data))
    }
}



    render()
    {
        let data=this.props.parentList
     const reg=new RegExp(this.state.search,'i')
     data= data.filter((value)=>
    {   console.log("at render data map",value.title.match(reg))
        return(value.title.match(reg))})
        return(
            <div>
            <button onClick={this.handleAddNote}>Add Note</button>&nbsp;&nbsp;&nbsp;
            search:: <input type="text" name="search"  onChange={this.handleNote}/><br/><br/>
            {
                this.state.search===""?
                this.props.parentList.map((val,i)=>{let path="/Notepad/"+i
                return <div><Link to={path}>{val.title}</Link>&nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.handleDelete(i)}>Delete</button></div>})
                :
                data.map((val,i)=>{let path="/Notepad/"+i
                return <div><Link to={path}>{val.title}</Link>&nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.handleDelete(i)}>Delete</button></div>})
            }
            {this.state.flag?<input type="text" name="title"  onChange={this.handleNote}/>:null}<br/><br/>
            {this.props.children}


            </div>
        );
    }
}
function mapStateToProps(state)
{
    console.log("parentList",state.parentList)
    return{
        parentList:state.parentList
    }
   
}
export default AddDataHoc(connect(mapStateToProps)(NotePad));