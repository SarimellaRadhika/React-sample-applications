import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
class ProjectList extends Component{


    render()
    {
        // let a=this.props.ProjectList 
        //  console.log("at projectlist",a[0])
        return(
            <div>
               <Link to="/ProjectAdd" ><button>Add</button></Link>
               <table>
                   <tbody>
                <tr><td>S.No</td>&nbsp;&nbsp;<td>ProjectName</td>&nbsp;&nbsp;<td>LastDate</td>&nbsp;&nbsp;<td>No.of.stages</td>&nbsp;&nbsp;<td>CreateStages</td>&nbsp;&nbsp;</tr>
               {this.props.ProjectList!==undefined?
             
               this.props.ProjectList.map((val,i)=>{ let path="/Project/"+i+"/StageList/"
               return <tr><td>{i}</td>&nbsp;&nbsp;<td>{val.pname}</td>&nbsp;&nbsp;
               <td>{val.pdate}</td>&nbsp;&nbsp;<td>{val.pstages}</td>&nbsp;&nbsp;<td><Link to={path}><button>Create Stage</button></Link></td>&nbsp;&nbsp;</tr>})
             
                :
               <div></div>
               }
                  </tbody>
              </table>
            
            </div>
        );
    }
}
//export default ProjectList;
function mapStateToProps(state)
{
    //console.log("in connect",ProjectList[0])
    return{
        ProjectList:state.parentList.ProjectList
    }
}
export default connect(mapStateToProps)(ProjectList);
