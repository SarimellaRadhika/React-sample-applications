import React,{Component} from 'react';
import { addProject } from '../actions/ActionCreators';
import AddDataHoc from './AddDataHoc.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
//import {Link} from 'react-router' 
import ProjectList from './ProjectList';
class ProjectAdd extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            pname:"",
            pdate:"",
            pstages:null
        };
        this.getData=this.getData.bind(this)
       // this.handleBack=this.handleBack.bind(this)
    }
    getData(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    componentWillReceiveProps(newProps)
    {
    console.log("in will receive props---prev props",this.props.flag)
    console.log("in will receive props---next props",newProps.flag)
    if(newProps.flag!==this.props.flag&&this.state.pname!=="")
    {
       // console.log("hi")
        
         //   console.log("hiiiii")
            const {pname,pdate,pstages}=this.state
            let data={
                pname:pname,
                pdate:pdate,
                pstages:pstages,
                stages:[]
            }
           // console.log("hello",data)
            this.props.dispatch(addProject(data))
            this.props.router.push("/ProjectList")
          // this.props.router.push("/ProjectList")
            
        }   
   if(newProps.flag1!==this.props.flag1)
   {
    this.props.router.push("/ProjectList")
    }
    
}  
    

    render()
    {
        return(
            <div>
               *Name::: <input type="text" name="pname" onChange={this.getData}/><br/>
               Date::: <input type="date" name="pdate" onChange={this.getData} /><br/>
               No.of.stages:::<input type="number" name="pstages" onChange={this.getData}/>
               
            </div>
        );
    }
}
function mapStateToProps(state)

{
   
    //console.log("at mapstatetoprops",state.parentList.ProjectList[0])
    return{
        ProjectList:state.parentList.ProjectList
    }
}
export default withRouter(AddDataHoc(connect(mapStateToProps)(ProjectAdd)))
