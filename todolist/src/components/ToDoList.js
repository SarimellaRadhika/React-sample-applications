import React, {Component} from 'react';
import {connect} from 'react-redux';
import { add_todo, delete_todo, completed, filter, edit_priority } from '../actions/actionCreators';
class ToDoList extends Component{
    constructor(props)
    {
        super()
        this.state={
            text:"",
            priority:"",
            index:''
            
        };
        this.addToDoHandler=this.addToDoHandler.bind(this);
        this.handleInputs=this.handleInputs.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleComplete=this.handleComplete.bind(this);
        this.handleListType=this.handleListType.bind(this);
        this.getIndex=this.getIndex.bind(this);
        this.getValue=this.getValue.bind(this);
    }

getIndex(i)
{
    this.setState({
        index:i
    });
}

getValue(e)
{
    this.props.dispatch(edit_priority(this.state.index,e.target.value))
}

handleListType(e)
{
this.props.dispatch(filter(e.target.value))
}

handleInputs(e)
{
    this.setState({
        [e.target.name]:e.target.value
    }
   
);
}


addToDoHandler()
{
const {text,priority}=this.state
let data={
    text:text,
    priority:priority
}
this.props.dispatch(add_todo(data))
}

handleDelete(index)
{
    this.props.dispatch(delete_todo(index))
}

handleComplete(index)
{
    this.props.dispatch(completed(index))
}

render()
{
    console.log(this.props.list)
   
    return(
        <div>
        Text::<input type="text" name="text" value={this.state.text} onChange={this.handleInputs}/>&nbsp;&nbsp;&nbsp;
        Priority::<select name="priority" value={this.state.priority} onChange={this.handleInputs}>
        <option>low</option>
        <option>medium</option>
        <option>high</option>
        </select>&nbsp;&nbsp;&nbsp;
        <button onClick={this.addToDoHandler}>Add</button>&nbsp;&nbsp;&nbsp;
        <select name="listType" onChange={this.handleListType}>
        <option>ToDoList</option>
        <option>CompletedList</option>
       
        </select>
        <br/>
        <br/>
        <br/>
        <table><tbody>
        <tr><td>Task</td>&nbsp;&nbsp;&nbsp;<td>Priority</td></tr>
        {this.props.list!=="CompletedList"?
            
              
       this.props.todoData.map((value,i)=>
       <tr><td>{value.text}</td>&nbsp;&nbsp;&nbsp;
       <td>
       {value.priority}</td>&nbsp;&nbsp;&nbsp;
       <td><select name="priority" defaultValue={value.priority} onChange={this.getValue} onClick={()=>this.getIndex(i)}>
        <option>low</option>
        <option>medium</option>
        <option>high</option>
        </select>
       </td>&nbsp;&nbsp;&nbsp;
       <td><button onClick={()=>this.handleDelete(i)}>Delete</button></td>&nbsp;&nbsp;&nbsp;
       <td><button onClick={()=>this.handleComplete(i)}>Complete</button></td>

       </tr>)
       
       
        :
        
        this.props.completedData.map((value,i)=>{return <tr>
            <td>{value.text}</td>&nbsp;&nbsp;&nbsp;
            <td>{value.priority}</td>&nbsp;&nbsp;&nbsp;
            <td><select name="priority" value={value.priority}  >
        <option>low</option>
        <option>medium</option>
        <option>high</option>
        </select></td>
        </tr>})
       
        }
        </tbody></table>
        </div>
    );
}
}
function storeToProps(state)

{
    console.log("store object",state)
    return{
        todoData:state.parentList.todoList,
        completedData:state.parentList.completedList,
        list:state.parentList.listType
        
    }
   
}
export default connect(storeToProps)(ToDoList);