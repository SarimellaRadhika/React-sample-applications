import React,{Component} from 'react';
import AddDataHoc from './AddDataHoc.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Link} from 'react-router'
class TaskList extends Component{
// componentWillReceiveProps(newProps)
// {
//     if(newProps.flag1!==this.props.flag1)
//     {
//         let index=this.props.params.projectId
//         let path="/Project/"+index+"/StageList"
        
//     this.props.router.push(path)
//      }
// }

    render()
    {
       let pid=this.props.params.projectId
       let sid=this.props.params.stageId
       let path="/Project/"+pid+"/StageList/"+sid+"/TaskAdd"
        return(
         
            <div>
               <Link to={path}><button>Add</button></Link>
               <table>
                   <tbody>
                <tr><td>S.No</td>&nbsp;&nbsp;<td>TaskName</td>&nbsp;&nbsp;<td>LastDate</td></tr>
                {this.props.TaskList!==undefined?
             
               this.props.TaskList.map((val,i)=>{
                   return <tr><td>{i}</td>&nbsp;&nbsp;<td>{val.tname}</td>&nbsp;&nbsp;
               <td>{val.tdate}</td></tr>})
             
                :
               <div>no data in tasks</div>
               } 
                  </tbody>
              </table>
              
            </div>
        );
    }
}
function mapStateToProps(state,ownprops)
{
    let pid=ownprops.params.projectId
    let sid=ownprops.params.stageId
    return{
        TaskList:state.parentList.ProjectList[pid].stages[sid].tasks
    }
}
//export default withRouter(AddDataHoc(connect(mapStateToProps)(TaskList)));
export default AddDataHoc(connect(mapStateToProps)(TaskList));

