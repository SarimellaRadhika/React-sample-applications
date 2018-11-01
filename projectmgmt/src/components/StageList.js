import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AddDataHoc from './AddDataHoc.js';
import withRouter from 'react-router';
class StageList extends Component{
    // componentWillReceiveProps(newProps)
    // {
    //     if(newProps.flag1!==this.props.flag1)
    //     {
    //     this.props.router.push("/ProjectList")
    //      }
    // }

    render()
    {
       // let StageList=this.props.StageList
        let index=this.props.params.projectId
        let path="/Project/"+index+"/StageAdd"
        
        return(
         
            <div>
               <Link to={path}><button>Add</button></Link>
               <table>
                   <tbody>
                <tr><td>S.No</td>&nbsp;&nbsp;<td>StageName</td>&nbsp;&nbsp;<td>LastDate</td>&nbsp;&nbsp;<td>No.of.Tasks</td>&nbsp;&nbsp;<td>CreateTask</td>&nbsp;&nbsp;</tr>
               {this.props.ProjectList[index].stages!==undefined?
             
               this.props.ProjectList[index].stages.map((val,i)=>{let path2="/Project/"+index+"/StageList/"+i+"/TaskList/"
                   return <tr><td>{i}</td>&nbsp;&nbsp;<td>{val.sname}</td>&nbsp;&nbsp;
               <td>{val.sdate}</td>&nbsp;&nbsp;<td>{val.stasks}</td>&nbsp;&nbsp;<td><Link to={path2}><button>CreateTask</button></Link></td>&nbsp;&nbsp;</tr>})
             
                :
               <div>no data in stages</div>
               }
                  </tbody>
              </table>
            </div>
        );
    }
}
//export default ProjectList;
function mapStateToProps(state,ownProps)
{
  console.log("in connect of stagelist at params",ownProps.params.projectId)
 
  const index=ownProps.params.projectId
  console.log("in connect of stagelist at stages with 0",state.parentList.ProjectList[0].stages)
  console.log("in connect of stagelist at stages with params",state.parentList.ProjectList[index])
    return{
        ProjectList:state.parentList.ProjectList
    }
}
//export default withRouter(AddDataHoc(connect(mapStateToProps)(StageList)));
export default AddDataHoc(connect(mapStateToProps)(StageList));
